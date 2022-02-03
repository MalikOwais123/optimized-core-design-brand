import classList from "./index.module.scss";
import WebPresenseV2 from "../../components/WebPresenseV2/WebPresenseV2";
import ShowCase from "../../components/ShowCase/ShowCase";
import ClientsLogo from "../../components/ClientsLogo/ClientsLogo";
import Procedure from "../../components/Procedure/Procedure";
import MarketingBanner from "../../components/MarketingBanner/MarketingBanner";
import Section from "../../components/Section/Section";
import ComboPackage from "../../components/ComboPakage/ComboPackage";
import ContactForm from "../../components/ContactForm/ContactForm";
import WebsiteServics from "../../components/WebsiteServices/WebsiteServics";
import Packages from "../../components/Packages/Packages";
import CustomPakage from "../../components/CustomPakage/CustomPakage";
import UsableRow from "../../components/useAbleRow/UsableRow";
import Header from "../../components/Header/Header";
import Paragraph from "../../components/Paragraph/Paragraph";
import { useWindowSize } from "../../utils/Data/helpers";
import landing1 from "../../assets/images/landingImages/developmentLanding1.webp";
import landing2 from "../../assets/images/landingImages/developmentLanding2.webp";
import NavLink from "../../components/Navlinks/Navlinks";

const index = () => {
  const device = useWindowSize();
  const contentStyle = {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "column",
  };

  return (
    <>
      <WebsiteServics customClass={classList.mainServices} />
      <WebPresenseV2 />
      <ShowCase backgroundColor="#272A3D" />
      <ClientsLogo />
      <Procedure />
      <Packages />
      <Section>
        <UsableRow image={landing1} reverse={true} style={contentStyle}>
          <Header fontWeight="bold">
            Bespoke Website Development Services in your range now
          </Header>
          <Paragraph style={{ marginBottom: "25px" }}>
            We use a wide variety of new techniques to develop easy-to-use and
            manageable websites, web portals, and applications. We have a
            specialised team of web developers ready to work with you to create
            an interesting and functioning website for your company. We create
            websites on the most up-to-date open source platforms, ensuring that
            your company is secure and technologically advanced.
          </Paragraph>
        </UsableRow>
      </Section>
      <div className={classList.combo_wrapper}>
        <Section>
          <ComboPackage />
        </Section>
      </div>
      <MarketingBanner />
      <CustomPakage />
      <Section>
        <UsableRow
          image={landing2}
          reverse={device === "mobile" || device === "tablet" ? true : false}
          style={contentStyle}>
          <Header fontWeight="bold">
            Why Choose Us For Your Web Development Project?
          </Header>
          <Paragraph>
            Your website brings people closer to you, and as a web development
            firm, we'll help you customise their experience by utilising the
            capabilities of our in-house professionals. We've created thousands
            of websites with a variety of tools. From simple content management
            systems (CMS) for straightforward websites to custom-built apps and
            web portals.
          </Paragraph>
        </UsableRow>
      </Section>
      <ContactForm />
    </>
  );
};

export default index;
