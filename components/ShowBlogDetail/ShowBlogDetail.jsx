import React from "react";
import classList from "./ShowBlogDetail.module.scss";
import Paragraph from "../Paragraph/Paragraph";
import Header from "../Header/Header";
import UseFrom from "../UseForm/UseForm"

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
        <UseFrom>
          <div className={classList.text_area}>
            <label htmlFor="">Write Comment</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
        </UseFrom>
      </div>
    </div>
  );
};

export default ShowBlogDetail;
