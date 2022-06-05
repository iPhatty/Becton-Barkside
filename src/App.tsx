import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CheckAuth, RequireAuth } from "./utils/authContext";
import { Main, Login, MainMenu } from "./pages/MainMenu";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <CheckAuth>
              <Main />
            </CheckAuth>
          }
        >
          <Route path="/" element={<MainMenu />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route
          path="/signup"
          element={
            <CheckAuth>
              <SignUp />
            </CheckAuth>
          }
        />
        <Route
          path="/main"
          element={
            <RequireAuth>
              <div>Main</div>
            </RequireAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
