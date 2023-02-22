import React, { useEffect } from "react";
import "./App.scss";
import Button from "./components/common/Button";
import Text from "./components/common/Text";
import { useAPI } from "./hooks/useAPI";
import api from "./services/api";
import {
  createFine,
  deleteFine,
  fetchFine,
  updateFine,
} from "./services/api/fine";
import {
  createMember,
  deleteMember,
  fetchMember,
  updateMember,
} from "./services/api/member";
import {
  createRoom,
  deleteRoom,
  fetchRoom,
  updateRoom,
} from "./services/api/room";
import {
  createTodo,
  deleteTodo,
  fetchTodo,
  updateTodo,
} from "./services/api/todo";
import Room from "./views/room/Room";

function App() {
  const { data: member } = useAPI<MemberEntity>(fetchMember, { isFetch: true });
  const { data: room } = useAPI<RoomEntity>(fetchRoom, { isFetch: true });
  const { data: fine } = useAPI<FineEntity>(fetchFine, { isFetch: true });
  const { data: todo } = useAPI<TodoEntity>(fetchTodo, { isFetch: true });

  // const newMember = {
  //   memberId: "수정슬기222",
  //   email: "seulgiii2@naver.com",
  //   name: "수정슬기",
  //   profileImg:
  //     "https://images.unsplash.com/photo-1676873261959-173b91552b0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
  // };

  // const newTodo = {
  //   todoContent: "오늘할일스루기수정",
  //   complitedAt: new Date(),
  //   authenticationMethod: "image",
  //   authenticationContent: "https://www.naver.com",
  //   author: 26,
  // };

  // const newRoom = {
  //   roomName: "공부스터디수정중",
  //   roomDesc: "공부스터디설명",
  //   startDate: new Date(),
  //   endDate: new Date(),
  //   enterCode: 1231234,
  //   members: [23],
  // };

  // const newFine = {
  //   date: new Date(),
  //   members: [23],
  //   time: 12,
  // };

  return <> {/* <Room />{" "} */}</>;
}

export default App;
