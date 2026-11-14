/** The kinds of arrows, for world.setArrow() and the type of an arrow. */
export const ArrowType = {

  /** No arrow: an empty cell. */
  NONE: 0,

  /**
   * Arrow.
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
   * Blocker.
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
   * Detector.
   *
   * Activates: If the cell behind is active.
   *
   * On activation: Sends a signal forwards.
   */
  DETECTOR: 5,

  /**
   * I-Splitter.
   *
   * Activates: On any incoming signal.
   *
   * On activation: Sends a signal both forwards and backwards.
   */
  I_SPLITTER: 6,

  /**
   * L-Splitter.
   *
   * Activates: On any incoming signal.
   *
   * On activation: Sends a signal forward and to the right.
   */
  L_SPLITTER: 7,

  /**
   * T-Splitter.
   *
   * Activates: On any incoming signal.
   *
   * On activation: Sends a signal forward, right, and left.
   */
  T_SPLITTER: 8,

  /**
   * Pulse generator.
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
   * Blue I-Splitter.
   *
   * Activates: On any incoming signal.
   *
   * On activation: Sends a signal to the two cells directly in front of it.
   */
  BLUE_I_SPLITTER: 12,

  /**
   * Blue L-Splitter.
   *
   * Activates: On any incoming signal.
   *
   * On activation: Sends a signal forwards, skipping one cell and to the right.
   */
  BLUE_L_SPLITTER: 13,

  /**
   * Diagonal Splitter.
   *
   * Activates: On any incoming signal.
   *
   * On activation: Sends a signal forwards and diagonally.
   */
  DIAGONAL_SPLITTER: 14,

  /**
   * Not gate.
   *
   * Activates: When there are no incoming signals.
   *
   * On activation: Sends a signal forwards.
   */
  NOT_GATE: 15,

  /**
   * And gate.
   *
   * Activates: On at least two incoming signals.
   *
   * On activation: Sends a signal forwards.
   */
  AND_GATE: 16,

  /**
   * XOR gate.
   *
   * Activates: On odd number of incoming signals.
   *
   * On activation: Sends a signal forwards.
   */
  XOR_GATE: 17,

  /**
   * Latch.
   *
   * Activates: On at least two incoming signals. Or when there are no incoming signals and already
   * active.
   *
   * On activation: Sends a signal forwards.
   */
  LATCH: 18,

  /**
   * T flip-flop.
   *
   * Activates: On any incoming signal if not active. Or when there are no incoming signals and
   * already active.
   *
   * On activation: Sends a signal forwards.
   */
  T_FLIP_FLOP: 19,

  /**
   * Randomizer.
   *
   * Activates: On any incoming signal with 50% chance.
   *
   * On activation: Sends a signal forwards.
   */
  RANDOMIZER: 20,

  /**
   * Key.
   *
   * Activates: When the selected key is pressed.
   *
   * On activation: Sends a signal forwards.
   */
  KEY: 21,

  /**
   * Source.
   *
   * Activates: On any incoming signal.
   */
  SOURCE: 22,

  /**
   * Target.
   *
   * Activates: On any incoming signal.
   */
  TARGET: 23,

  /**
   * Directional button.
   *
   * Activates: When pressed with the left mouse button or on any incoming signal.
   *
   * On activation: Sends a signal forwards.
   */
  DIRECTIONAL_BUTTON: 24,

  /**
   * Wall.
   *
   * Activates: Never.
   *
   * On activation: Does nothing.
   */
  WALL: 25,

  /** Unknown: a question mark that does nothing. */
  UNKNOWN: 26,

  /**
   * Light bulb.
   *
   * Activates: On any incoming signal.
   *
   * On activation: Activates with the selected signal.
   */
  LIGHT_BULB: 27,

  /**
   * Light bulb that points in a direction.
   *
   * Activates: On any incoming signal.
   *
   * On activation: Activates with the selected signal and sends a signal forwards.
   */
  LIGHT_ARROW: 28,

  /**
   * Music Arrow.
   *
   * Activates: On any incoming signal.
   *
   * On activation: Plays a musical note.
   */
  MUSIC: 29,

  /**
   * Transmitter.
   *
   * Activates: On any incoming signal.
   *
   * On activation: Creates a projectile in front of it.
   */
  TRANSMITTER: 30,

  /**
   * Projectile.
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
   * Message.
   *
   * Activates: On any incoming signal.
   *
   * On activation: Displays a message.
   */
  MESSAGE: 34,

  /**
   * Flash.
   *
   * Activates: On appearance. The signal color depends on the colors of the arrows that created
   * this flash.
   *
   * Always: Disappears on the next step.
   */
  FLASH: 35,

  /**
   * Logger.
   *
   * Activates: On any incoming signal.
   *
   * On activation: Displays the incoming signal count.
   */
  LOGGER: 42,

  /**
   * Interval.
   *
   * Activates: On any incoming signal.
   *
   * On activation: Displays the number of ticks between incoming signals.
   */
  INTERVAL: 43,

} as const;
