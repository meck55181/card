"use client";

import { useEffect, useState } from "react";
import {
  CARD_BACKGROUND_DIMENSIONS,
  CARD_BACKGROUND_IMAGES,
} from "@/lib/config/cardAssets";
import { ResilientImage } from "./ResilientImage";

type BackgroundSrc = (typeof CARD_BACKGROUND_IMAGES)[number];

export function RandomCardBackground() {
  const [src, setSrc] = useState<BackgroundSrc | null>(null);

  useEffect(() => {
    const t = setTimeout(() => {
      const paths = [...CARD_BACKGROUND_IMAGES] as BackgroundSrc[];
      const pick = paths[Math.floor(Math.random() * paths.length)]!;
      setSrc(pick);
    }, 0);
    return () => clearTimeout(t);
  }, []);

  if (!src) {
    return (
      <div className="absolute inset-0 z-0 bg-[#2b2523]" aria-hidden />
    );
  }

  const dims = CARD_BACKGROUND_DIMENSIONS[src];

  return (
    <div className="absolute inset-0 z-0">
      <ResilientImage
        src={src}
        alt=""
        fill
        priority
        width={dims.width}
        height={dims.height}
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/15" aria-hidden />
    </div>
  );
}
