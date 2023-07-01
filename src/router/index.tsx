import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import User from "../pages/user";
import { Header } from "../layouts/components";
import Footer from "../layouts/components/footer/Footer";
const RouterList = () => {
  return (<>
    <Header/>
    <Routes>
      <Route path="*" element={<Home/>} />
      <Route path="/user" element={<User/>} />
    </Routes>
    <Footer/>
    </>
  );
};

export default RouterList;