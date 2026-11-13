/**
 * The letters and digits a wall can show, placed where they go in the extra of the arrow. Join one
 * with a Color by `|`: Letter.A | Color.RED.
 */
export const Letter = {
  /** The bits of the extra that hold the letter. */
  MASK: 0x3F0,

  /** How many bits the letter is shifted by in the extra. */
  SHIFT: 4,

  /** No letter: a blank wall. */
  NONE: 0,

  /** The letter A. */
  A: 16,

  /** The letter B. */
  B: 32,

  /** The letter C. */
  C: 48,

  /** The letter D. */
  D: 64,

  /** The letter E. */
  E: 80,

  /** The letter F. */
  F: 96,

  /** The letter G. */
  G: 112,

  /** The letter H. */
  H: 128,

  /** The letter I. */
  I: 144,

  /** The letter J. */
  J: 160,

  /** The letter K. */
  K: 176,

  /** The letter L. */
  L: 192,

  /** The letter M. */
  M: 208,

  /** The letter N. */
  N: 224,

  /** The letter O. */
  O: 240,

  /** The letter P. */
  P: 256,

  /** The letter Q. */
  Q: 272,

  /** The letter R. */
  R: 288,

  /** The letter S. */
  S: 304,

  /** The letter T. */
  T: 320,

  /** The letter U. */
  U: 336,

  /** The letter V. */
  V: 352,

  /** The letter W. */
  W: 368,

  /** The letter X. */
  X: 384,

  /** The letter Y. */
  Y: 400,

  /** The letter Z. */
  Z: 416,

  /** The digit 0. */
  DIGIT_0: 432,

  /** The digit 1. */
  DIGIT_1: 448,

  /** The digit 2. */
  DIGIT_2: 464,

  /** The digit 3. */
  DIGIT_3: 480,

  /** The digit 4. */
  DIGIT_4: 496,

  /** The digit 5. */
  DIGIT_5: 512,

  /** The digit 6. */
  DIGIT_6: 528,

  /** The digit 7. */
  DIGIT_7: 544,

  /** The digit 8. */
  DIGIT_8: 560,

  /** The digit 9. */
  DIGIT_9: 576,
} as const;
