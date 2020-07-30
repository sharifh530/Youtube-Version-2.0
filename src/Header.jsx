import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";

import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <MenuIcon />

        <img
          className="header_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
          alt=""
        />
      </div>

      <div className="header_input">
        <input placeholder="Search" type="text" />
        <SearchIcon className="header__inputButton" />
      </div>

      <div className="header_icons">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <Avatar
          alt="Sazzad"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Salmanrampwalk.png/220px-Salmanrampwalk.png"
        />
      </div>
    </div>
  );
}

export default Header;
