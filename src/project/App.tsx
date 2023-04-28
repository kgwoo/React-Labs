import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import IntersectionObserver from "project/Intersection-Observer";

const Main: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={IntersectionObserver} />
      </Routes>
    </BrowserRouter>
  );
};

export default function App() {
  return <Main />;
}
