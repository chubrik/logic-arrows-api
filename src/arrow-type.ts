/** The types of arrows and blocks, for `world.setArrow()` and the type of an arrow. */
export const ArrowType = {

  /** No arrow: an empty cell. */
  NONE: 0,

  /**
   * Basic red Arrow.
   *
   * Activates: On any incoming signal.
   *
   * On activation: Sends a signal forwards.
   */
  ARROW: 1,

  /**
   * Source block.
   *
   * Activates: Every time.
   *
   * On activation: Sends signals in four directions around it.
   */
  SOURCE_BLOCK: 2,

  /**
   * Blocker arrow.
   *
   * Activates: On any incoming signal.
   *
   * On activation: Turns off an arrow in front of it.
   */
  BLOCKER: 3,

  /**
   * Delay arrow.
   *
   * Activates: Blue on any incoming signal if not active. Red if the current color is blue.
   *
   * On activation: If the signal is red sends a signal forwards.
   */
  DELAY_ARROW: 4,

  /**
   * Detector arrow.
   *
   * Activates: If the cell behind is active.
   *
   * On activation: Sends a signal forwards.
   */
  DETECTOR: 5,

  /**
   * I-Splitter arrow.
   *
   * Activates: On any incoming signal.
   *
   * On activation: Sends a signal both forwards and backwards.
   */
  I_SPLITTER: 6,

  /**
   * L-Splitter arrow.
   *
   * Activates: On any incoming signal.
   *
   * On activation: Sends a signal forward and to the right.
   */
  L_SPLITTER: 7,

  /**
   * T-Splitter arrow.
   *
   * Activates: On any incoming signal.
   *
   * On activation: Sends a signal forward, right, and left.
   */
  T_SPLITTER: 8,

  /**
   * Pulse Generator block.
   *
   * Activates: Red if not active. Blue if the current color is red or blue.
   *
   * On activation: If the signal is red sends signals in four directions around it.
   */
  PULSE_GENERATOR: 9,

  /**
   * Blue arrow.
   *
   * Activates: On any incoming signal.
   *
   * On activation: Sends a signal forwards, skipping one cell.
   */
  BLUE_ARROW: 10,

  /**
   * Diagonal arrow.
   *
   * Activates: On any incoming signal.
   *
   * On activation: Sends a signal diagonally.
   */
  DIAGONAL_ARROW: 11,

  /**
   * Blue I-Splitter arrow.
   *
   * Activates: On any incoming signal.
   *
   * On activation: Sends a signal to the two cells directly in front of it.
   */
  BLUE_I_SPLITTER: 12,

  /**
   * Blue L-Splitter arrow.
   *
   * Activates: On any incoming signal.
   *
   * On activation: Sends a signal forwards, skipping one cell and to the right.
   */
  BLUE_L_SPLITTER: 13,

  /**
   * Diagonal Splitter arrow.
   *
   * Activates: On any incoming signal.
   *
   * On activation: Sends a signal forwards and diagonally.
   */
  DIAGONAL_SPLITTER: 14,

  /**
   * Not Gate arrow.
   *
   * Activates: When there are no incoming signals.
   *
   * On activation: Sends a signal forwards.
   */
  NOT_GATE: 15,

  /**
   * And Gate arrow.
   *
   * Activates: On at least two incoming signals.
   *
   * On activation: Sends a signal forwards.
   */
  AND_GATE: 16,

  /**
   * XOR Gate arrow.
   *
   * Activates: On odd number of incoming signals.
   *
   * On activation: Sends a signal forwards.
   */
  XOR_GATE: 17,

  /**
   * Latch arrow.
   *
   * Activates: On at least two incoming signals. Or when there are no incoming signals and already
   * active.
   *
   * On activation: Sends a signal forwards.
   */
  LATCH: 18,

  /**
   * T Flip-Flop arrow.
   *
   * Activates: On any incoming signal if not active. Or when there are no incoming signals and
   * already active.
   *
   * On activation: Sends a signal forwards.
   */
  T_FLIP_FLOP: 19,

  /**
   * Randomizer arrow.
   *
   * Activates: On any incoming signal with 50% chance.
   *
   * On activation: Sends a signal forwards.
   */
  RANDOMIZER: 20,

  /**
   * Key arrow.
   *
   * Activates: When the selected key is pressed.
   *
   * On activation: Sends a signal forwards.
   */
  KEY: 21,

  /**
   * Source arrow.
   *
   * Activates: On any incoming signal.
   *
   * On activation: Sends a signal forwards.
   *
   * An arrow used in levels. It takes code like a Script block: that code usually gives the level
   * its input, setting a signal on the arrow itself.
   */
  SOURCE: 22,

  /**
   * Target block.
   *
   * Activates: On any incoming signal.
   *
   * A block used in levels. It does not pass the signal on. It takes code like a Script block:
   * that code usually counts the progress of the level in `onActive()`.
   */
  TARGET: 23,

  /**
   * Directional Button arrow.
   *
   * Activates: When pressed with the left mouse button or on any incoming signal.
   *
   * On activation: Sends a signal forwards.
   */
  DIRECTIONAL_BUTTON: 24,

  /**
   * Wall block.
   *
   * Activates: Never.
   *
   * On activation: Does nothing.
   */
  WALL: 25,

  /** Unknown block: a question mark that does nothing. */
  UNKNOWN: 26,

  /**
   * Light Bulb block.
   *
   * Activates: On any incoming signal.
   *
   * On activation: Activates with the selected signal.
   */
  LIGHT_BULB: 27,

  /**
   * Light arrow (a bulb that points in a direction).
   *
   * Activates: On any incoming signal.
   *
   * On activation: Activates with the selected signal and sends a signal forwards.
   */
  LIGHT_ARROW: 28,

  /**
   * Music block.
   *
   * Activates: On any incoming signal.
   *
   * On activation: Plays a musical note.
   */
  MUSIC: 29,

  /**
   * Transmitter arrow.
   *
   * Activates: On any incoming signal.
   *
   * On activation: Creates a projectile in front of it.
   */
  TRANSMITTER: 30,

  /**
   * Projectile arrow.
   *
   * Activates: Never.
   *
   * Always: Moves one cell forwards every step. Colliding with another arrow destroys the
   * projectile and sends a signal to that arrow.
   */
  PROJECTILE: 31,

  /**
   * Script block.
   *
   * Activates: On any incoming signal.
   *
   * Always: Executes the script.
   */
  SCRIPT_BLOCK: 33,

  /**
   * Message block.
   *
   * Activates: On any incoming signal.
   *
   * On activation: Displays a message.
   */
  MESSAGE: 34,

  /**
   * Flash block.
   *
   * Activates: On appearance. The signal color depends on the colors of the arrows that created
   * this flash.
   *
   * Always: Disappears on the next step.
   */
  FLASH: 35,

  /**
   * Logger block.
   *
   * Activates: On any incoming signal.
   *
   * On activation: Displays the incoming signal count.
   */
  LOGGER: 42,

  /**
   * Interval block.
   *
   * Activates: On any incoming signal.
   *
   * On activation: Displays the number of ticks between incoming signals.
   */
  INTERVAL: 43,

} as const;
