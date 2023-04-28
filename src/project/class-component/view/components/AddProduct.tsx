import React from "react";
import style from "../style/ClassComponent.module.css";

interface Props {
  onClickAddProduct: (name: string, price: number) => void;
}

interface State {
  name: string;
  price: number;
}

class AddProduct extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      name: "",
      price: 0,
    };
  }

  render() {
    const { name, price } = this.state;

    return (
      <div>
        <div className={style.flex}>
          <input
            placeholder="상품명"
            value={name}
            onChange={(e) => this.setState({ name: e.target.value })}
          />
        </div>
        <div>
          <input
            placeholder="금액"
            type="number"
            value={price}
            onChange={(e) => this.setState({ price: Number(e.target.value) })}
          />
        </div>
        <button
          onClick={() => {
            this.setState({ name: "", price: 0 });
            this.props.onClickAddProduct(name, price);
          }}>
          등록
        </button>
      </div>
    );
  }
}

export default AddProduct;
