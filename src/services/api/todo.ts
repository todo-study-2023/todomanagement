import { AxiosResponse } from "axios";
import api from ".";

export const fetchTodo = async () => {
  const res: AxiosResponse<Entity<TodoEntity>> = await api.get("/todos?populate=*");
  // console.log(res);
  return res.data;
};
