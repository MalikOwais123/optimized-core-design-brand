import React from "react";
import classList from "./ContactOption.module.scss";
import { AiOutlineMessage, AiFillPhone } from "react-icons/ai";
import { openLiveChat } from "../../utils/Data/helpers";

const ContactOption = () => {
  return (
    <>
      <div className={classList.contact_option_wrapper}>
        <div className={classList.text_us}>
          <span>
            <AiOutlineMessage /> <a href="#" onClick={openLiveChat} >Live Chat</a>
          </span>
        </div>
      </div>
      <div className={classList.contact_option_call_us}>
        <div className={classList.call_us}>
          <AiFillPhone /> <a href="tel:+1 (212)-343-1105">+1 (212)-343-1105</a>
        </div>
      </div>
    </>
  );
};

export default ContactOption;
