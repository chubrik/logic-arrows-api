/**
 * The progress of a level: a number from 0 to 1. The bar at the top of the screen shows it when
 * "Show progress" is on in the settings of the level; the progress is counted either way. When it
 * reaches 1 while the level is played, the level is complete; in the editor of the level it just
 * stays at 1. A step back (Shift+Enter on pause) takes the progress back together with the map.
 * The reset the player does with the N key sets it to 0, and so does world.clearSignals(). On an
 * ordinary map there is no progress: the calls do nothing, and getProgress() returns 0.
 */
declare const level: {
  /**
   * Add a value to the progress; a negative one takes it away. The result is kept within 0 to 1.
   * The change acts from the next tick on: during this tick getProgress() still returns what the
   * progress was before.
   */
  addProgress(value: number): void;

  /** Reset the progress to 0. getProgress() sees the change from the next tick on. */
  clearProgress(): void;

  /**
   * Add progressPerTick to the progress for every tick from fromTick to toTick, both included.
   * A tick counts only once: when it has been confirmed before, it adds nothing, whatever the new
   * value is. Neither does a tick before the last clearProgress() call; the tick of that call
   * itself counts. The ticks must not lie ahead: fromTick <= toTick <= the current tick, or
   * a RangeError is thrown, and so it is for a negative progressPerTick. getProgress() sees the
   * change from the next tick on.
   */
  confirmProgress(fromTick: number, toTick: number, progressPerTick: number): void;

  /**
   * The progress, from 0 to 1. It is kept with single precision, so after addProgress(0.1) it
   * reads 0.10000000149011612: compare it with a margin, not for equality.
   */
  getProgress(): number;
};
