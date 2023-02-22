import { AxiosResponse } from "axios";
import api from ".";

export const fetchFine = async () => {
  const res: AxiosResponse<Entity<FineEntity>> = await api.get(
    "/fines?populate=*"
  );
  return res.data;
};

export const createFine = async (newFine: FineEntity) => {
  const res: AxiosResponse<Entity<FineEntity>> = await api.post("/fines", {
    data: newFine,
  });
  return res.data;
};

export const deleteFine = async (id: number) => {
  const res: AxiosResponse<Entity<FineEntity>> = await api.delete(`/fines/${id}`);
  return res.data;
};
