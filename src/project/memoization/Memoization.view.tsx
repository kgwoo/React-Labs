import React, { useState } from "react";
import Item from "./Item";
import InputComponent from "./InputComponent";

const MemoizationView: React.FC = () => {
  const [user, setUser] = useState<string[]>([]);
  const [count, setCount] = useState(0);

  const addUser = () => {
    var newCount = count + 1;
    setUser((prev) => {
      return prev.concat(`${newCount}`);
    });

    setCount((prev) => prev + 1);
  };

  return (
    <>
      <div>렌더링 </div>
      <button onClick={addUser}>추가</button>
      {user.map((user) => (
        <Item key={user} user={user} />
      ))}
      <InputComponent />
    </>
  );
};

export default MemoizationView;
