/**
 * The colors of walls and lights, placed where they go in the extra of the arrow. Join one with
 * a Letter or a Brightness by `|`: Letter.A | Color.RED.
 */
export const Color = {

  /** The bits of the extra that hold the color. */
  MASK: 0x0F,

  /**
   *  The white color.
   * 
   *  For walls only: a light of this color stays dark even under a signal.
   */
  WHITE: 0,

  /** The red color. */
  RED: 1,

  /** The blue color. */
  BLUE: 2,

  /** The yellow color. */
  YELLOW: 3,

  /** The green color. */
  GREEN: 4,

  /** The orange color. */
  ORANGE: 5,

  /** The purple color. */
  PURPLE: 6,

  /**
   *  The black color.
   * 
   *  For walls only.
   */
  BLACK: 7,

} as const;
