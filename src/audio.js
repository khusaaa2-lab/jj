// Original, quiet pentatonic score + filtered water/wind. No external recordings.
export function createAmbience() {
  let context,
    master,
    enabled = false,
    volume = 0.24,
    interval,
    phrase = 0;
  let noise,
    wash,
    listener = () => {};
  function gain() {
    if (master)
      master.gain.setTargetAtTime(
        enabled && !document.hidden ? volume * 0.32 : 0,
        context.currentTime,
        0.15,
      );
  }
  function note(frequency, at, length, strength = 0.14) {
    const osc = context.createOscillator(),
      env = context.createGain();
    osc.type = "sine";
    osc.frequency.value = frequency;
    env.gain.setValueAtTime(0, at);
    env.gain.linearRampToValueAtTime(strength, at + 1.7);
    env.gain.exponentialRampToValueAtTime(0.0001, at + length);
    osc.connect(env);
    env.connect(master);
    osc.start(at);
    osc.stop(at + length + 0.1);
    osc.onended = () => {
      osc.disconnect();
      env.disconnect();
    };
  }
  function schedule() {
    if (!enabled || document.hidden || context.state !== "running") return;
    const chords = [
      [146.83, 220, 293.66],
      [130.81, 196, 261.63],
      [110, 164.81, 220],
      [130.81, 196, 293.66],
    ];
    const chord = chords[phrase++ % chords.length];
    const at = context.currentTime + 0.05;
    chord.forEach((f, i) => note(f, at + i * 0.4, 10, 0.09));
    note(chord[2] * 2, at + 3.5, 4, 0.045);
  }
  function build() {
    const Audio = window.AudioContext || window.webkitAudioContext;
    if (!Audio) throw new Error("unsupported");
    context = new Audio();
    master = context.createGain();
    master.gain.value = 0;
    master.connect(context.destination);
    const buffer = context.createBuffer(
      1,
      context.sampleRate * 5,
      context.sampleRate,
    );
    const samples = buffer.getChannelData(0);
    let last = 0;
    for (let i = 0; i < samples.length; i++) {
      last = (last + Math.random() * 0.04 - 0.02) / 1.02;
      samples[i] = last;
    }
    noise = context.createBufferSource();
    noise.buffer = buffer;
    noise.loop = true;
    wash = context.createBiquadFilter();
    wash.type = "lowpass";
    wash.frequency.value = 650;
    const noiseGain = context.createGain();
    noiseGain.gain.value = 0.12;
    noise.connect(wash);
    wash.connect(noiseGain);
    noiseGain.connect(master);
    noise.start();
  }
  const visibility = async () => {
    if (!context) return;
    if (document.hidden) {
      gain();
      await context.suspend();
    } else if (enabled) {
      await context.resume();
      gain();
      schedule();
    }
    listener();
  };
  document.addEventListener("visibilitychange", visibility);
  return {
    get enabled() {
      return enabled;
    },
    get volume() {
      return volume;
    },
    get state() {
      return context?.state || "uninitialised";
    },
    onChange(fn) {
      listener = fn;
    },
    async toggle() {
      if (!context) build();
      if (!enabled) {
        await context.resume();
        enabled = true;
        gain();
        schedule();
        clearInterval(interval);
        interval = setInterval(schedule, 8000);
      } else {
        enabled = false;
        gain();
        clearInterval(interval);
        await context.suspend();
      }
      listener();
      return enabled;
    },
    setVolume(value) {
      volume = Math.max(0, Math.min(1, value));
      gain();
      listener();
    },
    async dispose() {
      clearInterval(interval);
      document.removeEventListener("visibilitychange", visibility);
      await context?.close();
    },
  };
}
