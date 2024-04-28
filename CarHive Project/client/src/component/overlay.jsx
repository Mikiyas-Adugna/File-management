import React from "react";

export default function overlay({ closeSidebar, isOverlayHidden }) {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full md:hidden bg-black/50 z-40  sidebar-overlay ${
        isOverlayHidden ? "hidden" : ""
      }`} 
      onClick={closeSidebar}
    ></div>
  );
}
