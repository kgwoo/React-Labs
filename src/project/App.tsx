import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import IntersectionObserver from "project/intersection-Observer";
import ShareStateByLiftingItUp from "./share-state-by-lifting-it-up/view/ShareStateByLiftingItUp.view";

const Main: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={ShareStateByLiftingItUp} />
      </Routes>
    </BrowserRouter>
  );
};

export default function App() {
  return <Main />;
}
