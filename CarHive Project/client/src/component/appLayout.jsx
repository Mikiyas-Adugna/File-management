import { Outlet } from "react-router-dom";
import DashboardHeader from "./dashboardHeader";
import React, { useState } from "react";
import Sidebar from "../component/sidebar";
import Overlay from "../component/overlay";

export default function dashboard() {
  const [isActive, setIsActive] = useState(window.innerWidth < 768);
  const [isOverlayHidden, setIsOverlayHidden] = useState(
    window.innerWidth < 768
  );
  const [isMenuTranslated, setIsMenuTranslated] = useState(
    window.innerWidth < 768
  );

  const toggleSidebar = () => {
    setIsActive(!isActive);
    setIsOverlayHidden(!isOverlayHidden);
    setIsMenuTranslated(!isMenuTranslated);
  };

  const closeSidebar = () => {
    setIsActive(true);
    setIsOverlayHidden(true);
    setIsMenuTranslated(true);
  };

  return (
    <>
      <Sidebar isMenuTranslated={isMenuTranslated} />
      <Overlay closeSidebar={closeSidebar} isOverlayHidden={isOverlayHidden} />
      <main
        className={`w-full md:w-[calc(100%-256px)] md:ml-64 bg-[#F0F8FF] min-h-screen transition-all main ${
          isActive ? "active" : ""
        }`}
      >
        <DashboardHeader toggleSidebar={toggleSidebar} />
        <Outlet />
      </main>
    </>
  );
}
