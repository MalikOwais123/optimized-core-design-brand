import classList from "./blogSlider.module.scss";
import MultiSlider from "../MultiSlider/MultiSlider";
import Paragraph from "../Paragraph/Paragraph";
import Header from "../Header/Header";
import { checkStringWordLength, getFormatDate } from "../../utils/Data/helpers";

const BlogSlider = ({ blogsData, handleBlogClick }) => {
  const sliderProps = {
    mobile: 1,
    desktop: 1,
    tablet: 1,
    superLargeDesktop: 1,
    autoPlay: true,
    swipe: true,
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
