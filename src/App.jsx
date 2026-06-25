import DancingCat from './components/DancingCat'
import AnimationControls from './components/AnimationControls'
import { useAnimation } from './hooks/useAnimation'
import './App.css'

export default function App() {
  const {
    isPlaying,
    toggle,
    currentMode,
    modeLabel,
    nextMode,
    speed,
    changeSpeed,
  } = useAnimation()

  return (
    <main className="app">
      <header className="app-header">
        <h1 className="title">🐱 댄싱 캣</h1>
        <p className="subtitle">클릭해서 고양이를 춤추게 하세요!</p>
      </header>

      <section
        className="cat-section"
        onClick={toggle}
        role="button"
        tabIndex={0}
        aria-label={isPlaying ? '클릭하여 정지' : '클릭하여 시작'}
        onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && toggle()}
      >
        <DancingCat isPlaying={isPlaying} mode={currentMode} speed={speed} />
      </section>

      <section className="controls-section" onClick={e => e.stopPropagation()}>
        <AnimationControls
          isPlaying={isPlaying}
          onToggle={toggle}
          modeLabel={modeLabel}
          onNextMode={nextMode}
          speed={speed}
          onSpeedChange={changeSpeed}
        />
      </section>

      <footer className="app-footer">
        <p>Made with ❤️ &amp; 🐱</p>
      </footer>
    </main>
  )
}
