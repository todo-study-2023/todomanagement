import { AxiosResponse } from "axios";
import api from ".";

export const fetchMember = async () => {
  const res: AxiosResponse<Entity<MemberEntity>> = await api.get(
    "/members?populate=*"
  );
  // console.log("fetchMember", res);
  return res.data;
};

export const createMember = async (newmember: MemberEntity) => {
  //post
  const res: AxiosResponse<Entity<MemberEntity>> = await api.post("/members", {
    data: newmember,
  });
  return res.data;
};

export const updateMember = async (member: MemberEntity, id: number) => {
  //put
  const res: AxiosResponse<Entity<MemberEntity>> = await api.put(
    `/members/${id}`,
    { data: member }
  );
  return res.data;
};

export const deleteMember = async (id: number) => {
  //delete
  const res: AxiosResponse<Entity<MemberEntity>> = await api.delete(
    `/members/${id}`
  );
  return res.data;
};
