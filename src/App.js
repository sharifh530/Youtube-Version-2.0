import React from "react";

import "./App.css";

import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import RecomendedVideos from "./recomendedVedios/RecomendedVideos.jsx";
import SearchPage from "./searchPage/SearchPage";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__page">
        <Sidebar />
        <RecomendedVideos />
      </div>
      {/* recomended video */}
    </div>
  );
}

export default App;
