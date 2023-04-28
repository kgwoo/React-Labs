import React, { useEffect, useState } from "react";
import "./style/InfiniteScroll.css";
import { users, User } from "../model/Users";
import * as Components from "./components";

const IntersectionObserver: React.FC = () => {
  const [userList, setUserList] = useState<User[]>([]);
  const [firstIndex, setFirstIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(10);

  useEffect(() => {
    const firstPage = users.slice(firstIndex, lastIndex);
    setUserList(firstPage);
  }, []);

  const requestNextPage = () => {
    const page = firstIndex + 10;
    const lastPage = lastIndex + 10;

    const data = users.slice(page, lastPage);
    const userListResult = userList.concat(data);

    setUserList(userListResult);
    setFirstIndex(page);
    setLastIndex(lastPage);
  };

  return (
    <main className="main">
      <section className="section-layer">
        {userList.map((user, index) => {
          return (
            <Components.Item
              key={user.id}
              name={user.name}
              isLast={userList.length - 1 === index}
              requestNextPage={requestNextPage}
            />
          );
        })}
      </section>
    </main>
  );
};

export default IntersectionObserver;
