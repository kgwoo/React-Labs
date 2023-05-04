import React, { useReducer } from "react";
import ChildComponent from "./ChildComponent";
import Context, { initState, reducer } from "./Context";

const ContextAPIView: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <ChildComponent />
    </Context.Provider>
  );
};

export default ContextAPIView;
