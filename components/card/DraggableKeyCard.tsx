"use client";

import { motion, useAnimation } from "framer-motion";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import {
  DRAG_MAX_DOWN_PX,
  DRAG_SUCCESS_THRESHOLD_PX,
  KEYCARD_DIMENSIONS,
  KEYCARD_IMAGE,
} from "@/lib/config/cardAssets";
import { CARD_LAYOUT } from "@/lib/config/cardLayout";
import { ResilientImage } from "./ResilientImage";

export function DraggableKeyCard() {
  const router = useRouter();
  const controls = useAnimation();
  const navigated = useRef(false);

  const k = CARD_LAYOUT.keycard;

  return (
    <motion.div
      className="absolute left-1/2 z-[2] -translate-x-1/2 touch-none select-none [-webkit-touch-callout:none] [-webkit-user-drag:none]"
      style={{
        top: `${k.topPct}%`,
        width: `${k.widthPct}%`,
        aspectRatio: String(k.aspectRatio),
        touchAction: "none",
      }}
      animate={controls}
      drag="y"
      dragConstraints={{ top: 0, bottom: DRAG_MAX_DOWN_PX }}
      dragElastic={0.12}
      dragMomentum={false}
      whileDrag={{ cursor: "grabbing" }}
      onDragEnd={(_, info) => {
        if (navigated.current) return;
        if (info.offset.y >= DRAG_SUCCESS_THRESHOLD_PX) {
          navigated.current = true;
          router.push("/check");
          return;
        }
        void controls.start({
          y: 0,
          transition: { type: "spring", stiffness: 420, damping: 28 },
        });
      }}
    >
      <div className="relative h-full min-h-0 w-full cursor-grab rounded-[4px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
        <ResilientImage
          src={KEYCARD_IMAGE}
          alt="Hotel key card — drag downward to insert"
          fill
          width={KEYCARD_DIMENSIONS.width}
          height={KEYCARD_DIMENSIONS.height}
          className="rounded-[4px] object-cover"
          draggable={false}
          loading="eager"
        />
      </div>
    </motion.div>
  );
}
