/**
 * The instruments of a Music block, placed where they go in {@linkcode Arrow.extra}. Join one with
 * an `Octave` and a `Note` by `|`: `Instrument.GUITAR | Octave.FIVE | Note.F_SHARP`. Every
 * instrument plays a range of octaves of its own, and an octave outside the range sounds as the
 * nearest one inside it.
 */
export const Instrument = {

  /** The bits of the `extra` that hold the instrument. */
  MASK: 0xFF00,

  /** How many bits the instrument is shifted by in the `extra`. */
  SHIFT: 8,

  /** Piano, instrument 0. Octaves 0 to 7. */
  PIANO: 0,

  /** Bass, instrument 1. Octaves 0 to 4. */
  BASS: 256,

  /** Guitar, instrument 2. Octaves 1 to 5. */
  GUITAR: 512,

  /** Drums, instrument 3. Take a `Drum` instead of a `Note`; the octave does not matter. */
  DRUMS: 768,

  /** Tuba, instrument 4. Octaves 1 to 4. */
  TUBA: 1024,

  /** Trombone, instrument 5. Octaves 1 to 5. */
  TROMBONE: 1280,

  /** Organ, instrument 6. Octaves 1 to 6. */
  ORGAN: 1536,

  /** Harp, instrument 7. Octaves 2 to 6. */
  HARP: 1792,

  /** Xylophone, instrument 8. Octaves 3 to 7. */
  XYLOPHONE: 2048,

  /** Bassoon, instrument 9. Octaves 1 to 5. */
  BASSOON: 2304,

  /** Cello, instrument 10. Octaves 1 to 5. */
  CELLO: 2560,

  /** Clarinet, instrument 11. Octaves 2 to 6. */
  CLARINET: 2816,

  /** Contrabass, instrument 12. Octaves 0 to 4. */
  CONTRABASS: 3072,

  /** Flute, instrument 13. Octaves 4 to 7. */
  FLUTE: 3328,

  /** Horn, instrument 14. Octaves 1 to 5. */
  HORN: 3584,

  /** Oboe, instrument 15. Octaves 3 to 6. */
  OBOE: 3840,

  /** Trumpet, instrument 16. Octaves 3 to 6. */
  TRUMPET: 4096,

  /** Violin, instrument 17. Octaves 2 to 6. */
  VIOLIN: 4352,

  /** Timpani, instrument 18. Octaves 1 to 3. */
  TIMPANI: 4608,

  /** Square Wave, instrument 19. Octaves 0 to 7. */
  SQUARE_WAVE: 4864,

  /** Triangle Wave, instrument 20. Octaves 0 to 7. */
  TRIANGLE_WAVE: 5120,

  /** Saw Wave, instrument 21. Octaves 0 to 7. */
  SAW_WAVE: 5376,

} as const;
