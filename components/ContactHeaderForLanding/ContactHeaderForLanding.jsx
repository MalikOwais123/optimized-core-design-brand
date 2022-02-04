import classList from "./ContactHeaderForLanding.module.scss";
import Section from "../Section/Section";
import { FaFacebookF, FaInstagramSquare, FaTwitter } from "react-icons/fa";
import chatLogo from "../../assets/images/logo/chatLogo.svg";
import call from "../../assets/images/logo/call.png";
import message from "../../assets/images/logo/message.png";
import { openLiveChat } from "../../utils/Data/helpers";
import logo from "../../assets/images/logo.svg";
import NavLink from "./../Navlinks/Navlinks";
import Image from "next/image"

const ContactHeaderForLanding = () => {
  return (
    <div className={classList.contact_header_wrapper}>
      <Section padding={0}>
        <div className={classList.contact_header_inner}>
          <div className={classList.social}>
            <NavLink href="/" exact>
              <Image
                src={logo.src}
                // style={{ objectFit: "fill", cursor: "pointer" }}
                width={150}
                height={40}
              />
            </NavLink>
          </div>
          <div className={classList.contact_info}>
            <Image src={message.src} width={20} height={14} />
            <a href="mailto:Info@thecoredesigns.com">info@thecoredesigns.com</a>
          </div>
          <div className={classList.contact_info}>
            <Image src={call.src} alt="" width={15} height={15} />
            <a href="tel:+1 (212)-343-1105">+1 (212)-343-1105</a>
          </div>
          <div className={classList.contact_info_btn}>
            <Image src={chatLogo.src} alt="" width={28} height={28}  />
            <a onClick={openLiveChat}>Live Chat</a>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ContactHeaderForLanding;
