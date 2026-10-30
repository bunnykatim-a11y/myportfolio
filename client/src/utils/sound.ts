// Lightweight Web Audio API synthesizers for interactive feedback
class SoundController {
  private ctx: AudioContext | null = null
  private enabled: boolean = false

  constructor() {
    // Initialized on first user interaction to comply with browser autoplay policy
  }

  private initCtx() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
      if (AudioCtx) {
        this.ctx = new AudioCtx()
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume()
    }
  }

  public toggle(): boolean {
    this.enabled = !this.enabled
    if (this.enabled) {
      this.initCtx()
      this.playBeep(520, 0.08, 'sine')
    }
    return this.enabled
  }

  public isEnabled(): boolean {
    return this.enabled
  }

  public setEnabled(val: boolean) {
    this.enabled = val
    if (val) this.initCtx()
  }

  public playHover() {
    if (!this.enabled) return
    this.initCtx()
    if (!this.ctx) return

    try {
      const osc = this.ctx.createOscillator()
      const gain = this.ctx.createGain()
      osc.type = 'sine'
      osc.frequency.setValueAtTime(440, this.ctx.currentTime)
      osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.04)

      gain.gain.setValueAtTime(0.015, this.ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.04)

      osc.connect(gain)
      gain.connect(this.ctx.destination)
      osc.start()
      osc.stop(this.ctx.currentTime + 0.05)
    } catch {
      // Audio context error ignore
    }
  }

  public playClick() {
    if (!this.enabled) return
    this.initCtx()
    if (!this.ctx) return

    try {
      const osc = this.ctx.createOscillator()
      const gain = this.ctx.createGain()
      osc.type = 'triangle'
      osc.frequency.setValueAtTime(600, this.ctx.currentTime)
      osc.frequency.exponentialRampToValueAtTime(320, this.ctx.currentTime + 0.08)

      gain.gain.setValueAtTime(0.04, this.ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.08)

      osc.connect(gain)
      gain.connect(this.ctx.destination)
      osc.start()
      osc.stop(this.ctx.currentTime + 0.09)
    } catch {
      // Audio context error ignore
    }
  }

  public playSuccess() {
    if (!this.enabled) return
    this.initCtx()
    if (!this.ctx) return

    try {
      const now = this.ctx.currentTime
      const notes = [440, 554.37, 659.25, 880]
      notes.forEach((freq, i) => {
        if (!this.ctx) return
        const osc = this.ctx.createOscillator()
        const gain = this.ctx.createGain()
        osc.frequency.setValueAtTime(freq, now + i * 0.07)
        gain.gain.setValueAtTime(0.03, now + i * 0.07)
        gain.gain.exponentialRampToValueAtTime(0.0001, now + (i + 1) * 0.07 + 0.1)

        osc.connect(gain)
        gain.connect(this.ctx.destination)
        osc.start(now + i * 0.07)
        osc.stop(now + (i + 1) * 0.07 + 0.12)
      })
    } catch {
      // Audio context error ignore
    }
  }

  private playBeep(freq: number, duration: number, type: OscillatorType) {
    if (!this.ctx) return
    try {
      const osc = this.ctx.createOscillator()
      const gain = this.ctx.createGain()
      osc.type = type
      osc.frequency.value = freq
      gain.gain.setValueAtTime(0.03, this.ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration)
      osc.connect(gain)
      gain.connect(this.ctx.destination)
      osc.start()
      osc.stop(this.ctx.currentTime + duration)
    } catch {
      // Ignore
    }
  }
}

export const soundManager = new SoundController()
