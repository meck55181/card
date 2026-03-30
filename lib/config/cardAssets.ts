/**
 * Central config for all card entrance image paths.
 * Replace files under public/images/card/ and update this file if you add or rename assets.
 */
export const CARD_BACKGROUND_IMAGES = [
  "/images/card/backgrounds/bg-1.png",
  "/images/card/backgrounds/bg-2.png",
  "/images/card/backgrounds/bg-3.png",
] as const;

export const CARD_BACKGROUND_DIMENSIONS: Record<
  (typeof CARD_BACKGROUND_IMAGES)[number],
  { width: number; height: number }
> = {
  "/images/card/backgrounds/bg-1.png": { width: 2000, height: 2000 },
  "/images/card/backgrounds/bg-2.png": { width: 1000, height: 1000 },
  "/images/card/backgrounds/bg-3.png": { width: 494, height: 879 },
};

export const INSERT_BACK_IMAGE = "/images/card/insert_back.png";
/** Pixel size of insert_back.png — update if you replace the file. */
export const INSERT_BACK_DIMENSIONS = { width: 2374, height: 2374 } as const;

export const INSERT_FRONT_IMAGE = "/images/card/insert_front.png";
export const INSERT_FRONT_DIMENSIONS = { width: 1248, height: 948 } as const;

export const KEYCARD_IMAGE = "/images/card/keycard.png";
export const KEYCARD_DIMENSIONS = { width: 846, height: 1526 } as const;

/** Drag distance (px) downward past this value completes the insert. */
export const DRAG_SUCCESS_THRESHOLD_PX = 260;

/** Maximum downward drag from the resting position (px). */
export const DRAG_MAX_DOWN_PX = 260;
