import React from "react";
import Introduction from "./components/Introduction";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import initPerfectScrollbar from "../lib/init-perfect-scrollbar.js";

function HomePage() {
  return (
    <div className="space-y-20 h-full">
      <Introduction />
      <Projects />
      <Skills />
    </div>
  );
}

export default HomePage;
