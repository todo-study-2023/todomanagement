import React from "react";
import Text from "./Text";

interface Props {}

export default function Card({}: Props) {
  return <div className="card">
    <Text type="title">프로젝트 구조잡기</Text>
    <div className="square"></div>
    <Text size="sm" color="gray">인증시간 : 2023.02.11. 12:57</Text>
  </div>;
}
