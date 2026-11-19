/**
 * The sounds of the drums, placed where the note goes in the `extra` of a music arrow: with
 * `Instrument.DRUMS` a note picks a sound, not a pitch. Join one with the instrument by `|`:
 * `Instrument.DRUMS | Drum.SNARE`. The octave does not matter.
 */
export const Drum = {

  /** The bits of the `extra` that hold the sound. */
  MASK: 0x0F,

  /** The buzz kick, a bass drum. */
  BUZZ_KICK: 0,

  /** The cajon kick. */
  CAJON_KICK: 1,

  /** The closed hi-hat. */
  CLOSED_HI_HAT: 2,

  /** The darbouka. */
  DARBOUKA: 3,

  /** The open hi-hat. */
  OPEN_HI_HAT: 4,

  /** The China cymbal. */
  CHINA_CYMBAL: 5,

  /** The crash cymbal. */
  CRASH_CYMBAL: 6,

  /** The djembe. */
  DJEMBE: 7,

  /** The low bongo. */
  LOW_BONGO: 8,

  /** The high bongo. */
  HI_BONGO: 9,

  /** The cowbell. */
  COWBELL: 10,

  /** The snare drum. */
  SNARE: 11,

} as const;
