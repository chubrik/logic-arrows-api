/**
 * The brightness of a light, placed where it goes in the extra of the arrow. Join it with a Color
 * by `|`: Brightness.BRIGHT | Color.RED.
 */
export const Brightness = {

  /** The bits of the extra that hold the brightness. */
  MASK: 0x10,

  /** How many bits the brightness is shifted by in the extra. */
  SHIFT: 4,

  /** The usual light. */
  NORMAL: 0,

  /** The light with an extra glow effect. */
  BRIGHT: 16,

} as const;
