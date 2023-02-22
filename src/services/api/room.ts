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

export const updateRoom = async (newRoom: RoomEntity, id: number) => {
  const res: AxiosResponse<Entity<RoomEntity>> = await api.put(`/rooms/${id}`, {
    data: newRoom,
  });
  return res.data;
};

export const deleteRoom = async (id: number) => {
  const res: AxiosResponse<Entity<RoomEntity>> = await api.delete(
    `/rooms/${id}`
  );
  return res.data;
};
