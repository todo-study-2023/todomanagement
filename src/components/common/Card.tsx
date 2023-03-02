import React from "react";
import Text from "./Text";

interface Props {
  doneData: DoneData[];
}

export default function Card({ doneData }: Props) {
  return (
    <>
      {doneData.map((done) => {
        return (
          <div className="card" key={`${done.complitedAt}+1`}>
            <Text type="title">{done.todoContent}</Text>
            <div className="square"></div>
            <Text size="sm" color="gray">
              {`인증시간 : ${done.complitedAt}`}
            </Text>
          </div>
        );
      })}
    </>
  );
}
