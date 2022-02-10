import React from "react";
import Header from "../Header/Header";
import Paragraph from "../Paragraph/Paragraph";
// import en1 from "../../public/assets/images/icons/ea/ea-1.svg";
// import homePageImage2 from "./../../public/assets/images/home/8.png";
import classList from "./blogCard.module.scss";
import { getFormatDate } from '../../utils/Data/helpers';
const BlogCard = (props) => {
  const { postedBy, userImage, blogImage, date, blogTitle, blogDesc, onClick } =
    props;

  const createMarkup = (html) => {
    return { __html: html };
  };

  return (
    <div>
      <div onClick={onClick} className={classList.blog_post}>
        <div>
          <Paragraph className={classList.user_title}>{postedBy}</Paragraph>
          <img className={classList.user_photo} src={userImage} alt="" />
          <img className={classList.blog_thumb} src={blogImage} alt="" />
          <Paragraph className={classList.date}>{getFormatDate(date)}</Paragraph>
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
  );
};

export default BlogCard;
