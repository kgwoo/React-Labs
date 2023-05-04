import React, { useContext } from "react";
import Context, { Action } from "./Context";

const ChildComponent: React.FC = () => {
  const { state, dispatch } = useContext(Context);

  const changeName = () => {
    dispatch!({ type: Action.SetName, payload: { name: "오호" } });
  };

  return (
    <>
      <div>
        <div>{state?.name}</div>
        <button onClick={changeName}>확인</button>
      </div>
    </>
  );
};

export default ChildComponent;
