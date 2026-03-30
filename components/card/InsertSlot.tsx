"use client";

import {
  INSERT_BACK_DIMENSIONS,
  INSERT_BACK_IMAGE,
  INSERT_FRONT_DIMENSIONS,
  INSERT_FRONT_IMAGE,
} from "@/lib/config/cardAssets";
import { CARD_LAYOUT, CARD_STAGE } from "@/lib/config/cardLayout";
import { ResilientImage } from "./ResilientImage";

export function InsertSlot() {
  const b = CARD_LAYOUT.insertBack;
  const f = CARD_LAYOUT.insertFront;
  const insertBackHeightPct =
    b.widthPct * (CARD_STAGE.width / CARD_STAGE.height);

  return (
    <>
      <div
        className="pointer-events-none absolute left-1/2 z-[1] -translate-x-1/2 overflow-hidden shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
        style={{
          top: `${b.topPct}%`,
          width: `${b.widthPct}%`,
          height: `${insertBackHeightPct}%`,
        }}
      >
        <ResilientImage
          src={INSERT_BACK_IMAGE}
          alt="Card reader base plate"
          fill
          width={INSERT_BACK_DIMENSIONS.width}
          height={INSERT_BACK_DIMENSIONS.height}
          className="pointer-events-none select-none object-contain"
          draggable={false}
          loading="eager"
        />
      </div>
      <div
        className="pointer-events-none absolute left-1/2 z-[3] -translate-x-1/2 rounded-[1px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
        style={{
          top: `${f.topPct}%`,
          width: `${f.widthPct}%`,
          height: `${f.heightPct}%`,
        }}
      >
        <div className="relative h-full w-full">
          <ResilientImage
            src={INSERT_FRONT_IMAGE}
            alt="Insert card — front panel"
            fill
            width={INSERT_FRONT_DIMENSIONS.width}
            height={INSERT_FRONT_DIMENSIONS.height}
            className="rounded-[1px] object-cover"
            loading="eager"
          />
        </div>
      </div>
    </>
  );
}
