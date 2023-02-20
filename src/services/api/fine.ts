import { AxiosResponse } from "axios";
import api from ".";

export const fetchFine = async () => {
  const res: AxiosResponse<Entity<FineEntity>> = await api.get(
    "/fines?populate=*"
  );
  // console.log(res);
  return res.data;
};
