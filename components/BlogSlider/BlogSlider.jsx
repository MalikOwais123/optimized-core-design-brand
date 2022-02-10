import classList from "./blogSlider.module.scss";
import MultiSlider from "../MultiSlider/MultiSlider";
import Paragraph from "../Paragraph/Paragraph";
import Header from "../Header/Header";
import sliderImage from "../../assets/images/sliderImages/sliderImage.png";
import { useEffect, useState } from "react";
import { checkStringWordLength, getFormatDate } from "../../utils/Data/helpers";

const BlogSlider = ({ handleBlogClick }) => {
  const [blogsData, setBlogsData] = useState([]);
  const sliderData = [
    {
      img: sliderImage,
      date: "February 7, 2022",
      title: "Professional Website Design Services",
      description:
        "When we create a website for you, it has a significant impact on your business. Businesses must have an online presence and a website that converts visitors, improves sales, and eventually creates more revenue. Gone are the days when having an internet presence meant having a vibrant, colorful website. Your website must evolve with the passage of time. In today's digital world, having a good, visually appealing website is critical for any company seeking to reach out to its customers. Contact us today by phone or email if you'd like to learn more about website design or if you need a custom web design quote. (Read More)",
    },
    {
      img: sliderImage,
      date: "February 7, 2020",
      title: "Professional Website Design Services",
      description:
        "When we create a website for you, it has a significant impact on your business. Businesses must have an online presence and a website that converts visitors, improves sales, and eventually creates more revenue. Gone are the days when having an internet presence meant having a vibrant, colorful website. Your website must evolve with the passage of time. In today's digital world, having a good, visually appealing website is critical for any company seeking to reach out to its customers. Contact us today by phone or email if you'd like to learn more about website design or if you need a custom web design quote. (Read More)",
    },
    {
      img: sliderImage,
      date: "February 7, 2020",
      title: "Professional Website Design Services",
      description:
        "When we create a website for you, it has a significant impact on your business. Businesses must have an online presence and a website that converts visitors, improves sales, and eventually creates more revenue. Gone are the days when having an internet presence meant having a vibrant, colorful website. Your website must evolve with the passage of time. In today's digital world, having a good, visually appealing website is critical for any company seeking to reach out to its customers. Contact us today by phone or email if you'd like to learn more about website design or if you need a custom web design quote. (Read More)",
    },
    {
      img: sliderImage,
      date: "February 7, 2020",
      title: "Professional Website Design Services",
      description:
        "When we create a website for you, it has a significant impact on your business. Businesses must have an online presence and a website that converts visitors, improves sales, and eventually creates more revenue. Gone are the days when having an internet presence meant having a vibrant, colorful website. Your website must evolve with the passage of time. In today's digital world, having a good, visually appealing website is critical for any company seeking to reach out to its customers. Contact us today by phone or email if you'd like to learn more about website design or if you need a custom web design quote. (Read More)",
    },
  ];
  const sliderProps = {
    mobile: 1,
    desktop: 1,
    tablet: 1,
    superLargeDesktop: 1,
    autoPlay: false,
    swipe: true,
  };

  useEffect(() => {
    // CDM
    fetchRecentBlogs();
  }, []);

  const fetchRecentBlogs = async () => {
    try {
      const blogs = await fetch(`http://localhost:8001/blogs?_page=1&_limit=4`);
      const blogsData = await blogs.json();
      setBlogsData(blogsData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="styled_slider_dots">
        <MultiSlider {...sliderProps}>
          {blogsData.map(({ coverPhoto, title, content, createdAt, id }) => (
            <div className={classList.slider_wrapper} key={id}>
              <div className={classList.flex_item}>
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => handleBlogClick(id)}
                  className={classList.left}>
                  <img src={coverPhoto} alt="sliderImage.png" />
                </div>
                <div className={classList.right}>
                  <Paragraph>{getFormatDate(createdAt)}</Paragraph>
                  <Header fontWeight="bold"> {title}</Header>
                  <Paragraph>{checkStringWordLength(content, 80)}</Paragraph>
                </div>
              </div>
            </div>
          ))}
        </MultiSlider>
      </div>
    </>
  );
};

export default BlogSlider;
