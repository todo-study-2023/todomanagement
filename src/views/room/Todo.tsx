import React, {
  useEffect,
  useState,
  KeyboardEvent,
  ChangeEvent,
  FormEvent,
} from "react";
import * as Icon from "react-feather";
import Button from "../../components/common/Button";
import Text from "../../components/common/Text";
import Title from "../../components/common/Title";
import { useAPI } from "../../hooks/useAPI";
import { createTodo, fetchTodo } from "../../services/api/todo";
import TodoContent from "./TodoContent";

export default function Todo() {
  const { data: todo, fetchData } = useAPI<TodoEntity>(fetchTodo, {
    isFetch: true,
  });
  const [todoContent, setTodoContent] = useState("");
  const [isAdd, setIsAdd] = useState(false);

  const newTodo = {
    todoContent: todoContent,
    author: 24,
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoContent(e.target.value);
  };
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createTodo(newTodo);
    setTodoContent("");
    setIsAdd(false);
    fetchData();
  };

  return (
    <div className="item todo">
      <Title titleName="todo" children={todo.length} />

      <div className="todo-content-layout-container">
        <div className="todo-tontent-layout-wrapper">
          {todo.map((t) => {
            return (
              <TodoContent
                key={`${t.publishedAt}+1`}
                content={t.todoContent!}
                id={t.id!}
                fetchData={fetchData}
              />
            );
          })}
        </div>

        {isAdd ? (
          <form onSubmit={onSubmit} className="add-todo-container">
            <input
              type="text"
              placeholder="할 일을 입력 후, Enter 를 누르세요"
              onChange={onChange}
              autoFocus={true}
              // value={todoContent}
            />
          </form>
        ) : (
          <label
            className="add-todo-container"
            onClick={() => {
              setIsAdd(true);
            }}
          >
            <Button variant="text">
              <Icon.Plus size={20} color="#635fc7" />
            </Button>
            <Text
              type="title"
              size="lg"
              color="primary"
              style={{ paddingLeft: "10px" }}
            >
              ADD TODO
            </Text>
          </label>
        )}
      </div>
    </div>
  );
}
