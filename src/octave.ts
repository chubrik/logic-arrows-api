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

  /** Octave 0: the sub-contra octave. */
  ZERO: 0,

  /** Octave 1: the contra octave. */
  ONE: 16,

  /** Octave 2: the great octave. */
  TWO: 32,

  /** Octave 3: the small octave. */
  THREE: 48,

  /** Octave 4: the one-line octave, with middle C and the A of 440 Hz. */
  FOUR: 64,

  /** Octave 5: the two-line octave. */
  FIVE: 80,

  /** Octave 6: the three-line octave. */
  SIX: 96,

  /** Octave 7: the four-line octave. */
  SEVEN: 112,

} as const;
