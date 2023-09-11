import React from "react";
import NaveBar from "./component/NaveBar";
import News from "./component/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <NaveBar />
        <Routes>
          <Route
            exact
            path="/"
            element={<News key="general" pageSize={8} category={"general"} />}
          />

          <Route
            exact
            path="/business"
            element={<News key="" pageSize={8} category={"business"} />}
          />

          <Route
            exact
            path="/entertainment"
            element={
              <News
                key="entertainment"
                pageSize={8}
                category={"entertainment"}
              />
            }
          />

          <Route
            exact
            path="/science"
            element={<News key="science" pageSize={8} category={"science"} />}
          />

          <Route
            exact
            path="/sports"
            element={<News key="" pageSize={8} category={"sports"} />}
          />

          <Route
            exact
            path="/health"
            element={<News key="health" pageSize={8} category={"health"} />}
          />

          <Route
            exact
            path="/technology"
            element={
              <News key="technology" pageSize={8} category={"technology"} />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
