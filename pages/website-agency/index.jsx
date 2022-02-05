import { useWindowSize } from "../../utils/Data/helpers";
import landingImage1 from "../../assets/images/landingImages/agencyLanding1.webp";
import landingImage2 from "../../assets/images/landingImages/agencyLanding2.webp";
import WebsiteServices2 from "../../components/WebsiteServices2/WebsiteServices2";
import Head from "next/head";
import Script from "next/script";
import dynamic from "next/dynamic";
const WebPresenseV2 = dynamic(() =>
  import("../../components/WebPresenseV2/WebPresenseV2")
);
const ClientsLogo = dynamic(() =>
  import("../../components/ClientsLogo/ClientsLogo")
);
const Procedure = dynamic(() => import("../../components/Procedure/Procedure"));
const Packages = dynamic(() => import("../../components/Packages/Packages"));
const ComboPackage = dynamic(() =>
  import("../../components/ComboPakage/ComboPackage")
);
const ShowCaseWrapper = dynamic(() =>
  import("../../components/ShowCaseWrapper/ShowCaseWrapper")
);
const MarketingBanner = dynamic(() =>
  import("../../components/MarketingBanner/MarketingBanner")
);
const FirstLanding = dynamic(() =>
  import("../../components/FirstLanding/FirstLanding")
);
const ContactForm = dynamic(() =>
  import("../../components/ContactForm/ContactForm")
);
const CustomPakage = dynamic(() =>
  import("../../components/CustomPakage/CustomPakage")
);



const index = () => {
  const device = useWindowSize();

  const contentStyle = {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "column",
  };

  const landing1 = {
    image: landingImage1,
    reverse: true,
    heading: "Website Agency crafting beautiful brands and engaging websites",
    content: [
      `Visitors that come to your website are looking for a specific piece
    of information, a product, or a service. The first and most
    important goal, we feel, is to present that information with as few
    import {Head} from 'next/head'; barriers and distractions as
    possible. A winning website has clear messaging, calls to action,
    and then polished visuals and photography, but solid content and
    clear messages are at the core`,
    ],
    style: contentStyle,
  };

  const landing2 = {
    image: landingImage2,
    reverse: device === "mobile" || device === "tablet" ? true : false,
    heading:
      "Building cutting edge websites that encompass the latest technology.",
    content: [
      `Visitors that come to your website are looking for a specific piece
    of information, a product, or a service. The first and most
    important goal, we feel, is to present that information with as few barriers and distractions as
    import FirstLanding from '../../components/FirstLanding/FirstLanding';
possimport ShowCaseWrapper from '../../components/ShowCaseWrapper/ShowCaseWrapper';
ibleimport MarketingBanner from '../../components/MarketingBanner/MarketingBanner';
. A winning website has clear messaging, calls to action,
    and then polished visuals and photography, but solid content and
    clear messages are at the core.`,
    ],
    style: contentStyle,
  };

  return (
    <>
      <Head>
        <title>Website agency | The Core Designs</title>
        {/* <script
          defer
          src="https://www.googletagmanager.com/gtag/js?id=AW-10795784072"></script>
        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);} 
    gtag('js', new Date()); 
    gtag('config', 'AW-10795784072');
  `,
          }}
        /> */}
      </Head>
      <WebsiteServices2
        headingContent1="#1 Website Agency"
        headingContent2="A CREATIVE WEBSITE AGENCY BASED IN USA"
        paraContent="The core designs is a website agency that specializes in establishing a relationship with our clients by designing a captivating front end with insights and analytics. We construct a successful website that blends good customer experience, aesthetically pleasing design, clear 'calls to action,' and search performance using industry-leading technology and methods. With unique designs, we want to take your brand to the next level. All of this is accomplished while working closely with our experts of website agency to ensure that your bespoke website accurately reflects your brand."
      />
      <WebPresenseV2 />
      <ShowCaseWrapper />
      <ClientsLogo />
      <Procedure />
      <Packages />
      <FirstLanding
        image={landing1.image}
        reverse={landing1.reverse}
        style={landing1.contentStyle}
        heading={landing1.heading}
        content={landing1.content}
        bulletOptions={landing1.bulletOptions}
      />
      <ComboPackage />
      <MarketingBanner />
      <CustomPakage />
      <FirstLanding
        image={landing2.image}
        reverse={landing2.reverse}
        style={landing2.contentStyle}
        heading={landing2.heading}
        content={landing2.content}
        bulletOptions={landing2.bulletOptions}
      />
      <ContactForm />
    </>
  );
};

export default index;
