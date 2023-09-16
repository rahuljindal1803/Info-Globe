import React from "react";
import "./NewsItem.css";

const NewsItem = ({
  title,
  description,
  imgUrl,
  url,
  author,
  Date,
  source,
}) => {
  return (
    <div>
      <div
        className="card my-4"
        style={{ width: "20rem", borderRadius: "20px" }}
      >
        <span
          class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-white text-dark "
          style={{ left: "80%", zIndex: "1" }}
        >
          {source}
          <span class="visually-hidden">unread messages</span>
        </span>
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
          <p className="time-text">
            <small className="text-body-secondary">
              by {!author ? "Unknown" : author} on {Date}
            </small>
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
