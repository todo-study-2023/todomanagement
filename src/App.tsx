import React from "react";
import "./App.scss";
import Button from "./components/common/Button";
import Text from "./components/common/Text";
import { useAPI } from "./hooks/useAPI";
import Room from "./views/room/Room";

function App() {
  // 아래 내용을 완성시켜 보기
  // const { data } = useAPI()
  return (
    <>
      {/* <select name="" id="">
        Gkdl
      </select>
      <input type="text" /> */}
      <Room />
    </>
  );
}

export default App;
