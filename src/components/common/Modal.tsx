import React, { useRef, useState } from "react";
import Button from "./Button";
import Text from "./Text";
import * as Icon from "react-feather";

type Variant = "code" | "certification";
interface Props {
  variant?: Variant;
}

export default function Modal({ variant }: Props) {
  const inputRef = useRef(null);
  const [inputFile, setInputFile] = useState("");
  return (
    <div>
      <div className="modal-container">
        {variant === "code" ? (
          <div className="variant-code">
            <Text type="title">입장코드를 입력해주세요</Text>
            <input placeholder="e.g. 1234567" />
          </div>
        ) : (
          <div className="variant-certification">
            <Text type="title">공부내용 인증</Text>
            <Text type="title" size="sm">
              블로그 인증
            </Text>
            <input placeholder="블로그 링크를 입력해주세요" />
            <Text type="title" size="sm">
              스크린샷 인증
            </Text>
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
                e.target.files && setInputFile(e.target.files[0].name);
              }}
            />
          </div>
        )}
        <div className="button-wrapper">
          <Button size="sm" variant="outlined">
            취소
          </Button>
          <Button size="sm">확인</Button>
        </div>
      </div>
    </div>
  );
}
