import { AxiosResponse } from "axios";
import api from ".";

export const fetchRoom = async () => {
  const res: AxiosResponse<Entity<RoomEntity>> = await api.get("/rooms");
  // console.log(res);
  return res.data;
};
