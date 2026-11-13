/**
 * The colors of walls and lights, placed where they go in the extra of the arrow. Join one with
 * a Letter or a Brightness by `|`: Letter.A | Color.RED.
 */
export const Color = {
  /** The bits of the extra that hold the color. */
  MASK: 0x0F,

  /** White; for walls only: a light of this color stays dark even under a signal. */
  WHITE: 0,

  /** Red. */
  RED: 1,

  /** Blue. */
  BLUE: 2,

  /** Yellow. */
  YELLOW: 3,

  /** Green. */
  GREEN: 4,

  /** Orange. */
  ORANGE: 5,

  /** Purple. */
  PURPLE: 6,

  /** Black; for walls only. */
  BLACK: 7,
} as const;
