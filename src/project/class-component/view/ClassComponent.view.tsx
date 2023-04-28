import React from "react";
import ProductItem from "./components/ProductItem";
import AddProduct from "./components/AddProduct";
import style from "./style/ClassComponent.module.css";

interface Props {}

interface State {
  products: Product[];
}

interface Product {
  id: string;
  name: string;
  price: number;
  count: number;
}

class ClassComponent extends React.Component<{}, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      products: [],
    };
  }

  componentDidMount(): void {
    console.log("컴디마");
  }

  componentDidUpdate(
    prevProps: Readonly<{}>,
    prevState: Readonly<{}>,
    snapshot?: any
  ): void {
    console.log("이전값>>", prevProps);
    console.log("이전 state>>", prevState);
  }

  onClickAddProduct = (name: string, price: number) => {
    const product: Product = {
      id: String(this.state?.products.length),
      name,
      price,
      count: 0,
    };

    this.setState((prevState) => {
      const newProduct = [...prevState.products, product];
      return {
        products: newProduct,
      };
    });
  };

  onCount = (type: "add" | "minus", id: string) => {
    this.setState((prev) => {
      const newProducts = prev.products.map((product) => {
        if (product.id === id) {
          switch (type) {
            case "add":
              product.count += 1;
              break;

            case "minus":
              product.count -= 1;
              break;
          }
          return product;
        } else {
          return product;
        }
      });

      return {
        products: newProducts,
      };
    });
  };

  render(): React.ReactNode {
    const { products } = this.state;

    return (
      <main className={style.main}>
        <div>
          <title>상품 목록</title>
          <section>
            <div>
              <div>리스트</div>
              <div>
                {products.map((product) => {
                  return (
                    <ProductItem
                      key={product.id}
                      name={product.name}
                      price={product.price}
                      count={product.count}
                      onCount={(type) => this.onCount(type, product.id)}
                    />
                  );
                })}
              </div>
            </div>
          </section>
          <AddProduct onClickAddProduct={this.onClickAddProduct} />
        </div>
      </main>
    );
  }
}

export default ClassComponent;
