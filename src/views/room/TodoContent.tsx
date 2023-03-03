import React, {
  ChangeEvent,
  Children,
  useCallback,
  useRef,
  useState,
} from "react";
import * as Icon from "react-feather";
import Modal from "../../components/common/Modal";
import Text from "../../components/common/Text";
import { deleteTodo, updateTodo } from "../../services/api/todo";

interface Props {
  content: string;
  id: number;
  fetchData: () => Promise<void>;
}

export default function TodoContent({ content, id, fetchData }: Props) {
  const formRef = useRef(null);
  const [isEdit, setIsEdit] = useState(false);
  const [editTodoContent, setEditTodoContent] = useState(content);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const clickModal = () => {
    setIsOpenModal(true);
  };
  const closeModal = () => {
    setIsOpenModal(false);
  };
  const editTodo: TodoParam = {
    todoContent: editTodoContent,
    author: 24, //TODO: 로그인한 사용자의 id 값을 넣어줘야함
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEditTodoContent(e.target.value);
  };
  const onSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    todo: TodoParam
  ) => {
    e.preventDefault();
    await updateTodo(todo, id);
    if (todo === editTodo) {
      setIsEdit(false);
    } else {
      setIsOpenModal(false);
    }
    updateContent();
  };
  const updateContent = useCallback(() => {
    if (isEdit) {
      fetchData();
      setIsEdit(!isEdit);
    }
  }, [isEdit]);
  const editFunc = () => {
    setIsEdit(!isEdit);
    if (isEdit && formRef) {
      (formRef.current as any).dispatchEvent(
        new Event("submit", { cancelable: true, bubbles: true })
      );
    }
  };

  return (
    <>
      <div className="todo-content-container">
        <div className="todo-content-wrapper">
          <button
            onClick={() => {
              clickModal();
            }}
          >
            <Icon.CheckCircle size={18} color="white" />
          </button>

          {isEdit ? (
            <form
              ref={formRef}
              onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
                onSubmit(e, editTodo)
              }
            >
              <input type="text" defaultValue={content} onChange={onChange} />
            </form>
          ) : (
            <Text style={{ paddingLeft: "10px" }}>{content}</Text>
          )}
        </div>

        <div className="todo-icon-wrapper">
          <button onClick={() => editFunc()}>
            <Icon.Edit2 size={18} color="white" />
          </button>
          <button
            onClick={() => {
              deleteTodo(id as number);
              fetchData();
            }}
          >
            <Icon.Trash size={18} color="white" />
          </button>
        </div>
      </div>
      {isOpenModal && <Modal variant="certification" onSubmit={onSubmit} closeModal={closeModal} />}
    </>
  );
}
