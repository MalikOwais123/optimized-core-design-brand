import React from "react";
import classList from "./ShowBlogDetail.module.scss";
import Paragraph from "../Paragraph/Paragraph";
import Header from "../Header/Header";

const ShowBlogDetail = ({ data }) => {
  console.log("data", data);
  return (
    <div className={classList.showDetailsWrapper}>
      <div className={classList.showDetails}>
        <div className={classList.showDetailsImage}>
          <img src={data?.coverPhoto} alt="" />
        </div>
        <div className={classList.showDetailsBody}>
          <Header fontWeight="semi-bold">{data?.title}</Header>
          <Paragraph style={{ lineHeight: "2.5" }}>{data?.content}</Paragraph>
        </div>
      </div>
    </div>
  );
};

export default ShowBlogDetail;
