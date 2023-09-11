import React from "react";
import "./NewsItem.css";

const NewsItem = ({ title, description, imgUrl, url }) => {
  return (
    <div>
      <div
        className="card my-4"
        style={{ width: "20rem", borderRadius: "20px" }}
      >
        <img
          className="responsive-image image-placeholder"
          src={
            imgUrl
              ? imgUrl
              : "https://www.useourfacilities.com/css/images/no-image-template.png"
          }
          alt="Image description"
        />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>

          <p className="card-text" style={{ fontFamily: "Georgia" }}>
            {description}...
          </p>

          <a
            href={url}
            target="_blank"
            className="btn btn-sm btn-dark card-button"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
