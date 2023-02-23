import React, { ChangeEvent, Children, useState } from "react";
import * as Icon from "react-feather";
import Text from "../../components/common/Text";
import { deleteTodo, updateTodo } from "../../services/api/todo";

interface Props {
  content: string;
  id: number;
}

export default function TodoContent({ content, id }: Props) {
  const [isEdit, setIsEdit] = useState(false);
  const [editTodoContent, setEditTodoContent] = useState(content);

  const editTodo = {
    todoContent: editTodoContent,
    author: 24, //TODO: 로그인한 사용자의 id 값을 넣어줘야함
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEditTodoContent(e.target.value);
  };
  const onSubmit = (e: any) => {
    e.preventDefault();
    updateTodo(editTodo, id);
    setEditTodoContent("");
    setIsEdit(false);
  };

  return (
    <div className="todo-content-container">
      <div className="todo-content-wrapper">
        <Icon.CheckCircle size={18} color="white" />
        {isEdit ? (
          <form onSubmit={onSubmit}>
            <input type="text" defaultValue={content} onChange={onChange} />
          </form>
        ) : (
          <Text style={{ paddingLeft: "10px" }}>{content}</Text>
        )}
      </div>
      <div className="todo-icon-wrapper">
        <button
          onClick={() => {
            setIsEdit(true);
            console.log("E");
          }}
        >
          <Icon.Edit2 size={18} color="white" />
        </button>
        <button
          onClick={() => {
            deleteTodo(id as number);
          }}
        >
          <Icon.Trash size={18} color="white" />
        </button>
      </div>
    </div>
  );
}
