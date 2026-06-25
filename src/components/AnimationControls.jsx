import './AnimationControls.css'

export default function AnimationControls({
  isPlaying,
  onToggle,
  modeLabel,
  onNextMode,
  speed,
  onSpeedChange,
}) {
  return (
    <div className="controls" role="group" aria-label="애니메이션 제어">
      <button
        className={`btn btn-play ${isPlaying ? 'playing' : 'paused'}`}
        onClick={onToggle}
        aria-pressed={isPlaying}
        aria-label={isPlaying ? '애니메이션 정지' : '애니메이션 시작'}
      >
        {isPlaying ? '⏸ 정지' : '▶ 시작'}
      </button>

      <button
        className="btn btn-mode"
        onClick={onNextMode}
        aria-label="춤 스타일 변경"
        disabled={!isPlaying}
      >
        💃 {modeLabel}
      </button>

      <div className="speed-control">
        <label htmlFor="speed-range" className="speed-label">
          속도 {speed.toFixed(1)}x
        </label>
        <input
          id="speed-range"
          type="range"
          min="0.5"
          max="3"
          step="0.5"
          value={speed}
          onChange={e => onSpeedChange(Number(e.target.value))}
          className="speed-slider"
          aria-label="애니메이션 속도 조절"
          disabled={!isPlaying}
        />
      </div>
    </div>
  )
}
