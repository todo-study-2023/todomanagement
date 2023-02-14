import React from "react";
type TextVariant = "title" | "content";
export default function Text({
  children,
  type,
  size = 14,
  color = "black",
}: {
  children: React.ReactNode;
  type: TextVariant;
  size?: number;
  color?: Color;
}) {
  const getTextSize = (size: number) => `text-title-${size}`;
  return type === "title" ? (
    <h1 style={{ fontWeight: 700, color: color }} className={getTextSize(size)}>
      {children}
    </h1>
  ) : (
    <p style={{ color: color }} className={getTextSize(size)}>
      {children}
    </p>
  );
}
