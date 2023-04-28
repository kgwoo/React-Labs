import React from "react";
import style from "../style/ClassComponent.module.css";

interface Props {
  name: string;
  price: number;
  count: number;
  onCount: (type: "add" | "minus") => void;
}

class ProductItem extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    const { onCount } = this.props;

    return (
      <div className={style.padding}>
        <div>상품명: {this.props.name}</div>
        <div>금액: {this.props.price}</div>
        <div className={style.flex}>
          <div>{this.props.count}</div>
          <button onClick={() => onCount("add")}>+</button>
          <button onClick={() => onCount("minus")}>-</button>
        </div>
      </div>
    );
  }
}

export default ProductItem;
