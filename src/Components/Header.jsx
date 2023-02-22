import React from "react";
import logo from "../image/NORDIC ROSE.png";
export const Header = () => {
  return (
    <>
      <div className="Header__container">
        
          <img src={logo} alt="" className="logo_img" />
          <ul className="Header_list">
            <li className="li">BLOG</li>
            <li className="li">ABOUT</li>
            <li className="li">LINKS</li>
            <li className="li">PROJECTS</li>
          </ul>
      </div>
      <hr />
    </>
  );
};
