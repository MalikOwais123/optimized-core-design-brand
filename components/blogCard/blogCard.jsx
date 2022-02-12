import React from "react";
import Header from "../Header/Header";
import Paragraph from "../Paragraph/Paragraph";
// import en1 from "../../public/assets/images/icons/ea/ea-1.svg";
// import homePageImage2 from "./../../public/assets/images/home/8.png";
import classList from "./blogCard.module.scss";
import { getFormatDate } from "../../utils/Data/helpers";
import { BiMessage } from "react-icons/bi";
import { AiOutlineShareAlt } from "react-icons/ai";
import { BiDotsVerticalRounded } from "react-icons/bi";
const BlogCard = (props) => {
  const {
    postedBy,
    userImage,
    blogImage,
    date,
    blogTitle,
    blogDesc,
    onClick,
    style,
    blogId,
  } = props;

  const createMarkup = (html) => {
    return { __html: html };
  };

  return (
    <div>
      <div style={style} className={classList.blog_post}>
        <div>
          <Paragraph className={classList.user_title}>{postedBy}</Paragraph>
          <img className={classList.user_photo} src={userImage} alt="" />
          <img
            onClick={onClick}
            className={classList.blog_thumb}
            src={blogImage}
            alt=""
          />
          <div className={classList.content_wrapper}>
            <div className={classList.actions}>
              <div className={classList.flex_actions}>
                <Paragraph fontSize={14}>
                  {" "}
                  <BiMessage /> 22.1k Comments
                </Paragraph>
                <Paragraph
                  customClass={classList.share_icon}
                  onClick={() => console.log(blogId, "blogId")}
                  fontSize={14}>
                  <AiOutlineShareAlt /> Share
                </Paragraph>
              </div>
              <Paragraph className={classList.date}>
                {getFormatDate(date)}
              </Paragraph>
            </div>
            <Header className={classList.title} fontWeight="semi-bold">
              {blogTitle}
            </Header>
            {/* <Paragraph
            dangerouslySetInnerHTML={createMarkup(blogDesc)}
            className={classList.desc}></Paragraph> */}
            <p
              dangerouslySetInnerHTML={createMarkup(blogDesc)}
              className={classList.desc}></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
