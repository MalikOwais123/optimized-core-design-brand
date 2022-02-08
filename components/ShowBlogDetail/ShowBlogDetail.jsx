import React from "react";
import classList from "./ShowBlogDetail.module.scss";

const ShowBlogDetail = ({ data }) => {
  console.log("data", data);
  return (
    <div className={classList.showDetailsWrapper}>
      <div className={classList.showDetails}>
        <div className={classList.showDetails}>
          <div className={classList.showDetailsImage}>
            <img src={data?.coverPhoto} alt="" />
          </div>
        </div>
        <div className={classList.showDetailsBody}>
          <h1>{data?.title}</h1>
          <p>{data?.content}</p>
        </div>
      </div>
    </div>
  );
};

export default ShowBlogDetail;
