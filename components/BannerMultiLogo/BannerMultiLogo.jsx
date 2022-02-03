import React from "react";
import classList from "./BannerMultiLogo.module.scss";
import MultiSlider from "../MultiSlider/MultiSlider";
import topDesignLogo from "../../assets/images/logo/bannerLogo/top-design.webp";
import clutchLogo from "../../assets/images/logo/bannerLogo/clutch.webp";
import topDigitalLogo from "../../assets/images/logo/bannerLogo/top-digital-agency.webp";
import trustPilot from "../../assets/images/logo/bannerLogo/tttt.webp";
import goodFirmsLogo from "../../assets/images/logo/bannerLogo/good-firms.webp";
// grayscale
import topDesignLogoGray from "../../assets/images/logo/bannerLogo/top-design-gray.webp";
import clutchLogoGray from "../../assets/images/logo/bannerLogo/clutch_gray.webp";
import topDigitalLogoGray from "../../assets/images/logo/bannerLogo/top-digital-agency-gray.webp";
import trustPilotGray from "../../assets/images/logo/bannerLogo/tttt-gray.webp";
import goodFirmsLogoGray from "../../assets/images/logo/bannerLogo/good-firms-gray.webp";
import Section from "../Section/Section";
import { useWindowSize } from "../../utils/Data/helpers";
import  Image  from 'next/image';

const BannerMultiLogo = ({ fixBottom = false }) => {
  const dimension = useWindowSize();

  return (
    <div
      style={{ position: fixBottom ? "unset" : "absolute" }}
      className={classList.banner_slider_wrapper}>
      <Section style={{ padding: "10px 0" }}>
        <div className={classList.test}>
          <MultiSlider
            autoPlay={
              dimension === "tablet" || dimension === "mobile" ? true : false
            }
            showDots={false}>
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
          </MultiSlider>
        </div>
      </Section>
    </div>
  );
};

export default BannerMultiLogo;
