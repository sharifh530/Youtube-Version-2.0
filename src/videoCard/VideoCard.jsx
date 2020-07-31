import React from "react";
import Avatar from "@material-ui/core/Avatar";

import "./VideoCard.css";

function VideoCard({
  image,
  title,
  channel,
  views,
  timestamp,
  channelImage,
  videoLink,
}) {
  return (
    <div className="videoCard">
      <img src={image} alt="" className="videoCard__thumbnail" />
      <div className="videoCard_info">
        <Avatar
          className="videoCard__avater"
          alt={channel}
          src={channelImage}
        />
        <div className="videoCard_text">
          <h4>
            <a href={videoLink} target="_blank">
              {title}
            </a>
          </h4>
          <p>
            {views} . {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
