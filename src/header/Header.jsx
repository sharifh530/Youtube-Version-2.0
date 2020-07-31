import React, { useState, useEffect } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";

import "./Header.css";

function Header() {
  const [input, setInput] = useState("popular");
  const [youtubeData, setYoutubeData] = useState();

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // useEffect(async (input) => {
  //   const response = await youtube.get("search", {
  //     params: {
  //       part: "snippet",
  //       maxResults: 20,
  //       key: "AIzaSyAVfo_yJ8LY0Xj7uOWV16YRzxdQzeYxAqs",
  //       q: input,
  //     },
  //   });
  //   setYoutubeData(response.data.items);
  // }, []);

  // const handleClick = async (input) => {
  //   const response = await youtube.get("search", {
  //     params: {
  //       part: "snippet",
  //       maxResults: 20,
  //       key: "AIzaSyAVfo_yJ8LY0Xj7uOWV16YRzxdQzeYxAqs",
  //       q: input,
  //     },
  //   });
  //   setYoutubeData(response.data.items);
  //   console.log(youtubeData);
  // };

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
        <input
          // value={input}
          onChange={handleChange}
          placeholder="Search"
          type="text"
        />
        <SearchIcon className="header__inputButton" />
      </div>

      <div className="header_icons">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <Avatar
          className="avatar"
          alt="Sazzad"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Salmanrampwalk.png/220px-Salmanrampwalk.png"
        />
      </div>
    </div>
  );
}

export default Header;
