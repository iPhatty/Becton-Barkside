import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main, Login, MainMenu } from "./pages/MainMenu";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<MainMenu />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
