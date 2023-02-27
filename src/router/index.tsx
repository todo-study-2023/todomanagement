import React from "react";
import { Route, Routes } from "react-router-dom";
import Code from "../views/Code";
import Home from "../views/Home";
import NotFound from "../views/NotFound";
import Room from "../views/room/Room";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/code" element={<Code />} />
      <Route path="/room" element={<Room />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}
