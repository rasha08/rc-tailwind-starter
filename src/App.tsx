import React from "react";
import Header from "./common/components/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AppRoutes } from "./common/routing/appRoutes";

function App() {
  return (
    <div
      className={"grid  h-screen content-start bg-whiteAlpha-45"}
      data-theme="yuno"
    >
      <Header />
      <div className={"grid min-h-app  content-start "}>
        <Router>
          <Routes>
            {AppRoutes.map((R) => (
              <Route key={R.path} path={R.path} element={<R.component />} />
            ))}
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
