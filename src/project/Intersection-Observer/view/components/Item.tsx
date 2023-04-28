import React, { useEffect } from "react";
import styles from "../style/InfiniteScroll.module.css";
import useInterscetionObserver from "../../hooks/useIntersectionObserver";

interface ItemProps {
  name: string;
  isLast: boolean;
  requestNextPage: () => void;
}

const Item: React.FC<ItemProps> = (props) => {
  const [isInViewPort, target] = useInterscetionObserver();

  useEffect(() => {
    if (props.isLast && isInViewPort) {
      props.requestNextPage();
    }
  }, [isInViewPort]);

  return (
    <div className={styles.item} ref={target}>
      {props.name}
    </div>
  );
};

export default Item;
