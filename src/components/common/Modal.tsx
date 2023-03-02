import React, { ChangeEvent, FormEvent, useRef, useState } from "react";
import Button from "./Button";
import Text from "./Text";
import * as Icon from "react-feather";
import { updateTodo } from "../../services/api/todo";

type Variant = "code" | "certification";
interface Props {
  variant?: Variant;
  closeModal: () => void;
  onSubmit: any;
}

export default function Modal({ variant, closeModal, onSubmit }: Props) {
  const inputRef = useRef(null);
  // const [doneContent, setDoneContent] = useState("");
  // const [linkOrImage, setLinkOrImage] = useState("");
  const [newDone, setNewDone] = useState<TodoEntity>({
    complitedAt: new Date(),
    authenticationMethod: '',
    authenticationContent: '',
  });

  const [isShowImage, SetIsShowImage] = useState(false);

  const update = (key: 'authenticationMethod' | 'authenticationContent', value: string) => {
    const _newDone = {...newDone};
    _newDone[key] = value;
    setNewDone(_newDone);
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewDone({...newDone, authenticationContent: e.target.value });
  };

  return (
    <div>
      <div className="modal-container">
        {variant === "code" ? (
          <div className="variant-code">
            <Text type="title">입장코드를 입력해주세요</Text>
            <input placeholder="e.g. 1234567" />
          </div>
        ) : (
          <form className="variant-certification">
            <Text type="title">공부내용 인증</Text>
            <Text type="title" size="sm">
              블로그 인증
            </Text>
            <input
              onChange={(e) => {
                onChange(e);
                update('authenticationMethod', "link");
              }}
              placeholder="블로그 링크를 입력해주세요"
            />
            <Text type="title" size="sm">
              스크린샷 인증
            </Text>
            {isShowImage ? (
              <img src={newDone.authenticationContent} alt={newDone.authenticationContent} />
            ) : (
              <>
                <div
                  className="input-file-box"
                  onClick={() => {
                    (inputRef.current as any).click();
                  }}
                >
                  <Icon.UploadCloud size={18} color="#828fa3" />
                  <Text size="md" color="gray" style={{ marginLeft: "5px" }}>
                    파일 업로드
                  </Text>
                </div>
                <input
                  className="hidden"
                  ref={inputRef}
                  type="file"
                  style={{ visibility: "hidden" }}
                  name={"fileName"}
                  onChange={(e) => {
                    e.target.files && update('authenticationContent',e.target.files[0].name);
                    update('authenticationMethod', "image");
                    SetIsShowImage(true);
                  }}
                />
              </>
            )}
          </form>
        )}
        <div className="button-wrapper">
          <Button onClick={closeModal} size="sm" variant="outlined">
            취소
          </Button>
          <Button onClick={(e: any) => onSubmit(e, newDone)} size="sm">
            확인
          </Button>
        </div>
      </div>
    </div>
  );
}
