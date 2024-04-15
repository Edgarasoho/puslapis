import React from "react";
import "./friendsNavbar.scss";
import elektronikosTaskas from "../../Images/elektronikos taskas.jpg";
import reshop from "../../Images/reshop.jpg";
import rematrade from "../../Images/rematrade.jpg";
import supportive from "../../Images/supportive_electronic_service_logo.jpg";

function FriendsNavbar() {
  return (
    <nav className="friendsNavbar">
      <ul>
        <h1>Friends</h1>
        <img src={elektronikosTaskas} width={100} height={100} />
        <img src={reshop} width={100} height={100} />
        <img src={rematrade} width={100} height={100} />
        <img src={supportive} width={100} height={100} />
      </ul>
    </nav>
  );
}

export default FriendsNavbar;
