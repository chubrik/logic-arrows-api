/**
 * The octaves of a music arrow, placed where they go in the extra of the arrow. Join one with
 * an Instrument and a Note by `|`: Instrument.GUITAR | Octave.FIVE | Note.F_SHARP. They are
 * numbered as in MIDI, so 440 Hz is Octave.FOUR | Note.A. Every instrument has a range of octaves
 * of its own.
 */
export const Octave = {
  /** The bits of the extra that hold the octave. */
  MASK: 0xF0,

  /** How many bits the octave is shifted by in the extra. */
  SHIFT: 4,

  /** Octave 0. */
  ZERO: 0,

  /** Octave 1. */
  ONE: 16,

  /** Octave 2. */
  TWO: 32,

  /** Octave 3. */
  THREE: 48,

  /** Octave 4. */
  FOUR: 64,

  /** Octave 5. */
  FIVE: 80,

  /** Octave 6. */
  SIX: 96,

  /** Octave 7. */
  SEVEN: 112,
} as const;
