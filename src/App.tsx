import React, { useEffect } from "react";
import "./App.scss";
import Button from "./components/common/Button";
import Text from "./components/common/Text";
import { useAPI } from "./hooks/useAPI";
import api from "./services/api";
import { fetchMember } from "./services/api/member";
import Room from "./views/room/Room";

function App() {
  // 아래 내용을 완성시켜 보기
  // const { data } = useAPI()
  const { data: member } = useAPI<MemberEntity>(fetchMember, { isFetch: true });
  useEffect(() => {
    console.log(member);
  }, [member]);
  return (
    <>
      {/* {data} */}
      {/* <select name="" id="">
        Gkdl
      </select>
      <input type="text" /> */}
      {/* <Room /> */}
    </>
  );
}

export default App;
