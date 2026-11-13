/**
 * The instruments of a music arrow, placed where they go in the extra of the arrow. Join one with
 * an Octave and a Note by `|`: Instrument.GUITAR | Octave.FIVE | Note.F_SHARP.
 */
export const Instrument = {
  /** The bits of the extra that hold the instrument. */
  MASK: 0xFF00,

  /** How many bits the instrument is shifted by in the extra. */
  SHIFT: 8,

  /** Piano, instrument 0. */
  PIANO: 0,

  /** Bass, instrument 1. */
  BASS: 256,

  /** Guitar, instrument 2. */
  GUITAR: 512,

  /** Drums, instrument 3. */
  DRUMS: 768,

  /** Tuba, instrument 4. */
  TUBA: 1024,

  /** Trombone, instrument 5. */
  TROMBONE: 1280,

  /** Organ, instrument 6. */
  ORGAN: 1536,

  /** Harp, instrument 7. */
  HARP: 1792,

  /** Xylophone, instrument 8. */
  XYLOPHONE: 2048,

  /** Bassoon, instrument 9. */
  BASSOON: 2304,

  /** Cello, instrument 10. */
  CELLO: 2560,

  /** Clarinet, instrument 11. */
  CLARINET: 2816,

  /** Contrabass, instrument 12. */
  CONTRABASS: 3072,

  /** Flute, instrument 13. */
  FLUTE: 3328,

  /** Horn, instrument 14. */
  HORN: 3584,

  /** Oboe, instrument 15. */
  OBOE: 3840,

  /** Trumpet, instrument 16. */
  TRUMPET: 4096,

  /** Violin, instrument 17. */
  VIOLIN: 4352,

  /** Timpani, instrument 18. */
  TIMPANI: 4608,

  /** Square Wave, instrument 19. */
  SQUARE_WAVE: 4864,

  /** Triangle Wave, instrument 20. */
  TRIANGLE_WAVE: 5120,

  /** Saw Wave, instrument 21. */
  SAW_WAVE: 5376,
} as const;
