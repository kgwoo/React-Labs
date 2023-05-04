import React, { useContext } from "react";
import { UserContext } from "./ContextAPIV2.view";

const Children: React.FC = () => {
  const { loading, setLoading, setLoggedIn } = useContext(UserContext);

  return (
    <>
      <button onClick={() => setLoading((prev) => !prev)}>
        {loading ? "눌림" : "안눌림"}
      </button>
      <button onClick={() => setLoggedIn((prev) => !prev)}>로딩</button>
    </>
  );
};

export default Children;
