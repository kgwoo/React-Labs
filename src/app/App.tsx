import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import * as Project from "app/project";

const Main: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Project.InfiniteScroll} />
      </Routes>
    </BrowserRouter>
  );
};

export default function App() {
  return <Main />;
}
