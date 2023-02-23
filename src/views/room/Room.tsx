import React, { useEffect, useState } from "react";
import { useAPI } from "../../hooks/useAPI";
import { fetchRoom } from "../../services/api/room";
import Done from "./Done";
import Fine from "./Fine";
import Member from "./Member";
import StudyInfo from "./StudyInfo";
import Todo from "./Todo";
import UserInfo from "./UserInfo";

export default function Room() {
  const [roomData, setRoomData] = useState<RoomEntity[]>();
  // const { data: room } = useAPI<RoomEntity>(fetchRoom, { isFetch: true });

  return (
    <div className="container">
      <div className="grid">
        <StudyInfo />
        <Member />
        <Fine />
        <UserInfo />
        <Todo />
        <Done />
      </div>
    </div>
  );
}
