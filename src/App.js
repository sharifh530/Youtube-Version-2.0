import React from "react";

import "./App.css";

import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import TopVideos from "./topVideos/topVideos.jsx";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__page">
        <Sidebar />
        <TopVideos />
      </div>
      {/* recomended video */}
    </div>
  );
}

export default App;
