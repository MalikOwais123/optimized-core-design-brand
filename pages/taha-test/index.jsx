import classList from "./index.module.scss";
import MultiSlider from "../../components/MultiSlider/MultiSlider";
import Section from "../../components/Section/Section";
import Paragraph from "../../components/Paragraph/Paragraph";
import Header from "../../components/Header/Header";
import sliderImage from "../../assets/images/sliderImages/sliderImage.png"

const index = () => {
  const sliderData =[
    {
      img: sliderImage,
      date: "February 7, 2022",
      title: "Professional Website Design Services",
      description:"When we create a website for you, it has a significant impact on your business. Businesses must have an online presence and a website that converts visitors, improves sales, and eventually creates more revenue. Gone are the days when having an internet presence meant having a vibrant, colorful website. Your website must evolve with the passage of time. In today's digital world, having a good, visually appealing website is critical for any company seeking to reach out to its customers. Contact us today by phone or email if you'd like to learn more about website design or if you need a custom web design quote. (Read More)",
    },
    {
      img: sliderImage,
      date: "February 7, 2020",
      title: "Professional Website Design Services",
      description:"When we create a website for you, it has a significant impact on your business. Businesses must have an online presence and a website that converts visitors, improves sales, and eventually creates more revenue. Gone are the days when having an internet presence meant having a vibrant, colorful website. Your website must evolve with the passage of time. In today's digital world, having a good, visually appealing website is critical for any company seeking to reach out to its customers. Contact us today by phone or email if you'd like to learn more about website design or if you need a custom web design quote. (Read More)",
    }
  ]
    const sliderProps = {
        mobile: 1,
        desktop: 1,
        tablet: 1,
        superLargeDesktop: 1,
        autoPlay: true,
        swipe : true,
    };
    return (
      <>
        <div className="styled_slider_dots">
            <Section>
                <MultiSlider {...sliderProps}>
                    {sliderData.map(({img,title,description,date},index)=>(
                      <div className={classList.slider_wrapper} key={index}>
                        <div className={classList.flex_item}>
                            <div className={classList.left}>
                              <img src={img.src} alt="sliderImage.png" />
                            </div>
                            <div className={classList.right}>
                                <Paragraph>{date}</Paragraph>
                                <Header fontWeight="bold"> {title}</Header>
                                <Paragraph>{description}</Paragraph>
                            </div>
                        </div>
                    </div>
                    ))}
                                        
                </MultiSlider>
            </Section>
        </div>
        </>
    );
};

export default index;
