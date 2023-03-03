import { AxiosResponse } from "axios";
import api from ".";

export const fetchTodo = async () => {
  const res: AxiosResponse<Entity<TodoEntity>> = await api.get(
    "/todos?populate=*"
  );
  return res.data;
};

export const createTodo = async (todo: TodoParam) => {
  const res: AxiosResponse<Entity<TodoEntity>> = await api.post("/todos", {
    data: todo,
  });
  return res.data;
};

export const updateTodo = async (todo: TodoParam, id: number) => {
  const res: AxiosResponse<Entity<TodoEntity>> = await api.put(`/todos/${id}`, {
    data: todo,
  });
  return res.data;
};

export const deleteTodo = async (id: number) => {
  const res: AxiosResponse<Entity<TodoEntity>> = await api.delete(
    `/todos/${id}`
  );
  return res.data;
};
