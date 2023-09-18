import React, { useState } from "react";
import NaveBar from "./component/NaveBar";
import News from "./component/News";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  const [Progress, setProgress] = useState(0);
  return (
    <div>
      <Router>
        <NaveBar />
        <LoadingBar color="#f11946" progress={Progress} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setProgress}
                key="general"
                pageSize={12}
                category={"general"}
              />
            }
          />

          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={setProgress}
                key=""
                pageSize={12}
                category={"business"}
              />
            }
          />

          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                key="entertainment"
                pageSize={12}
                category={"entertainment"}
              />
            }
          />

          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={setProgress}
                key="science"
                pageSize={12}
                category={"science"}
              />
            }
          />

          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                key=""
                pageSize={12}
                category={"sports"}
              />
            }
          />

          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={setProgress}
                key="health"
                pageSize={12}
                category={"health"}
              />
            }
          />

          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                key="technology"
                pageSize={12}
                category={"technology"}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
