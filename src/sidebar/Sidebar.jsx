import React from "react";
import SidebarRow from "../sidebarRow/SidebarRow";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow
        selected
        Icon={HomeIcon}
        title="Home"
        refer="https://www.youtube.com/"
      />
      <SidebarRow
        Icon={WhatshotIcon}
        title="Trending"
        refer="https://www.youtube.com/feed/trending"
      />
      <SidebarRow
        Icon={SubscriptionsIcon}
        title="Subscription"
        refer="https://www.youtube.com/feed/subscriptions"
      />
      <hr />
      <SidebarRow
        Icon={VideoLibraryIcon}
        title="Video library"
        refer="https://www.youtube.com/feed/library"
      />
      <SidebarRow
        Icon={HistoryIcon}
        title="History"
        refer="https://www.youtube.com/feed/history"
      />
      <SidebarRow
        Icon={OndemandVideoIcon}
        title="Ondemand video"
        refer="https://www.youtube.com/feed/trending"
      />
      <SidebarRow
        Icon={WatchLaterIcon}
        title="Watch later"
        refer="https://www.youtube.com/playlist?list=WL"
      />
      <SidebarRow
        Icon={ThumbUpAltIcon}
        title="Liked videos"
        refer="https://www.youtube.com/playlist?list=LLrtVjdCoEE03LqZqbNC0Qkw"
      />
      <SidebarRow Icon={ExpandMoreIcon} title="Show more" />
    </div>
  );
}

export default Sidebar;
