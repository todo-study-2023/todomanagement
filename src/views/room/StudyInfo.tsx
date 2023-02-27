import React from "react";
import Text from "../../components/common/Text";
import { useAPI } from "../../hooks/useAPI";
import { fetchRoom } from "../../services/api/room";

interface Props {}

export default function StudyInfo({}: Props) {
  const { data: room } = useAPI<RoomEntity>(fetchRoom, { isFetch: true });
  
  return (
    <div className="item study-info">
      <Text style={{ margin: "10px 0" }} size="sm" type="title" color="gray">
        {/* TODO : room[0] 이걸 특정을 어떻게하지 ?  */}
        {room.length > 0 && `${room[0].startDate}~ ${room[0].endDate}`}
      </Text>
      <Text style={{ margin: "10px 0" }} size="xxl" type="title">
      {room.length > 0 && `${room[0].roomName}`}
      </Text>
      <Text style={{ margin: "10px 0" }} color="gray">
      {room.length > 0 && `${room[0].roomDesc}`}
      </Text>
    </div>
  );
}
