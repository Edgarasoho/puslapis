import React from "react";
import "./App.scss";
import Navbar from "./component/Navbar/Navbar";
import Main from "./component/Main/Main";
import FriendsNavbar from "./component/FriendsNavbar/friendsNavbar";
function App() {
  return (
    <>
      <Navbar />
      <Main />
      <FriendsNavbar />
    </>
  );
}

export default App;
