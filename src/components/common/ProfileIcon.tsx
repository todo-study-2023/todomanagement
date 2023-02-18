import React from "react";

export default function ProfileIcon({ size }: { size?: Size }) {
  return size === "sm" ? (
    <div className="profile-sm-icon"></div>
  ) : (
    <div className="profile-lg-icon"></div>
  );
}
