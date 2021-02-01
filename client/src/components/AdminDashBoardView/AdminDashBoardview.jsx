import React from "react";
import DashSideBoard from "./DashSideBoard/DashSideBoard";
import "./AdminDashBoardView.scss";
import { isAuthenticated } from "../auth";

const DashBoardview = () => {
  const {
    user: {  name, email },
  } = isAuthenticated();
  return (
    <div>
      <div className="dashboard-intro">
        <h1>Welcome Back</h1>
        <h3>{`G'day ${name}!`}</h3>
      </div>
      <div className="dashboard-container">
        <div class="dashboardMain__title">Account Infomation</div>
        <DashSideBoard UserInfo={[name, email]} />
      </div>
    </div>
  );
};

export default DashBoardview;
