/**
 * The notes of an octave, placed where they go in the extra of a music arrow. Join one with
 * an Instrument and an Octave by `|`: Instrument.GUITAR | Octave.FIVE | Note.F_SHARP.
 */
export const Note = {
  /** The bits of the extra that hold the note. */
  MASK: 0x0F,

  /** C. */
  C: 0,

  /** C sharp. */
  C_SHARP: 1,

  /** D. */
  D: 2,

  /** D sharp. */
  D_SHARP: 3,

  /** E. */
  E: 4,

  /** F. */
  F: 5,

  /** F sharp. */
  F_SHARP: 6,

  /** G. */
  G: 7,

  /** G sharp. */
  G_SHARP: 8,

  /** A. */
  A: 9,

  /** A sharp. */
  A_SHARP: 10,

  /** B. */
  B: 11,
} as const;
