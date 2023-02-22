import React from "react";
import logo from "../image/NORDIC ROSE (copy 1).png";
export const Footer = () => {
  return (
    <div className="Footer_container">
      <ul className="Footer_list">
        <li className="footer_list bold">Digital product design</li>
        <li className="footer_list">Remote work</li>
        <li className="footer_list bold">UX design</li>
        <li className="footer_list">Distributed teams</li>
        <li className="footer_list bold">Creativity</li>
        <li className="footer_list">Strategy</li>
        <li className="footer_list bold">Suspense</li>
        <li className="footer_list">Growth</li>
      </ul>
      <div className="img_div">
      <img src={logo} alt="logo" className="Footer_logo" />
      </div>
     
      <p className="Footer_desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit
        tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a
        nunc eget ligula suscipit finibus.{" "}
      </p>
      <ul className="footer_last_list">
        <li>
          <a href="//">Twitter</a>
        </li>
        <li>
          <a href="//">Linkdin</a>
        </li>
        <li>
          <a href="//">RSS</a>
        </li>
      </ul>
      <p className="copyright">© 2012–2020 Nordic Rose Co.  All rights reserved. </p>
    </div>
  );
};
