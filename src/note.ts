/**
 * The notes of an octave, placed where they go in the extra of a music arrow. Join one with
 * an Instrument and an Octave by `|`: Instrument.GUITAR | Octave.FIVE | Note.F_SHARP.
 */
export const Note = {

  /** The bits of the extra that hold the note. */
  MASK: 0x0F,

  /** The C note. */
  C: 0,

  /** The C# note. */
  C_SHARP: 1,

  /** The D note. */
  D: 2,

  /** The D# note. */
  D_SHARP: 3,

  /** The E note. */
  E: 4,

  /** The F note. */
  F: 5,

  /** The F# note. */
  F_SHARP: 6,

  /** The G note. */
  G: 7,

  /** The G# note. */
  G_SHARP: 8,

  /** The A note. */
  A: 9,

  /** The A# note. */
  A_SHARP: 10,

  /** The B note. */
  B: 11,

} as const;
