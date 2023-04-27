import React from "react";
import "../style/InfiniteScroll.css";

interface ItemProps {
  name: string;
}

const Item: React.FC<ItemProps> = (props) => {
  return <div className="item">{props.name}</div>;
};

export default Item;
