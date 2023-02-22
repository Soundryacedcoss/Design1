import React from "react";
import article from "./ArticleData";
export const Articles = () => {
  return (
    <div className="Article_Container">
      <p className="article_heading">All articles</p>
      <div className="Article_card">
        {article.map((val) => (
          <div className="card">
            <img src={val.img} alt="" className="Card_img" />
          <p className="Description">{val.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
