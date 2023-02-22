import React, { useEffect } from "react";
import "./App.scss";
import Button from "./components/common/Button";
import Text from "./components/common/Text";
import { useAPI } from "./hooks/useAPI";
import Router from "./router";
import api from "./services/api";
import { fetchFine } from "./services/api/fine";
import { fetchMember } from "./services/api/member";
import { fetchRoom } from "./services/api/room";
import { fetchTodo } from "./services/api/todo";
import Room from "./views/room/Room";

function App() {
  const { data: member } = useAPI<MemberEntity>(fetchMember, { isFetch: true });
  const { data: room } = useAPI<RoomEntity>(fetchRoom, { isFetch: true });
  const { data: fine } = useAPI<FineEntity>(fetchFine, { isFetch: true });
  const { data: todo } = useAPI<TodoEntity>(fetchTodo, { isFetch: true });
  useEffect(() => {
    console.log("member", member);
    console.log("room", room);
    console.log("fine", fine);
    console.log("todo", todo);
  }, [member]);
  return (
    <>
      <Router />
    </>
  );
}

export default App;
