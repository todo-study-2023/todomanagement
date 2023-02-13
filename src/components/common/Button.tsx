import React from "react";

type Variant = "outlined" | "fill" | "ghost";
type Size = "xs" | "sm" | "md" | "lg";

export default function Button({
  children,
  onClick,
  variant = "fill",
  size = "md",
}: {
  children: React.ReactNode;
  onClick?: () => {};
  variant?: Variant;
  size?: Size;
}) {
  const getVariantStyle = (variant: Variant) => {
    if (variant === "outlined") {
      return "btn-outlined";
    } else if (variant === "fill") {
      return "btn-primary";
    } else if (variant === "ghost") {
      return "btn-ghost";
    }
  };

  const getSizeStyle = (size: Size) => {
    if (size === "xs") {
      return "btn-xs";
    } else if (size === "sm") {
      return "btn-sm";
    } else if (size === "md") {
      return "btn-md";
    } else if (size === "lg") {
      return "btn-lg";
    }
  };

  return (
    <button
      className={`${getVariantStyle(variant)} ${getSizeStyle(size)}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
