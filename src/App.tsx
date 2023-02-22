import React, { useEffect } from "react";
import "./App.scss";
import Button from "./components/common/Button";
import Text from "./components/common/Text";
import { useAPI } from "./hooks/useAPI";
import api from "./services/api";
import { fetchFine } from "./services/api/fine";
import { createMember, deleteMember, fetchMember, updateMember } from "./services/api/member";
import { fetchRoom } from "./services/api/room";
import { createTodo, deleteTodo, fetchTodo } from "./services/api/todo";
import Room from "./views/room/Room";

function App() {
  const { data: member } = useAPI<MemberEntity>(fetchMember, { isFetch: true });
  const { data: room } = useAPI<RoomEntity>(fetchRoom, { isFetch: true });
  const { data: fine } = useAPI<FineEntity>(fetchFine, { isFetch: true });
  const { data: todo } = useAPI<TodoEntity>(fetchTodo, { isFetch: true });

  const newMember = {
    memberId: "수정슬기",
    email: "seulgiiii@naver.com",
    name: "슬기기",
    profileImg:
      "https://images.unsplash.com/photo-1676873261959-173b91552b0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
    createdAt: new Date(),
    updatedAt: new Date(),
    publishedAt: new Date(),
  };

  const newTodo = {
    todoContent: "오늘할일1",
    complitedAt: new Date(),
    authenticationMethod: "image",
    authenticationContent: "https://www.naver.com",
    author: [],
    createdAt: new Date(),
    updatedAt: new Date(),
    publishedAt: new Date(),
  };

  useEffect(() => {
    console.log("member", member);
    // console.log("room", room);
    // console.log("fine", fine);
    // console.log("todo", todo);
    // createMember(newMember);
    // updateMember(newMember, (member as MemberEntity[])[0].id as number);
    updateMember(newMember, member[0].id as number)
    createTodo(newTodo);
    // deleteTodo();
  }, []);

  // createMember(newMember);

  return <> {/* <Room />{" "} */}</>;
}

export default App;
