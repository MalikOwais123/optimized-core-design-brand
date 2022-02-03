import Button from "../Button/Button";
import FormV2 from "../FormV2/FormV2";
import Header from "../Header/Header";
import Paragraph from "../Paragraph/Paragraph";
import Section from "../Section/Section";
import UsableRow from "../useAbleRow/UsableRow";
import classList from "./WebsiteServices2.module.scss";
import bg from "../../assets/images/sample/bg.svg";
import Logos from "../Logos/Logos";
import logo from "../../assets/images/logo/logo1.svg";
import BannerMultiLogo from "../BannerMultiLogo/BannerMultiLogo";
import { useState } from 'react';
import Wizard from '../Wizard/Wizard';
import { useEffect } from 'react';


const WebsiteServices2 = ({
  customClass,
  headingContent1 = "#1 Website Development",
  headingContent2 = "DESIGNER AT YOUR SERVICE:",
  paraContent = "From enticing consumers to buy your goods or call your team, your business website plays a vital role in generating revenue. Our website designers understand the importance of your website, which is why we offer you our award-winning web designer services focus on creating unique sites that are user-friendly, boost conversions, and follow best SEO practices. Our website Designer can handle all aspects of website design, redesign, custom development, theme installation, updates, migration, support, maintenance, and even manage cloud hosting options. of sectors.",
}) => {



  const [wizard, setWizard] = useState(false)
  // useEffect(() => {
  //   setTimeout(() => {
  //     // TODO: add a condition to check if the user is logged in
  //     setWizard(true)
  //   }, 200);
  // },[])
  return (
    <>
      <div className={`${classList.mainBanner} ${customClass}`}>
        <Section extraClass={classList.sectionClass}>
          <div className={classList.IAmHome}>
            <div className={classList.content}>
              {/* <img src={logo.src} alt="" className={classList.logo} /> */}
              <Header
                color="white"
                fontWeight={"bold"}>
                {headingContent1}
              </Header>
              <Header
                style={{ marginTop: "20px", textTransform: "uppercase" }}
                color="white"
                fontWeight={"bold"}
                className={classList.borderHeading}>
                {headingContent2}
              </Header>
              <Paragraph color="white">
                {paraContent}
              </Paragraph>
              <Button
                onClick={() => setWizard(true)}
                color="black"
                style={{ background: "white", marginTop: "30px" }}>
                Get Started
              </Button>
            </div>
            <div className={classList.formPanel}>
              <div className={classList.formBackColor}>
                <FormV2
                  description={""}
                  heading={"Get In Touch"}
                  buttonText={"Send Message"}
                  className={classList.formHeading}
                />
                <Paragraph color="white" className={classList.OfferTime}>
                  Limited Time Offer
                </Paragraph>
              </div>
            </div>
          </div>
        </Section>
        <BannerMultiLogo fixBottom={true} />
      </div>
      <Wizard show={wizard} onHide={() => setWizard(false)} />
    </>
  );
};

export default WebsiteServices2;
