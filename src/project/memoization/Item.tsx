import React, { useEffect } from "react";

interface ItemProps {
  user: string;
}

const Item: React.FC<ItemProps> = (props) => {
  useEffect(() => {
    console.log(props.user, "오오");
  }, []);

  return <div>{props.user}</div>;
};

export default React.memo(Item);

// export default React.memo(Item);
