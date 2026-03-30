/**
 * Layout metrics for the card entrance stage.
 * Artboard reference: 494×880 — positions scale with the stage container width.
 */
export const CARD_STAGE = {
  width: 494,
  height: 880,
} as const;

/** Percent of stage width / height for absolute placement. */
export const CARD_LAYOUT = {
  hint: {
    topPct: (85 / 880) * 100,
  },
  keycard: {
    topPct: (136 / 880) * 100,
    widthPct: (155 / 494) * 100,
    aspectRatio: 155 / 280,
  },

  insertBack: {
    topPct: (484 / 880) * 100,
    widthPct: (331 / 494) * 100,
  },
  insertFront: {
    topPct: (603 / 880) * 100,
    widthPct: (175 / 494) * 100,
    heightPct: (133 / 880) * 100,
  },
} as const;
