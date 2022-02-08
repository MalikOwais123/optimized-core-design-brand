import React from "react";
// import en1 from "../../public/assets/images/icons/ea/ea-1.svg";
// import homePageImage2 from "./../../public/assets/images/home/8.png";
import classList from "./blogCard.module.scss";
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
          <p className={classList.user_title}>{postedBy}</p>
          <img className={classList.user_photo} src={userImage} alt="" />
          <img className={classList.blog_thumb} src={blogImage} alt="" />
          <p className={classList.date}>{date}</p>
          <h1 className={classList.title}>{blogTitle}</h1>
          <p
            dangerouslySetInnerHTML={createMarkup(blogDesc)}
            className={classList.desc}></p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
