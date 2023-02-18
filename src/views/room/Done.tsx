import React from "react";
import Card from "../../components/common/Card";
import Text from "../../components/common/Text";

export default function Done() {
  return (
    <div className="item done">
      <div className="done-title">
        <div className="primary-dot"></div>
        <Text type="title" style={{ paddingLeft: "10px" }} color="white">
          DONE
        </Text>
        <Text type="title" style={{ paddingLeft: "10px" }} color="primary">
          (50%)
        </Text>
      </div>
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
