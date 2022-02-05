import dynamic from 'next/dynamic'
import Navbar from "../components/Navbar/Navbar";
import "../styles/globals.scss";
import Script from "next/script";
import { useRouter } from "next/router";
import ContactHeader from "../components/ContactHeader/ContactHeader";
import ContactWithUs from "../components/ContactWithUs/ContactWithUs";

import ContactHeaderForLanding from "../components/ContactHeaderForLanding/ContactHeaderForLanding";

import { openLiveChat } from "../utils/Data/helpers";
import { useEffect } from "react";

const Footer = dynamic(() => import('../components/Footer/Footer'))
const Copyright = dynamic(() => import('../components/Copyright/Copyright'))
const CopyrightForLanding = dynamic(() => import('../components/CopyrightForLanding/CopyrightForLanding'))

const isLandingPage = (pathname) => {
  const urls = [
    "website-agency",
    "website-developer",
    "website-development",
    "website-designer",
    "website-design",
    "website-maker",
    "website-creator",
    "website-service",
    "website-builders",
  ];

  return urls.some((url) => pathname.includes(url));
};

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();
  useEffect(()=>{
    window.zESettings ={
      "event": "chat_message",
      "condition": [
        "and",
        [
          "eq",
          "@visitor_source_type",
          "sunco_web"
        ],
        [
          "and",
          [
            "eq",
            "@visitor_served",
            false
          ],
          [
            "gt",
            "@visitor_previous_chats",
            0
          ],
          [
            "eq",
            "@visitor_requesting_chat",
            false
          ]
        ]
      ],
      "actions": [
        [
          "sendMessageToVisitor",
          "Sales Support",
          "How May I help you?"
        ]
      ]
    }
    
    
  },[])
  return (
    <div style={{position:"relative"}}>
      <ContactWithUs />
      {isLandingPage(pathname) ? <ContactHeaderForLanding /> : <ContactHeader />}
      {!isLandingPage(pathname) && <Navbar />}
      <div
        style={{
          paddingTop: isLandingPage(pathname) ? "40px" : "110px",
        }}>
        <Component {...pageProps} />
      </div>
      {/* <Script
        strategy="afterInteractive"
        id="ze-snippet"
        src="https://static.zdassets.com/ekr/snippet.js?key=026cd8b7-0c2c-42c5-a8ef-6bd02caf68fb"
        // onLoad={openLiveChat}
      />
      <Script
        id="google-analytics"
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=G-391VCNVG9G"
        onLoad={() => {
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-391VCNVG9G');
        }}
      />
   
      <Script strategy="afterInteractive" src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js" />
      <Script strategy="afterInteractive" src="https://tools.luckyorange.com/core/lo.js?site-id=c08d05c9"/>
      <Script strategy="afterInteractive" src="https://www.clickcease.com/monitor/stat.js"/>
 */}

      {isLandingPage(pathname) ? null : <Footer />}

      {isLandingPage(pathname) ? <CopyrightForLanding /> : <Copyright />}
    </div>
  );
}

export default MyApp;
