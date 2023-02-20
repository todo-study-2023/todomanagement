import { AxiosResponse } from "axios";
import api from ".";

export const fetchFine = async () => {
  const res: AxiosResponse<Entity<FineEntity>> = await api.get("/fines");
  // console.log(res);
  return res.data;
};

