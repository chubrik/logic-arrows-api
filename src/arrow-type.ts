/** The kinds of arrows, for world.setArrow() and the type of an arrow. */
export const ArrowType = {
  /** No arrow: an empty cell. */
  NONE: 0,

  /** Arrow. */
  ARROW: 1,

  /** Source block. */
  SOURCE_BLOCK: 2,

  /** Blocker. */
  BLOCKER: 3,

  /** Delay arrow. */
  DELAY_ARROW: 4,

  /** Detector. */
  DETECTOR: 5,

  /** I-Splitter. */
  I_SPLITTER: 6,

  /** L-Splitter. */
  L_SPLITTER: 7,

  /** T-Splitter. */
  T_SPLITTER: 8,

  /** Pulse generator. */
  PULSE_GENERATOR: 9,

  /** Blue arrow. */
  BLUE_ARROW: 10,

  /** Diagonal arrow. */
  DIAGONAL_ARROW: 11,

  /** Blue I-Splitter. */
  BLUE_I_SPLITTER: 12,

  /** Blue L-Splitter. */
  BLUE_L_SPLITTER: 13,

  /** Diagonal Splitter. */
  DIAGONAL_SPLITTER: 14,

  /** Not gate. */
  NOT_GATE: 15,

  /** And gate. */
  AND_GATE: 16,

  /** XOR gate. */
  XOR_GATE: 17,

  /** Latch. */
  LATCH: 18,

  /** T flip-flop. */
  T_FLIP_FLOP: 19,

  /** Randomizer. */
  RANDOMIZER: 20,

  /** Key. */
  KEY: 21,

  /** Source. */
  SOURCE: 22,

  /** Target. */
  TARGET: 23,

  /** Directional button. */
  DIRECTIONAL_BUTTON: 24,

  /** Wall. */
  WALL: 25,

  /** Unknown: a question mark that does nothing. */
  UNKNOWN: 26,

  /** Light bulb. */
  LIGHT_BULB: 27,

  /** Light bulb that points in a direction. */
  LIGHT_ARROW: 28,

  /** Music Arrow. */
  MUSIC: 29,

  /** Transmitter. */
  TRANSMITTER: 30,

  /** Projectile. */
  PROJECTILE: 31,

  /** Script block. */
  SCRIPT_BLOCK: 33,

  /** Message. */
  MESSAGE: 34,

  /** Flash. */
  FLASH: 35,

  /** Logger. */
  LOGGER: 42,

  /** Interval. */
  INTERVAL: 43,
} as const;
