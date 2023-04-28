import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import IntersectionObserver from "project/intersection-Observer";
import ShareStateByLiftingItUp from "./share-state-by-lifting-it-up/view/ShareStateByLiftingItUp.view";
import AsyncAwaitView from "./async-await/view/AsyncAwait.view";

const Main: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={AsyncAwaitView} />
      </Routes>
    </BrowserRouter>
  );
};

export default function App() {
  return <Main />;
}
