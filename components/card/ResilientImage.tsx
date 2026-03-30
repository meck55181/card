"use client";

/* eslint-disable @next/next/no-img-element -- intentional native <img> wrapper for this project */

import { useState } from "react";

export type ResilientImageProps = {
  src: string;
  alt: string;
  className?: string;
  /** When true, parent must be `position: relative` with a defined size. */
  fill?: boolean;
  width?: number;
  height?: number;
  loading?: "eager" | "lazy";
  /** Prefer load (maps to `loading="eager"` and `fetchPriority="high"`). */
  priority?: boolean;
  draggable?: boolean;
  decoding?: "async" | "auto" | "sync";
  fallbackClassName?: string;
};

export function ResilientImage({
  alt,
  className,
  fallbackClassName,
  fill,
  src,
  width,
  height,
  loading,
  priority,
  draggable,
  decoding = "async",
}: ResilientImageProps) {
  const [failed, setFailed] = useState(false);
  const effectiveLoading = priority ? "eager" : (loading ?? "lazy");

  if (failed) {
    const decorative = alt === "";
    return (
      <div
        className={`bg-neutral-500 ${fill ? "absolute inset-0" : ""} ${fallbackClassName ?? ""} ${className ?? ""}`}
        role={decorative ? undefined : "img"}
        aria-label={decorative ? undefined : alt}
        aria-hidden={decorative}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={[fill ? "absolute inset-0 h-full w-full" : "", className].filter(Boolean).join(" ")}
      loading={effectiveLoading}
      fetchPriority={priority ? "high" : undefined}
      draggable={draggable}
      decoding={decoding}
      onError={() => setFailed(true)}
    />
  );
}
