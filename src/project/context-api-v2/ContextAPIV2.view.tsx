import React, { useState, createContext, useMemo } from "react";
import Parent from "./Parent";

export const UserContext = createContext<{
  loading: boolean;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  loading: false,
  setLoggedIn: () => {},
  setLoading: () => {},
});

const ContextAPIV2: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);

  const value = useMemo(
    () => ({ loading, setLoggedIn, setLoading }),
    [loading, setLoggedIn, setLoading]
  );
  return (
    <UserContext.Provider value={value}>
      <Parent />
      <div>{loggedIn ? "로그인" : "로그인안해"}</div>
      <div>{loading ? "로딩중" : "로딩안해"}</div>
    </UserContext.Provider>
  );
};

export default ContextAPIV2;
