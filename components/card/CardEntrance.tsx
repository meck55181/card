"use client";

import { CARD_LAYOUT } from "@/lib/config/cardLayout";
import { DraggableKeyCard } from "./DraggableKeyCard";
import { InsertSlot } from "./InsertSlot";
import { RandomCardBackground } from "./RandomCardBackground";

export function CardEntrance() {
  const h = CARD_LAYOUT.hint;

  return (
    <div className="relative min-h-dvh w-full overflow-hidden bg-[#2b2523]">
      <RandomCardBackground />
      <div className="relative z-10 mx-auto flex min-h-dvh w-full max-w-[494px] justify-center">
        <div className="relative h-[max(880px,100dvh)] min-h-[max(880px,100dvh)] w-full">
          <p
            className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-center font-[Pretendard,system-ui,sans-serif] text-[16px] font-normal leading-normal text-[#acacac]"
            style={{ top: `${h.topPct}%` }}
          >
            (slide down to enter)
          </p>
          <InsertSlot />
          <DraggableKeyCard />
        </div>
      </div>
    </div>
  );
}
