//메모이제이션 (usememo) switch case 구문으로

import React from "react";

type Variant = "outlined" | "contained" | "text";
type Size = "xs" | "sm" | "md" | "lg";

export default function Button({
  children,
  onClick,
  variant = "contained",
  size = "md",
}: {
  children: React.ReactNode;
  onClick?: () => {};
  variant?: Variant;
  size?: Size;
}) {
  const getVariantStyle = (variant: Variant) => {
    const styleObj = {
      outlined: "btn-outlined",
      contained: "btn-primary",
      text: "btn-text",
    };
    const styleMap = new Map(Object.entries(styleObj));
    return styleMap.get(variant);
  };

  const getSizeStyle = (size: Size) => `btn-${size}`;

  return (
    <button
      className={`${getVariantStyle(variant)} ${getSizeStyle(size)}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
