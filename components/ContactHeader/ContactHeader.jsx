import classList from "./ContactHeader.module.scss";
import Section from "../Section/Section";
import { FaFacebookF, FaInstagramSquare, FaTwitter } from "react-icons/fa";
import chatLogo from "../../assets/images/logo/chatLogo.svg";
import call from "../../assets/images/logo/call.png";
import message from "../../assets/images/logo/message.png";
import { openLiveChat } from "../../utils/Data/helpers";

const ContactHeader = () => {
  return (
    <div className={classList.contact_header_wrapper}>
      <Section padding={0}>
        <div className={classList.contact_header_inner}>
          <div className={classList.social}>
            <a
              target="_blank"
              href="https://www.facebook.com/The-Core-Designs-101522765780316">
              <FaFacebookF
                className={classList.social_icons}
                color="#fff"
                size={20}
              />
            </a>
            <a target="_blank" href="https://www.instagram.com/thecoredesigns/">
              <FaInstagramSquare
                className={classList.social_icons}
                color="#fff"
                size={20}
              />
            </a>
            <a target="_blank" href="https://twitter.com/TheCoreDesigns1">
              <FaTwitter
                className={classList.social_icons}
                color="#fff"
                size={20}
              />
            </a>
          </div>
          <div className={classList.contact_info}>
            <img src={message.src} alt="" />
            <a href="mailto:info@thecoredesigns.com">info@thecoredesigns.com</a>
          </div>
          <div className={classList.contact_info}>
            <img src={call.src} alt="" />
            <a href="tel:+1 (212)-343-1105">+1 (212)-343-1105</a>
          </div>
          <div className={classList.contact_info_btn}>
            <img src={chatLogo.src} alt="" />
            <a onClick={openLiveChat}>Live Chat</a>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ContactHeader;
