import React from "react";
import Card from "../../components/common/Card";
import Text from "../../components/common/Text";
import Title from "../../components/common/Title";

export default function Done() {
  return (
    <div className="item done">
      <Title titleName="done" children={"(50%)"} />
      <div className="card-wrapper">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
