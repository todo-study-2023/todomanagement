import React from "react";
import * as Icon from "react-feather";
import Button from "../../components/common/Button";
import Text from "../../components/common/Text";

export default function Todo() {
  return (
    <div className="item todo">
      <div className="todo-title">
        <div className="blue-dot"></div>
        <Text type="title" style={{ paddingLeft: "10px" }}>
          TODO
        </Text>
        <Text type="title" style={{ paddingLeft: "10px" }}>
          (4)
        </Text>
      </div>

      <div className="todo-content-layout-container">
        <div className="todo-content-container">
          <div className="todo-content-wrapper">
            <Icon.CheckCircle size={18} color="white" />
            <Text style={{ paddingLeft: "10px" }}>프로젝트 구조잡기</Text>
          </div>
          <div className="todo-icon-wrapper">
            <Icon.Edit2 size={18} color="white" />
            <Icon.Trash size={18} color="white" />
          </div>
        </div>

        <div className="add-todo-container">
          <Button variant="text">
          <Icon.Plus size={20} color="#635fc7" />
          </Button>
          <Text type="title" size="lg" color="primary" style={{ paddingLeft: "10px" }}>
            ADD TODO
          </Text>
        </div>
      </div>
    </div>
  );
}
