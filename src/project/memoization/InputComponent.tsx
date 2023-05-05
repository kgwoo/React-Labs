import React, { useState } from "react";

const InputComponent: React.FC = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <input onChange={(e) => setValue(e.target.value)} />
      <div>{value}</div>
    </>
  );
};

export default InputComponent;
