import React from "react";
import "./article.css";
/**
 *
 * @param {imgUrl} param1 //image path for the article
 * @param {date} param2 //article date
 * @param {text} param3 //article text
 * @returns {JSX.Element} => A ReactJS Component
 * @component
 */
const Article = ({ imgUrl, date, text }) => (
  <div className="gpt3__blog-container_article">
    <div className="gpt3__blog-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="gpt3__blog-container_article-content">
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
      </div>
      <p>Read Full Article</p>
    </div>
  </div>
);

export default Article;
