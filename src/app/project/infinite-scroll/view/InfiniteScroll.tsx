import React, { useEffect, useRef } from "react";
import "./style/InfiniteScroll.css";
import { users } from "../model/Users";
import * as Components from "./components";

const InfiniteScroll: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          console.log("성공");
        }
      },
      { threshold: 1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
  }, []);

  return (
    <main className="main">
      <section className="section-layer">
        {users.map((user) => {
          return <Components.Item key={user.id} name={user.name} />;
        })}
        <div ref={ref}>로딩 예정</div>
      </section>
    </main>
  );
};

export default InfiniteScroll;
