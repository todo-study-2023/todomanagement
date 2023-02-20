import { AxiosResponse } from "axios";
import api from ".";

export const fetchMember = async () => {
  const res: AxiosResponse<Entity<MemberEntity>> = await api.get("/members");
  // console.log(res);
  return res.data;
};

