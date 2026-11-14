/**
 * Fires on every tick, even if the script block is not activated. When the player steps the
 * simulation back (Shift+Enter on pause) and then runs it forward, it fires again for the ticks
 * that are run anew. Only one callback is kept: a second call replaces the previous one.
 */
declare function always(callback: (event: BlockEvent) => void): void;

/**
 * Decode a Base64 string into a string whose every character is one byte, 0 to 255. The padding
 * with = may be left out; a string that is not Base64 throws an error.
 */
declare function atob(data: string): string;

/**
 * Encode a string as Base64. Every character of it is taken as one byte, so a character above 255
 * throws an error.
 */
declare function btoa(data: string): string;

/** The game around the map: its speed, the camera and what the player is allowed to do. */
declare const game: {
  /**
   * Fit the cells from (x0, y0) up to, but not including, (x1, y1) into the screen: the camera
   * moves to their center and takes the scale at which they reach the edges of the screen, within
   * the limits of the scale. An area without a positive width and height throws a RangeError.
   * The camera glides for about a second of real time at any game speed, even on pause, and the
   * player cannot act meanwhile; then the promise settles. Another camera call made before that
   * cancels the glide, and the promise is rejected with an Error.
   */
  focusCamera(x0: number, y0: number, x1: number, y1: number): Promise<void>;

  /**
   * Center the camera on the cell (x, y), keeping the scale. The camera glides for about a second
   * of real time at any game speed, even on pause, and the player cannot act meanwhile; then the
   * promise settles. Another camera call made before that cancels the glide, and the promise is
   * rejected with an Error; only a zoomCamera() of the same tick runs together with it.
   */
  moveCamera(x: number, y: number): Promise<void>;

  /**
   * Switch the map into the key mode: an arrow that is sensitive to a key gets activated while
   * the player holds that key, so a block can read the keyboard through world.getSignal().
   */
  setKeyMode(active: boolean): void;

  /**
   * Allow or forbid the player an action, by the name of the permission; an unknown name throws
   * a RangeError. A permission binds the player alone: with moveCamera or zoomCamera forbidden,
   * the camera calls of a script still work.
   */
  setPlayerPermission(name: PlayerPermission, enabled: boolean): void;

  /**
   * Set the tick rate, by the positions of the speed control of the game:
   * 0 = paused, 1 = 3 ticks per second, 2 = 12, 3 = 60, 4 = 300, 5 = 1200, 6 = unlimited. Any other
   * number throws a RangeError.
   */
  setSpeed(level: Speed): void;

  /**
   * Give the player an arrow or take it away, by its type: 1 to 43, any other number throws
   * a RangeError. A disabled arrow leaves the toolbar and the inventory: the player cannot select
   * it, pick it from the map or paste it, a paste just skips such arrows; if it was selected, the
   * selection is dropped, with no 'selectArrow' action. Enabling also brings in the arrows the game
   * does not offer by itself, like Source, Target, Projectile and Flash. The setting survives
   * a reset of all signals (the N key), but not a reload of the map.
   */
  setToolbarArrow(id: ArrowType, enabled: boolean): void;

  /**
   * Set the camera scale, the size of a cell in pixels, keeping the center of the screen: 2 to
   * 128, any other number throws a RangeError. The camera glides for about a second of real time
   * at any game speed, even on pause, and the player cannot act meanwhile; then the promise
   * settles. Another camera call made before that cancels the glide, and the promise is rejected
   * with an Error; only a moveCamera() of the same tick runs together with it.
   */
  zoomCamera(scale: number): Promise<void>;
};

/** Script block coordinates; the block has them even before the first tick. */
declare function getPosition(): Position;

/**
 * Current tick count: 0 while the map loads, 1 inside the first always() call. The count restarts
 * from 1 after world.clearSignals() and after the reset of all signals by the player (the N key),
 * which also reruns the block code.
 */
declare function getTick(): number;

/**
 * Shared state between script blocks; it lives in memory only and is gone after a map reload or
 * a reset of all signals (the N key). When the player steps the simulation back (Shift+Enter on
 * pause), it is rewound together with the map, unlike the variables of the code. It is a proxy
 * over JSON: reading a property parses the stored string, writing serializes the value. Therefore:
 * - a typed array arrives as a plain object, a Date as a string, NaN as null, and a function or
 *   a BigInt as undefined;
 * - changing a value in place does nothing, only an assignment stores it;
 * - every read parses the whole string again and every write serializes the whole value, so keep
 *   a large value in a variable instead of reading it twice.
 */
declare const globalState: Record<string, any>;

/**
 * Load a text of a built-in level by its key, like 'R1.1' or 'Latch.task', in the language of the
 * game. The texts of the game interface are not given out: such a key comes back unchanged, and so
 * does an unknown one. The keys are case-sensitive; without a key the result is an empty string.
 */
declare function loadText(key?: string): string;

/**
 * Print a line to the output of the script block, which is shown in its editor; the values are
 * serialized with JSON.stringify and joined with spaces. A value that cannot be serialized is
 * printed as "[unserializable]". When the player steps the simulation back (Shift+Enter on pause),
 * the lines of the ticks that are undone disappear from the output.
 */
declare function log(...values: any[]): void;

/**
 * Fires on every tick while a signal activates the script block. Only one callback is kept:
 * a second call replaces the previous one.
 */
declare function onActive(callback: (event: BlockEvent) => void): void;

/**
 * Fires when the player edits the map: places, removes, rotates or flips arrows, changes their
 * settings, pastes, undoes or redoes. It comes one tick after the edit; selecting arrows is not
 * an edit.
 */
declare function onPlayerMapAction(callback: (event: PlayerMapActionEvent) => void): void;

/**
 * Fires while the player moves the pointer; x and y are fractions of the screen, from (0, 0) in
 * its top left corner to (1, 1) in the bottom right one, and several events may arrive within one
 * tick.
 */
declare function onPlayerMouseMove(callback: (x: number, y: number) => void): void;

/**
 * Fires when the player uses a tool. While the game is paused the events are held back, and all
 * of them arrive on the first tick after the pause.
 */
declare function onPlayerToolAction(callback: (event: ToolActionEvent) => void): void;

/**
 * Fires once while the map loads, at tick 0, before the first always() call. The code of a block
 * pasted onto a running map starts without it, and so does the code rerun by a reset of all signals
 * (the N key). Only one callback is kept: a second call replaces the previous one.
 */
declare function onStart(callback: (event: BlockEvent) => void): void;

/**
 * The clock of the script block. A block has no timers, neither setTimeout() nor setInterval(),
 * so this is the way to measure real time.
 */
declare var performance: Performance;

/**
 * Display text on screen; without a text it hides the text any block has shown. The next button
 * appears only with onNext and calls it when the player presses it, leaving the text in place.
 * The text takes markup: **bold**, \n for a line break, --- with a space or a line break on both
 * sides for a horizontal rule, @N for the icon of arrow type N followed by its name, @N[label] for
 * the same icon with a label of your own instead of the name, #[Space] for a key cap; the names of
 * the arrows and of some keys, like Space or ArrowUp, come in the language of the game.
 */
declare function showText(text?: string, onNext?: () => void): void;

/**
 * State of this script block alone; other blocks do not see it. It lives in memory only: it is gone
 * after a map reload or a reset of all signals (the N key), but it stays when the code of the block
 * is replaced. When the player steps the simulation back (Shift+Enter on pause), it is rewound
 * together with the map, unlike the variables of the code. It is a proxy over JSON: reading
 * a property parses the stored string, writing serializes the value. Therefore:
 * - a typed array arrives as a plain object, a Date as a string, NaN as null, and a function or
 *   a BigInt as undefined;
 * - changing a value in place does nothing, only an assignment stores it;
 * - every read parses the whole string again and every write serializes the whole value, so keep
 *   a large value in a variable instead of reading it twice.
 */
declare const state: Record<string, any>;

/** The map: its arrows and the signals on them. */
declare const world: {
  /**
   * Clear all signals and restart the tick count: the next tick is tick 1. Unlike the reset the
   * player does with the N key, it does not rerun the code of the blocks, keeps state and
   * globalState and sends no 'clearSignals' tool action.
   */
  clearSignals(): void;

  /**
   * Copy an arrow from coordinates (xSrc, ySrc) to coordinates (xDst, yDst); an empty source cell
   * clears the destination. getArrow() sees the change from the next tick on.
   */
  copy(xSrc: number, ySrc: number, xDst: number, yDst: number): void;

  /**
   * Copy a region of arrows from coordinates (xSrc0, ySrc0) - (xSrc1, ySrc1), both corners included
   * and given in any order; its top left cell lands at (xDst, yDst). The source and the target may
   * overlap: the region is copied as it was before the call. getArrow() sees the change from the
   * next tick on.
   */
  copyRegion(
    xSrc0: number, ySrc0: number, xSrc1: number, ySrc1: number, xDst: number, yDst: number): void;

  /**
   * Copy a region of arrows with signals from coordinates (xSrc0, ySrc0) - (xSrc1, ySrc1), both
   * corners included and given in any order; its top left cell lands at (xDst, yDst), and the
   * copied signals keep travelling in the copy. The source and the target may overlap: the region
   * is copied as it was before the call. getArrow() sees the change from the next tick on.
   */
  copyRegionWithSignals(
    xSrc0: number, ySrc0: number, xSrc1: number, ySrc1: number, xDst: number, yDst: number): void;

  /** Read an arrow; null where there is none, in an empty cell or beyond the existing chunks. */
  getArrow(x: number, y: number): Arrow | null;

  /**
   * All existing chunks of 16×16 cells, by their coordinates in chunks, not in cells: the chunk
   * (x, y) holds the cells from (16x, 16y) to (16x + 15, 16y + 15). A chunk exists while it holds
   * an arrow; one that comes into being during a tick is listed from the next tick on.
   */
  getChunks(): Position[];

  /** Script block coordinates; the block has them even before the first tick. */
  getPosition(): Position;

  /**
   * Read a signal: 0 none, 1 red, 2 blue, 3 yellow, 4 green, 5 orange, 6 purple; null where there
   * is no arrow.
   */
  getSignal(x: number, y: number): Signal | null;

  /**
   * Current tick count: 0 while the map loads, 1 inside the first always() call. The count restarts
   * from 1 after world.clearSignals() and after the reset of all signals by the player (the N key),
   * which also reruns the block code.
   */
  getTick(): number;

  /**
   * Read the number an arrow shows; null for a cell that shows none. A logger (type 42) shows how
   * many signals reach it on this tick, 0 when none does. An interval arrow (type 43) shows how
   * many ticks passed between the last two signals it received; the number stays until the next
   * signal, and before the second signal it is null.
   */
  getValue(x: number, y: number): number | null;

  /**
   * Remove an arrow; getArrow() still returns it during this tick and null from the next one on.
   */
  removeArrow(x: number, y: number): void;

  /**
   * Set an arrow, or clear the cell with arrowType 0; rotation 0 points up, 1 right, 2 down,
   * 3 left, and flip mirrors the arrow left to right before the rotation. getArrow() sees the
   * change from the next tick on: during this tick it still returns what the cell held before.
   */
  setArrow(
    x: number, y: number, arrowType: ArrowType, rotation?: Rotation, flip?: boolean,
    extra?: number): void;

  /**
   * Set the code of a script block, a Source or a Target; a Message does not take it. The new code
   * does not run during the call: it starts on the next tick, and only when set from onActive() it
   * starts on the same tick, before always(). onStart does not fire for it, and the previous code
   * is dropped together with its callbacks. A block may set its own code too. Setting the code
   * a block already has does nothing: the block is not restarted, and a space added at the end does
   * not make the code different.
   */
  setScriptBlockCode(x: number, y: number, code: string): void;

  /**
   * Set a signal: 0 none, 1 red, 2 blue, 3 yellow, 4 green, 5 orange, 6 purple; an empty cell is
   * ignored. The signal acts once this tick is over and is passed on at once, so getSignal() does
   * not show it on the cell itself: on the next tick it is already on the arrows that cell feeds.
   * A signal of a color that is not the arrow's own is not passed on.
   */
  setSignal(x: number, y: number, signal: Signal): void;

  /**
   * Spawn count particles at a cell; they fly apart in all directions and live for about a second.
   * The particleId is 0 for round, smooth particles and 1 for rougher ones. The options:
   * - duration, 0 by default: the seconds over which the particles are released one after another;
   *   with 0 all of them burst at once;
   * - gravityX and gravityY, 0 by default: an acceleration to the right and down, to the left and
   *   up when negative, roughly in cells per second squared, whatever the scale of the camera: with
   *   gravityY 40 a particle falls about 25 cells over its life;
   * - color, '#ffffff' by default: a string of the form #RRGGBB, anything else throws
   *   a RangeError; the white of the default is lost on the background of the light theme;
   * - blendMode, 'alpha' by default: 'alpha' paints the particles as they are, 'additive' brightens
   *   what is under them and 'multiply' darkens it, so 'additive' shows best on the dark theme and
   *   'multiply' on the light one; any other value throws a RangeError;
   * - rotation, 0 by default: turns the particles themselves, not the directions they fly in,
   *   clockwise, in radians.
   */
  spawnParticles(
    x: number, y: number, particleId: number, count: number,
    options?: {
      duration?: number; gravityX?: number; gravityY?: number;
      blendMode?: 'alpha' | 'additive' | 'multiply'; color?: string; rotation?: number;
    }): void;
};

/** An arrow on the map, the way world.getArrow() returns it. */
declare type Arrow = {
  /** The kind of the arrow, 1 to 43. */
  type: ArrowType;

  /** Where the arrow points: 0 up, 1 right, 2 down, 3 left. */
  rotation: Rotation;

  /** Whether the arrow is mirrored left to right before the rotation. */
  flip: boolean;

  /**
   * The signal on the arrow, the same value getSignal(x, y) returns: 0 none, 1 red, 2 blue,
   * 3 yellow, 4 green, 5 orange, 6 purple.
   */
  signal: Signal;

  /**
   * The settings of the arrow packed into one number, 0 to 65535. The arrows that have settings:
   * ```
   * Key:            00kkkkkk (key)
   * Light:          000bcccc (brightness, color)
   * Music: iiiiiiii oooonnnn (instrument, octave, note)
   * Wall:  000000ll llllcccc (letter, color)
   * ```
   * The key `k`: 0 none, 1 to 26 A to Z, 27 to 36 the digits 0 to 9, 37 to 48 F1 to F12, 49 Space,
   * 50 Enter, 51 Tab, 52 Shift, 53 Ctrl, 54 Alt, 55 Backspace, 56 to 59 the arrows up, down, left
   * and right.
   *
   * The brightness `b` of a light: 0 the usual light, 1 with an extra glow effect.
   *
   * The color `c`: 0 white, 1 red, 2 blue, 3 yellow, 4 green, 5 orange, 6 purple, 7 black. White
   * and black are for walls only: a light with 0 stays dark even under a signal.
   *
   * The instrument `i`: every one has a range of octaves of its own. The octave `o`, 0 to 7, is
   * numbered as in MIDI. The note `n`: 0 is C and 11 is B, so 440 Hz is octave 4, note 9.
   *
   * The letter `l`: 0 none (space), 1 to 26 A to Z, 27 to 36 the digits 0 to 9.
   */
  extra: number;
};

/** The kind of an arrow: 0 for an empty cell, 1 to 43 for the arrows. The type takes any number. */
declare type ArrowType = number & {};

/**
 * The object passed to always(), onActive(), onStart() and, extended with a count, to
 * onPlayerMapAction(); x and y are the coordinates of the block itself. The type names the
 * callback: 'always', 'commandBlockActive' for onActive(), 'start' for onStart() and
 * 'playerMapAction'.
 */
declare type BlockEvent = {
  type: 'always' | 'commandBlockActive' | 'playerMapAction' | 'start';
  tick: number;
  x: number;
  y: number;
};

/** The clock of the script block, the type of performance. */
interface Performance {
  /**
   * Milliseconds of real time, with a fraction, counted from the start of the block code. The count
   * goes on while the game is paused and starts anew when the code of the block is replaced.
   */
  now(): number;

  /**
   * The moment the block code started, in milliseconds of a clock that runs from the start of the
   * computer, not of the calendar one. It stays the same until the code of the block is replaced,
   * so timeOrigin + now() is one clock across the starts of the code.
   */
  readonly timeOrigin: number;
}

/** An arrow of a tool action: the fields of Arrow except the signal, plus its coordinates. */
declare type PlacedArrow = Position & {
  /** The kind of the arrow, 1 to 43. */
  type: ArrowType;

  /** Where the arrow points: 0 up, 1 right, 2 down, 3 left. */
  rotation: Rotation;

  /** Whether the arrow is mirrored left to right before the rotation. */
  flip: boolean;

  /**
   * The settings of the arrow packed into one number, 0 to 65535. The arrows that have settings:
   * ```
   * Key:            00kkkkkk (key)
   * Light:          000bcccc (brightness, color)
   * Music: iiiiiiii oooonnnn (instrument, octave, note)
   * Wall:  000000ll llllcccc (letter, color)
   * ```
   * The key `k`: 0 none, 1 to 26 A to Z, 27 to 36 the digits 0 to 9, 37 to 48 F1 to F12, 49 Space,
   * 50 Enter, 51 Tab, 52 Shift, 53 Ctrl, 54 Alt, 55 Backspace, 56 to 59 the arrows up, down, left
   * and right.
   *
   * The brightness `b` of a light: 0 the usual light, 1 with an extra glow effect.
   *
   * The color `c`: 0 white, 1 red, 2 blue, 3 yellow, 4 green, 5 orange, 6 purple, 7 black. White
   * and black are for walls only: a light with 0 stays dark even under a signal.
   *
   * The instrument `i`: every one has a range of octaves of its own. The octave `o`, 0 to 7, is
   * numbered as in MIDI. The note `n`: 0 is C and 11 is B, so 440 Hz is octave 4, note 9.
   *
   * The letter `l`: 0 none (space), 1 to 26 A to Z, 27 to 36 the digits 0 to 9.
   */
  extra: number;
};

/** The player edited the map. */
declare type PlayerMapActionEvent = BlockEvent & {
  /**
   * How many edits the player made during the previous tick. An edit that covers several arrows,
   * like a paste or the removal of a selection, counts as one.
   */
  count: number;
};

/** The name of an action the player can be allowed or forbidden with game.setPlayerPermission(). */
declare type PlayerPermission =
  | 'setArrows' | 'deleteArrows' | 'deleteArrowsNotInToolbar' | 'rotateArrows' | 'flipArrows'
  | 'selectArrows' | 'copyArrows' | 'pasteArrows' | 'pickArrows' | 'changeWalls' | 'changeLamps'
  | 'changeMusicArrows' | 'changeLoggers' | 'changeScriptBlocks' | 'undo' | 'runOneTick'
  | 'rewindOneTick' | 'pauseSimulation' | 'changeSpeed' | 'clearSignals' | 'useToolbar'
  | 'toggleToolbarMode' | 'toggleKeyMode' | 'moveCamera' | 'zoomCamera';

/** Coordinates on the map: x grows to the right and y down, and both may be negative. */
declare type Position = {
  x: number;
  y: number;
};

/**
 * Where an arrow points: 0 up, 1 right, 2 down, 3 left. The type takes a plain number too, so
 * a computed value needs no cast.
 */
declare type Rotation = 0 | 1 | 2 | 3 | (number & {});

/**
 * A signal: 0 none, 1 red, 2 blue, 3 yellow, 4 green, 5 orange, 6 purple. The type takes a plain
 * number too, so a computed value needs no cast.
 */
declare type Signal = 0 | 1 | 2 | 3 | 4 | 5 | 6 | (number & {});

/**
 * A position of the speed control of the game: 0 = paused, 1 = 3 ticks per second, 2 = 12, 3 = 60,
 * 4 = 300, 5 = 1200, 6 = unlimited.
 */
declare type Speed = 0 | 1 | 2 | 3 | 4 | 5 | 6;

/**
 * The player used a tool. The actions and the field that comes with each of them:
 * - 'clearSignals', no field: the reset of all signals (the N key);
 * - 'copySelection' with positions: the selected arrows were copied;
 * - 'deleteSelection' with arrows: the selected arrows were deleted; 'removeArrows' with the same
 *   arrows comes right before it;
 * - 'pasteSelection' with arrows: the copied arrows were pasted; 'placeArrows' with the same arrows
 *   comes right before it;
 * - 'placeArrows' with arrows: the arrows that were put on the map; a drag sends one event per
 *   arrow;
 * - 'redo', no field;
 * - 'removeArrows' with arrows: the arrows that were removed, the way they were on the map; cutting
 *   the selection sends it alone, with no other action;
 * - 'selectArrow' with id: the type of the arrow, 0 when none is selected; picking an arrow from
 *   the map sends it too;
 * - 'selectionFinalized' with positions: the arrows inside the rectangle the player has dragged
 *   (the empty cells of it are not reported, and neither are the bounds of the rectangle itself),
 *   all of them when the selection is extended with Shift, and an empty list once it is cleared;
 * - 'toggleToolbarMode' with mode: 'toolbar' or 'inventory', the one the toolbar was switched to;
 * - 'undo', no field.
 *
 * Rotating or flipping an arrow and changing its settings send no tool action, only
 * onPlayerMapAction() fires for them.
 */
declare type ToolActionEvent = {
  action:
    | 'clearSignals' | 'copySelection' | 'deleteSelection' | 'pasteSelection' | 'placeArrows'
    | 'redo' | 'removeArrows' | 'selectArrow' | 'selectionFinalized' | 'toggleToolbarMode'
    | 'undo';
  id?: ArrowType;
  mode?: 'toolbar' | 'inventory';
  arrows?: PlacedArrow[];
  positions?: Position[];
};
