import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import IntersectionObserver from "project/intersection-Observer";
import ShareStateByLiftingItUp from "./share-state-by-lifting-it-up/view/ShareStateByLiftingItUp.view";
import AsyncAwaitView from "./async-await/view/AsyncAwait.view";
import ClassComponent from "./class-component/view";
import ContextAPIView from "./context-api";
import ContextAPIV2 from "./context-api-v2/ContextAPIV2.view";
import MemoizationView from "./memoization/Memoization.view";

const Main: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/async-await" Component={AsyncAwaitView} />
        <Route
          path="/share-state-by-lifting-it-up"
          Component={ShareStateByLiftingItUp}
        />
        <Route path="/intersection-observer" Component={IntersectionObserver} />
        <Route path="/class-component" Component={ClassComponent} />
        <Route path="/context-api" Component={ContextAPIView} />
        <Route path="/context-api/v2" Component={ContextAPIV2} />
        <Route path="/memoization" Component={MemoizationView} />
      </Routes>
    </BrowserRouter>
  );
};

export default function App() {
  return <Main />;
}
