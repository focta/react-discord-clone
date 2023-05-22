import React from "react";
import logo from './logo.svg';
import "./Sidebar.scss";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarLeft">
        <div className="serverIcon">
          <img src="./logo192.png" alt="" />
        </div>
        <div className="serverIcon">
          <img src="./logo192.png" alt="" />
        </div>
      </div>
      <div className="sidebarRight">
        <div className="sidebarTop">
          <h3>discord</h3>
          <ExpandMoreIcon />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
