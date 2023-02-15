import React from "react";
import "./App.scss";
import Button from "./components/common/Button";
import Text from "./components/common/Text";

function App() {
  return (
    <div>
      {/* <Button variant="outlined" size="xs">
        버튼이당
      </Button> */}
      <Text size="sm" color="background">
        sm사이즈 텍스트
      </Text>
      <Text  size="md" color="redLight">
        md사이즈 텍스트
      </Text>
      <Text  size="lg" color="primary">
        lg사이즈 텍스트
      </Text>
      <Text  size="xl" color="line">
        xl사이즈 텍스트
      </Text>
      <Text type="content" size="xxl" color="primaryLight">
        xl사이즈 텍스트
      </Text>
    </div>
  );
}

export default App;
