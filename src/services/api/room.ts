import { AxiosResponse } from "axios";
import api from ".";

export const fetchRoom = async () => {
  const res: AxiosResponse<Entity<RoomEntity>> = await api.get("/rooms?populate=*");
  // console.log(res);
  return res.data;
};
