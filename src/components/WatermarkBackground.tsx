import React from "react";

type WatermarkBackgroundProps = {
  /** Public path to the watermark image (e.g., `/tauri.svg`). */
  imageUrl?: string;
  /** Opacity of the watermark overlay (0.0 - 1.0). */
  opacity?: number;
  /** Size of each tiled watermark image in pixels. */
  sizePx?: number;
  /** Rotation in degrees applied to the whole overlay. */
  rotateDeg?: number;
  /** If true, renders a single centered watermark instead of a tiled pattern. */
  centered?: boolean;
  /** Optional additional class names for the overlay container. */
  className?: string;
};

/**
 * Full-viewport watermark overlay.
 * - Uses pointer-events: none so it never blocks interactions.
 * - Defaults to a subtle, tiled pattern that sits beneath the UI.
 */
export function WatermarkBackground({ imageUrl = "/tauri.svg", opacity = 0.04, sizePx = 160, rotateDeg = -18, centered = false, className }: WatermarkBackgroundProps) {
  // If rotated, oversize the layer to ensure edges remain covered.
  const rotated = Math.abs(rotateDeg) > 0.001;

  if (centered) {
    return (
      <div aria-hidden className={"pointer-events-none fixed inset-0 z-0 select-none overflow-hidden " + (className || "")} style={{ opacity, display: "grid", placeItems: "center" }}>
        <img src={imageUrl} alt="watermark" draggable={false} style={{ width: sizePx * 3, height: "auto", filter: "grayscale(100%)", opacity: 1, transform: `rotate(${rotateDeg}deg)` }} />
      </div>
    );
  }

  const baseStyle: React.CSSProperties = {
    position: "fixed",
    inset: 0,
    zIndex: 0,
    pointerEvents: "none",
    opacity,
    backgroundImage: `url(${imageUrl})`,
    backgroundRepeat: "repeat",
    backgroundSize: `${sizePx}px ${sizePx}px`,
    filter: "grayscale(100%)",
  };

  // For rotation, expand the plane to avoid showing empty corners.
  const rotatedStyle: React.CSSProperties = rotated
    ? {
        width: "200%",
        height: "200%",
        left: "-50%",
        top: "-50%",
        transform: `rotate(${rotateDeg}deg)`,
        transformOrigin: "center",
      }
    : {};

  return <div aria-hidden className={"select-none " + (className || "")} style={{ ...baseStyle, ...rotatedStyle }} />;
}

export default WatermarkBackground;
