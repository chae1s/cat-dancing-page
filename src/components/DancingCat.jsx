import { useState, useEffect } from 'react'
import catSvg from '../assets/images/cat.svg'
import '../styles/animations.css'
import './DancingCat.css'

const NOTES = ['♪', '♫', '♩', '♬', '🎵', '🎶']

function FloatingNote({ note, style }) {
  return (
    <span className="floating-note" style={style}>
      {note}
    </span>
  )
}

export default function DancingCat({ isPlaying, mode, speed }) {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      const id = Date.now()
      const note = NOTES[Math.floor(Math.random() * NOTES.length)]
      const x = Math.random() * 180 - 40
      setNotes(prev => [...prev.slice(-6), { id, note, x }])
      setTimeout(() => {
        setNotes(prev => prev.filter(n => n.id !== id))
      }, 1800)
    }, 600 / speed)

    return () => clearInterval(interval)
  }, [isPlaying, speed])

  const animDuration = `${1.2 / speed}s`

  return (
    <div className="dancing-cat-wrapper">
      <div
        className={`cat-stage ${isPlaying ? 'disco-glow' : ''}`}
        aria-label={isPlaying ? '고양이가 춤추고 있어요' : '고양이가 쉬고 있어요'}
      >
        <div className="notes-container" aria-hidden="true">
          {notes.map(({ id, note, x }) => (
            <FloatingNote
              key={id}
              note={note}
              style={{
                left: `calc(50% + ${x}px)`,
                animationDuration: `${1.6 / speed}s`,
              }}
            />
          ))}
        </div>

        <div
          className={`cat-image-wrap ${isPlaying ? `anim-${mode}` : 'anim-idle'}`}
          style={{ animationDuration: animDuration }}
        >
          <img
            src={catSvg}
            alt="춤추는 고양이"
            className="cat-image"
            draggable={false}
          />
        </div>
      </div>

      <div className="stage-floor" aria-hidden="true">
        <div className="floor-reflection" />
      </div>
    </div>
  )
}
