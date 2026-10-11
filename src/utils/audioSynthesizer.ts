/**
 * Web Audio API based Pentatonic Vietnamese Traditional Flute & Bell Synthesizer
 * Plays gentle ambient traditional melodies without needing external audio files.
 */
class CulturalAudioPlayer {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private timerId: number | null = null;
  private currentTrack: 'sao_truc' | 'cong_chieng' | 'dan_tinh' = 'sao_truc';

  // Pentatonic traditional scales (Hò, Xự, Xang, Xê, Cống)
  private scales = {
    sao_truc: [261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 587.33, 659.25], // C Major Pentatonic
    cong_chieng: [130.81, 146.83, 164.81, 196.00, 220.00, 261.63], // Deep resonant gong
    dan_tinh: [220.00, 246.94, 277.18, 329.63, 369.99, 440.00] // Then lute sweet tuning
  };

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public playNote(freq: number, duration: number = 1.2, type: OscillatorType = 'sine') {
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      // Smooth attack & gentle decay
      gain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.08, this.ctx.currentTime + 0.15);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch {
      // Audio fallback
    }
  }

  public startAmbience(track: 'sao_truc' | 'cong_chieng' | 'dan_tinh' = 'sao_truc') {
    this.initContext();
    this.stopAmbience();
    this.currentTrack = track;
    this.isPlaying = true;

    const scale = this.scales[track];
    const playRandomMelody = () => {
      if (!this.isPlaying) return;

      const randomNote = scale[Math.floor(Math.random() * scale.length)];
      const oscType: OscillatorType = track === 'cong_chieng' ? 'triangle' : track === 'dan_tinh' ? 'sawtooth' : 'sine';
      const duration = track === 'cong_chieng' ? 2.5 : 1.8;

      this.playNote(randomNote, duration, oscType);

      // Schedule next note with natural tempo
      const nextDelay = 800 + Math.random() * 1200;
      this.timerId = window.setTimeout(playRandomMelody, nextDelay);
    };

    playRandomMelody();
  }

  public stopAmbience() {
    this.isPlaying = false;
    if (this.timerId) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  public getCurrentTrack(): string {
    return this.currentTrack;
  }
}

export const culturalAudio = new CulturalAudioPlayer();
