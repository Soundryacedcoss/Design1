import React from "react";
import banner from "../image/image 2.png";
export const Banner = () => {
  return (
    <>
      <img src={banner} className="banner" alt="" />
      <h6 className="Content">
        A few words about this blog platform, Ghost, and how this site was made
      </h6>
      <p className="Last_content">
        Why Ghost (& Figma) instead of Medium, WordPress or other options?
      </p>
      <hr className="hr" />
    </>
  );
};
