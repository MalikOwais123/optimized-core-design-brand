import classList from "./RankLogo.module.scss";
import MultiSlider from "../MultiSlider/MultiSlider";
import Header from "../Header/Header";
import Paragraph from "../Paragraph/Paragraph";
import Section from "../Section/Section";
import Image from "next/image";

import AgencySpotter from "../../assets/images/rankLogo/AgencySpotter.webp";
import Clutch from "../../assets/images/rankLogo/Clutch.webp";
import MobileApp from "../../assets/images/rankLogo/MobileApp.webp";
import newClutch from "../../assets/images/rankLogo/newClutch.webp";
import FeaturedOnUpCIty from "../../assets/images/rankLogo/FeaturedOnUpCIty.webp";
import guarantee from "../../assets/images/rankLogo/guarantee.webp";
import clutchNew from "../../assets/images/rankLogo/clutchNew.webp";

const RankLogo = () => {
    const sliderProps = {
        mobile: 1,
        desktop: 5,
        tablet: 4,
        superLargeDesktop: 7,
        autoPlay: false,
        swipe: true,
        showDots: false,
    };

    const imagesArray = [
        { img: AgencySpotter, height: 100, width: 100 },
        { img: Clutch, height: 100, width: 100 },
        { img: MobileApp, height: 100, width: 100 },
        { img: clutchNew, height: 100, width: 100 },
        { img: FeaturedOnUpCIty, height: 100, width: 100 },
        { img: newClutch, height: 100, width: 100 },
        // { img: guarantee, height: 100, width: 100 },
    ];

    return (
        <Section>
            <div className={classList.slider}>
                <Header style={{width:"max-content", margin:"auto"}} fontWeight="bold"> Ranked among one of the world’s best UX firms </Header>
                <Paragraph style={{width:"max-content", margin:"0 auto 40px auto"}}>Delivering responsive interfaces and great user experiences across different digital platforms</Paragraph>
                <div className="styled_slider_dots">
                    <MultiSlider {...sliderProps}>
                        {imagesArray?.map(({ img, height, width }, i) => (
                            <div className={classList.slider_wrapper} key={i}>
                                <div className={classList.flex_item}>
                                    <Image objectFit="contain" height={height} width={width} src={img.src} alt="" />
                                </div>
                            </div>
                        ))}
                    </MultiSlider>
                </div>
            </div>
        </Section>
    );
};

export default RankLogo;
