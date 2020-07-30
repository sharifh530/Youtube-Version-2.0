import React from "react";

import "./App.css";

import Header from "./Header";
import Sidebar from "./Sidebar";
import RecomendedVideos from "./RecomendedVideos.jsx";

function App() {
  return (
    <div className="app">
      {/* header */}

      <Header />

      {/* sidebar */}
      <div className="app__page">
        <Sidebar />
        <RecomendedVideos />
      </div>
      {/* recomended video */}
    </div>
  );
}

export default App;
