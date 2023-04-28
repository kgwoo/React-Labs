import React, { useState } from "react";
import styled from "styled-components";

interface ChildProps {
  onClick: (value: string) => void;
}

const Child: React.FC<ChildProps> = (props) => {
  const [value, setValue] = useState("");

  return (
    <div>
      <InputLayer>
        <Input onChange={(e) => setValue(e.target.value)} value={value} />
      </InputLayer>
      <Button onClick={() => props.onClick(value)}>확인</Button>
      <Button
        style={{ marginLeft: 20 }}
        onClick={() => {
          setValue("");
          props.onClick("");
        }}>
        초기화
      </Button>
    </div>
  );
};

export default Child;

const InputLayer = styled.div`
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  height: 30px;
`;

const Button = styled.button`
  width: 100px;
  height: 30px;
  cursor: pointer;
`;
