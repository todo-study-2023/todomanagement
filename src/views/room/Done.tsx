import React, { useEffect, useMemo, useState } from "react";
import Card from "../../components/common/Card";
import Text from "../../components/common/Text";
import Title from "../../components/common/Title";
import { useAPI } from "../../hooks/useAPI";
import { fetchTodo } from "../../services/api/todo";

export default function Done() {
  const { data: todo, fetchData } = useAPI<TodoEntity>(fetchTodo, {
    isFetch: true,
  });
  //complitedAt의 값이 있는것만 map을 돌아서 다시 doneData를 만들어주고싶음
  const doneData : DoneData[] = useMemo(() => {
    let _doneData = [];
    _doneData = todo
      .filter((t) => t.complitedAt)
      .map((t) => {
        return {
          todoContent: t.todoContent,
          complitedAt: t.complitedAt,
          authenticationContent: t.authenticationContent,
        };
      });
    console.log(_doneData);
    return _doneData;
  }, [todo]);
  const donePercent = (doneData.length / todo.length) * 100;
  return (
    <div className="item done">
      <Title titleName="done" children={`${donePercent}%`} />
      <div className="card-wrapper">
        <Card doneData={doneData}/>
        {/* <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card /> */}
      </div>
    </div>
  );
}
