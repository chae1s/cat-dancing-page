import { useState, useCallback } from 'react'

const DANCE_MODES = ['dance', 'bounce', 'wiggle', 'spin-bounce', 'float']
const MODE_LABELS = {
  dance: '댄스',
  bounce: '바운스',
  wiggle: '위글',
  'spin-bounce': '스핀',
  float: '플로트',
}

export function useAnimation() {
  const [isPlaying, setIsPlaying] = useState(true)
  const [modeIndex, setModeIndex] = useState(0)
  const [speed, setSpeed] = useState(1)

  const currentMode = DANCE_MODES[modeIndex]

  const toggle = useCallback(() => setIsPlaying(p => !p), [])

  const nextMode = useCallback(() => {
    setModeIndex(i => (i + 1) % DANCE_MODES.length)
  }, [])

  const changeSpeed = useCallback((val) => {
    setSpeed(val)
  }, [])

  return {
    isPlaying,
    toggle,
    currentMode,
    modeLabel: MODE_LABELS[currentMode],
    nextMode,
    speed,
    changeSpeed,
    modes: DANCE_MODES,
    modeLabels: MODE_LABELS,
  }
}
