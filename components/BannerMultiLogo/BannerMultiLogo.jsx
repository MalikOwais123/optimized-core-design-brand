import React from "react";
import classList from "./BannerMultiLogo.module.scss";
import MultiSlider from "../MultiSlider/MultiSlider";
import topDesignLogo from "../../assets/images/logo/bannerLogo/top-design.webp";
import clutchLogo from "../../assets/images/logo/bannerLogo/clutch.webp";
import topDigitalLogo from "../../assets/images/logo/bannerLogo/top-digital-agency.webp";
import trustPilot from "../../assets/images/logo/bannerLogo/tttt.webp";
import goodFirmsLogo from "../../assets/images/logo/bannerLogo/good-firms.webp";
import BBB from "../../assets/images/logo/bannerLogo/bbb.webp";
// grayscale
import topDesignLogoGray from "../../assets/images/logo/bannerLogo/top-design-gray.webp";
import clutchLogoGray from "../../assets/images/logo/bannerLogo/clutch_gray.webp";
import topDigitalLogoGray from "../../assets/images/logo/bannerLogo/top-digital-agency-gray.webp";
import trustPilotGray from "../../assets/images/logo/bannerLogo/tttt-gray.webp";
import goodFirmsLogoGray from "../../assets/images/logo/bannerLogo/good-firms-gray.webp";
import BBBGray from "../../assets/images/logo/bannerLogo/bbb_gray.webp";
import agencySpotter from "../../assets/images/logo/bannerLogo/agencyspotter.webp";
import agencySpotterGray from "../../assets/images/logo/bannerLogo/agencyspotter_gray.webp";
import guarantee from "../../assets/images/logo/bannerLogo/guarantee.webp";
import guaranteeGray from "../../assets/images/logo/bannerLogo/guarantee_gray.webp";


import Section from "../Section/Section";
import { useWindowSize } from "../../utils/Data/helpers";
import  Image  from 'next/image';

const BannerMultiLogo = ({ fixBottom = false }) => {
  const dimension = useWindowSize();
  const sliderProps = {
    mobile: 1,
    desktop: 5,
    tablet: 4,
    superLargeDesktop: 5,
    autoPlay: true,
    swipe : true,
    showDots: false,
};

  return (
    <div
      style={{ position: fixBottom ? "unset" : "absolute" }}
      className={classList.banner_slider_wrapper}>
      <Section style={{ padding: "10px 0" }}>
        <div className={classList.test}>
          <MultiSlider {...sliderProps}>
            <div className={classList.logo_wrapper}>
              <div>
                <Image
                  objectFit="contain"
                  height={80}
                  width={80}
                  className={`${classList.first} ${classList.adjust}`}
                  src={topDesignLogo.src}
                  alt=""
                />
              </div>
              <div>
                <Image
                  objectFit="contain"
                  height={80}
                  width={80}
                  className={`${classList.second} ${classList.adjust}`}
                  src={topDesignLogoGray.src}
                  alt=""
                />
              </div>
            </div>
            <div className={classList.logo_wrapper}>
              <div>
                <Image
                  objectFit="contain"
                  height={100}
                  width={100} className={classList.first} src={clutchLogo.src} alt="" />
              </div>
              <div>
                <Image
                  objectFit="contain"
                  height={100}
                  width={100}
                  className={classList.second}
                  src={clutchLogoGray.src}
                  alt=""
                />
              </div>
            </div>
            <div className={classList.logo_wrapper}>
              <div>
                <Image
                  objectFit="contain"
                  height={100}
                  width={100}
                  className={classList.first}
                  src={topDigitalLogo.src}
                  alt=""
                />
              </div>
              <div>
                <Image
                  objectFit="contain"
                  height={100}
                  width={100}
                  className={classList.second}
                  src={topDigitalLogoGray.src}
                  alt=""
                />
              </div>
            </div>
            <div className={classList.logo_wrapper}>
              <div>
                <Image
                  objectFit="contain"
                  height={100}
                  width={100}
                  className={classList.first}
                  src={BBB.src}
                  alt=""
                />
              </div>
                <div>
                <Image
                  objectFit="contain"
                  height={100}
                  width={100}
                  className={classList.second}
                  src={BBBGray.src}
                  alt=""
                />

                </div>
            </div>
            <div className={classList.logo_wrapper}>
              <div>
               
                <Image
                  objectFit="contain"
                  height={100}
                  width={100}
                  className={classList.second}
                  src={trustPilotGray.src}
                  alt=""
                />
              </div>
              <div>
              <Image
                objectFit="contain"
                height={100}
                width={100} className={classList.first} src={trustPilot.src} alt="" />

              </div>
            </div>
            <div className={classList.logo_wrapper}>
              <div>
                <Image
                  objectFit="contain"
                  height={100}
                  width={100}
                  className={classList.first}
                  src={goodFirmsLogo.src}
                  alt=""
                />
              </div>
                <div>
                <Image
                  objectFit="contain"
                  height={100}
                  width={100}
                  className={classList.second}
                  src={goodFirmsLogoGray.src}
                  alt=""
                />

                </div>
            </div>
            
            <div className={classList.logo_wrapper}>
              <div>
                <Image
                  objectFit="contain"
                  height={80}
                  width={80}
                  className={`${classList.first} ${classList.adjust}`}
                  src={agencySpotter.src}
                  alt=""
                />
              </div>
              <div>
                <Image
                  objectFit="contain"
                  height={80}
                  width={80}
                  className={`${classList.second} ${classList.adjust}`}
                  src={agencySpotterGray.src}
                  alt=""
                />
              </div>
            </div>

            <div className={classList.logo_wrapper}>
              <div>
                <Image
                  objectFit="contain"
                  height={80}
                  width={80}
                  className={`${classList.first} ${classList.adjust}`}
                  src={guarantee.src}
                  alt=""
                />
              </div>
              <div>
                <Image
                  objectFit="contain"
                  height={80}
                  width={80}
                  className={`${classList.second} ${classList.adjust}`}
                  src={guaranteeGray.src}
                  alt=""
                />
              </div>
            </div>

          </MultiSlider>
        </div>
      </Section>
    </div>
  );
};

export default BannerMultiLogo;
