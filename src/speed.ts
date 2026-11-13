/** The positions of the speed control of the game, for game.setSpeed(). */
export const Speed = {
  /** The simulation is paused. */
  PAUSED: 0,

  /** 3 ticks per second. */
  TPS_3: 1,

  /** 12 ticks per second. */
  TPS_12: 2,

  /** 60 ticks per second. */
  TPS_60: 3,

  /** 300 ticks per second. */
  TPS_300: 4,

  /** 1200 ticks per second. */
  TPS_1200: 5,

  /** As many ticks per second as the computer manages. */
  UNLIMITED: 6,
} as const;
