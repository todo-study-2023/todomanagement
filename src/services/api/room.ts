import { AxiosResponse } from "axios";
import api from ".";

export const fetchRoom = async () => {
  const res: AxiosResponse<Entity<RoomEntity>> = await api.get(
    "/rooms?populate=*"
  );
  return res.data;
};

export const createRoom = async (newRoom: RoomEntity) => {
  const res: AxiosResponse<Entity<RoomEntity>> = await api.post("/rooms", {
    data: newRoom,
  });
  return res.data;
};

export const deleteRoom = async (id: number) => {
  const res: AxiosResponse<Entity<RoomEntity>> = await api.post(`/rooms/${id}`);
  return res.data;
};
