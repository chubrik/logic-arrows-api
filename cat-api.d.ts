/**
 * The cat: a character that stands over the map, talks to the player and shows what to do. It
 * works on any map. The cat is hidden until show() is called, and a hidden cat does nothing: its
 * actions are rejected.
 *
 * The actions of the cat, the ones that return a promise, take real time, about half a second
 * for a tap and seconds for a walk, and the promise is fulfilled when the cat is done. Only one
 * action runs at a time: of the actions ordered together one is carried out, and the promises of
 * the others are rejected with an Error. So order them one after another, with await. The player
 * is not locked meanwhile. What the cat does to the map is not an action of the player: no
 * onPlayerMapAction() or onPlayerToolAction() fires for it, and game.setPlayerPermission() does
 * not forbid it.
 */
declare const cat: {
  /** Make the cat adjust its glasses with a paw. */
  adjustGlasses(): void;

  /** Turn the blinking of the cat on or off. With it off the cat still blinks once in a while. */
  autoBlink(enabled: boolean): void;

  /** Make the cat blink once. */
  blink(): void;

  /** Turn the breathing of the cat on or off: with it on the cat sways a little up and down. */
  breathe(enabled: boolean): void;

  /** Stop the taps the cat repeats after a tap() with repeatInterval. */
  clearAutoTaps(): void;

  /**
   * Make the cat bring the cells between (x0, y0) and (x1, y1) into view: it changes the scale
   * with two paws and then drags the map there, pull by pull, which may take long. The player can
   * move the map meanwhile, and the cat keeps dragging it to the goal.
   */
  focusMap(x0: number, y0: number, x1: number, y1: number): Promise<void>;

  /**
   * Where the cat stands on the screen, in fractions of it: from (0, 0) in the top left corner to
   * (1, 1) in the bottom right one. A hidden cat keeps its place.
   */
  getPosition(): { x: number; y: number };

  /** Hide the cat. Its look and its place are kept for the next show(). */
  hide(): void;

  /**
   * Make the cat look at a point of the screen or at a place of the toolbar, with the eyes alone;
   * without a target the cat looks straight again.
   */
  look(target?: CatLookTarget): void;

  /** Turn the looking around on or off: with it on the cat turns to one side and another. */
  lookAround(enabled: boolean): void;

  /**
   * Make the cat drag the map, pull by pull, until the cell (x, y) is at the center of the screen;
   * a long way takes many seconds. The player can move the map meanwhile, and the cat keeps
   * dragging it to the goal.
   */
  moveMap(x: number, y: number): Promise<void>;

  /**
   * Make the cat walk to a point of the screen, given in fractions of it: from (0, 0) in the top
   * left corner to (1, 1) in the bottom right one. A walk across the screen takes a few seconds.
   * say(), blink() and setTurn() do not stop it.
   */
  moveTo(x: number, y: number): Promise<void>;

  /**
   * Set how wide the eyes of the cat are open, from 0 for closed to 1 for wide open; 0.5, the
   * default, is their usual look. The value stays until another one is set.
   */
  openEyes(openness?: number): void;

  /**
   * Make the cat press the cell (x, y) with a paw. A directional button there sends its signal;
   * any other arrow is just slapped. With withinReach the cat first drags the map to bring the
   * cell within reach.
   */
  pressButton(x: number, y: number, options?: { withinReach?: boolean }): Promise<void>;

  /**
   * Make the cat remove the arrow from the cell (x, y); an empty cell is not an error.
   * getArrow() sees the change once the promise is fulfilled.
   */
  removeArrow(x: number, y: number, options?: CatRemoveArrowOptions): Promise<void>;

  /**
   * Show a speech bubble over the cat; the text is typed letter by letter and takes the same
   * markup as {@link showText}: **bold**, \n, ---, @N, @N[label] and #[Space]. With onNext the
   * bubble gets a button, and onNext fires when the player presses it. Without a text the bubble
   * is removed.
   */
  say(text?: string, onNext?: () => void): void;

  /**
   * Make the cat put an arrow into the cell (x, y). getArrow() sees it once the promise is
   * fulfilled, not during the tick of the call.
   */
  setArrow(x: number, y: number, arrowType: ArrowType, options?: CatSetArrowOptions): Promise<void>;

  /** Set the shape of the eyes of the cat; without a value they are the default ones. */
  setEyes(state?: CatEyes): void;

  /**
   * Make the cat move the speed control of the game with a paw: 0 = paused, 1 = 3 ticks per
   * second, 2 = 12, 3 = 60, 4 = 300, 5 = 1200, 6 = unlimited. The cat reaches for the control
   * from where it stands; with withinReach it first walks to the control and stays there.
   */
  setSpeed(level: Speed, options?: { withinReach?: boolean }): Promise<void>;

  /**
   * Turn the cat by an angle in degrees: -35 to 35 sideways, where a positive angle turns it to
   * the left side of the screen (mind the sign: it is the opposite of the x axis), and -20 to 20
   * vertically, where a positive angle bows the head down. Any other value throws a RangeError.
   * setTurn(0) makes the cat face the player again.
   */
  setTurn(degrees: number, verticalDegrees?: number): void;

  /**
   * Show the cat. An option that is left out keeps the value it had before, even after hide() and
   * after the code of the block is replaced.
   */
  show(options?: CatShowOptions): void;

  /**
   * Make the cat tap with a paw: at a point of the screen, at a cell of the map or at the toolbar.
   * A tap is a gesture: it presses nothing and selects nothing. A tap at a cell fires
   * onCatTap(). With repeatInterval the cat repeats the tap until clearAutoTaps() is called, and
   * no promise is returned.
   */
  tap(target: CatTapTarget): Promise<void> | undefined;

  /**
   * Turn the thinking of the cat on or off: with it on the cat bows the head a little, its eyes
   * get round and a busy sign spins on its forehead.
   */
  think(enabled: boolean): void;

  /**
   * Make the cat change the scale of the map with two paws. The scale is the size of a cell in
   * pixels, 2 to 128; any other value throws a RangeError.
   */
  zoom(scale: number): Promise<void>;
};

/**
 * Fires when the cat taps at a cell of the map with cat.tap(); x and y are the coordinates of
 * that cell. A click of the player on the cat does not fire it.
 */
declare function onCatTap(callback: (x: number, y: number) => void): void;

/** The shape of the eyes of the cat. */
declare type CatEyes = 'default' | 'round' | 'cute';

/**
 * What the cat looks at or taps at:
 * - 'screen' with x and y: a point of the screen in fractions of it, from (0, 0) in the top left
 *   corner to (1, 1) in the bottom right one;
 * - 'button' with 'toolbarSlot' and slot: a place in the current row of the toolbar, 1 to 5;
 * - 'button' with 'toolbarPage' and direction: the row of the toolbar before or after the
 *   current one. With the toolbar folded it is the arrow that turns the rows, and with all the
 *   rows shown, the label of that row, like F4 or F6.
 */
declare type CatLookTarget =
  | { type: 'screen'; x: number; y: number }
  | { type: 'button'; button: 'toolbarSlot'; slot: 1 | 2 | 3 | 4 | 5 }
  | { type: 'button'; button: 'toolbarPage'; direction: 'previous' | 'next' };

declare type CatRemoveArrowOptions = {
  /** Put the removal into the undo history of the player; false by default. */
  addToHistory?: boolean;

  /** Scatter particles from the removed arrow; false by default. */
  particles?: boolean;

  /** Let the cat first drag the map to bring the cell within reach; false by default. */
  withinReach?: boolean;
};

declare type CatSetArrowOptions = {
  /** Put the arrow into the undo history of the player; false by default. */
  addToHistory?: boolean;

  /**
   * The settings of the arrow packed into one number, 0 by default. The layout of the number is
   * described at {@link Arrow.extra}.
   */
  extra?: number;

  /** Whether the arrow is mirrored; false by default. */
  flipped?: boolean;

  /** 0 = up, 1 = right, 2 = down, 3 = left; 0 by default. */
  rotation?: Rotation;

  /**
   * Let the cat first drag the map to bring the cell within reach; false by default. Without it
   * the cat reaches for a far cell beyond the edge of the screen.
   */
  withinReach?: boolean;
};

declare type CatShowOptions = {
  /**
   * Whether the cat lives by itself: now and then it follows the pointer with its eyes, turns
   * after it, adjusts its glasses, and now and then it stands still. After the option is turned
   * on it may take the cat some seconds to stir.
   */
  autoActions?: boolean;

  /** Whether the cat blinks by itself. */
  autoBlink?: boolean;

  /** The shape of the eyes. */
  eyes?: CatEyes;
};

/**
 * What the cat taps at, and how:
 * - 'screen' with x and y: a point of the screen in fractions of it, from (0, 0) in the top left
 *   corner to (1, 1) in the bottom right one;
 * - 'cell' with x and y: a cell of the map; withinReach lets the cat first drag the map to bring
 *   the cell within reach, and without it the cat reaches for a far cell beyond the edge of the
 *   screen;
 * - 'button' with 'toolbarSlot' and slot: a place in the current row of the toolbar, 1 to 5;
 * - 'button' with 'toolbarPage' and direction: the row of the toolbar before or after the
 *   current one. With the toolbar folded it is the arrow that turns the rows, and with all the
 *   rows shown, the label of that row, like F4 or F6.
 *
 * taps is how many times the cat taps in a row, 1 to 32, 1 by default. repeatInterval makes the
 * cat repeat the tap again and again, with that many seconds between the taps.
 */
declare type CatTapTarget = { taps?: number; repeatInterval?: number } & (
  | { type: 'screen'; x: number; y: number }
  | { type: 'cell'; x: number; y: number; withinReach?: boolean }
  | { type: 'button'; button: 'toolbarSlot'; slot: 1 | 2 | 3 | 4 | 5 }
);
