/**
 * The progress of a level: a number from 0 to 1. The bar at the top of the screen shows it when
 * "Show progress" is on in the settings of the level; the progress is counted either way. When it
 * reaches 1 while the level is played, the level is complete; in the editor of the level it just
 * stays at 1. A step back (Shift+Enter while paused) takes the progress back together with the map.
 * The reset the player does with the N key sets it to 0, and so do `world.clearSignals()` and any
 * edit of the map by the player; the edits a script or the cat makes leave it as it is. On an
 * ordinary map there is no progress: the calls do nothing, and `getProgress()` returns 0.
 */
declare const level: {
  /**
   * Add a value to the progress; a negative one subtracts. The result is kept within 0 to 1. The
   * change acts from the next tick on: during this tick `getProgress()` still returns what the
   * progress was before.
   */
  addProgress(value: number): void;

  /** Reset the progress to 0. `getProgress()` sees the change from the next tick on. */
  clearProgress(): void;

  /**
   * Add progress for a span of ticks: `progressPerTick` for every tick from `fromTick` to `toTick`,
   * both included. It is the way to count progress when "Signal prediction" is on in the settings
   * of the level.
   *
   * With the prediction on, the game runs the simulation some ticks ahead of what the player sees.
   * A call made during that run counts for the ticks of its span that the player has already
   * reached, so the bar starts to fill as soon as the right circuit is built, before the signal
   * visibly gets to the Target block. For that, let the Target block confirm a span that reaches
   * back as far as the signal may travel, here 30 ticks:
   * `onActive(e => level.confirmProgress(Math.max(0, e.tick - 30), e.tick, 0.002))`. A span of one
   * tick gains nothing from the prediction, and without the prediction a span is simply added at
   * once when the signal arrives.
   *
   * A tick counts only once, however many calls name it, and a tick before the last
   * `clearProgress()` call does not count at all. A span that starts below tick 0, ends before it
   * starts or ends after the current tick throws a `RangeError`, and so does a negative
   * `progressPerTick`. `getProgress()` sees the change from the next tick on.
   */
  confirmProgress(fromTick: number, toTick: number, progressPerTick: number): void;

  /**
   * The progress, from 0 to 1. It is kept with single precision, so after `addProgress(0.1)` it
   * reads 0.10000000149011612: compare it with a margin, not for equality.
   */
  getProgress(): number;
};
