import React from "react";

import "./SidebarRow.css";

function SidebarRow({ selected, title, Icon, refer }) {
  return (
    <a href={refer} target="_blank">
      <div className={`sidebarRow ${selected && "selected"} `}>
        <Icon className="sidebarRow__icon" />

        <h2 className="sidebarRow_title">{title} </h2>
      </div>
    </a>
  );
}

export default SidebarRow;
