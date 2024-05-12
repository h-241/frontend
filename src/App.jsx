import React from "react";
import { Route, Routes } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Interface from "./pages/Interface";
import Posts from "./pages/Posts";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/interface" element={<Interface />}></Route>
        <Route path="/posts" element={<Posts />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </>
  );
}

export default App;
