import React from "react";
import classList from "./ComboPricingPlanCard.module.scss";
import phone from "../../assets/images/icons/phone.svg";
import chat from "../../assets/images/icons/chat.svg";
import Paragraph from "../Paragraph/Paragraph";
import Header from "../Header/Header";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import ContactFormModal from "../ContactFormModal/ContactFormModal";
import eliteCard from "../../assets/images/icons/bestsaller.png";
import { openLiveChat } from "../../utils/Data/helpers";
import dynamic from "next/dynamic";

const GetAQuotModal = dynamic(() => import("../GetAQuotModal/GetAQuotModal"));

const ComboPricingPlanCard = ({
  children,
  title,
  backgroundColor = "white",
  type = "simple",
  netAmount,
  discountPrice,
}) => {
  const [modal, setModal] = React.useState(false);
  var [showQuotModal, setShowQuoteModal] = React.useState(false);

  const discountPriceStyle = {
    marginBottom: "6px",
    marginLeft: "6px",
    textDecorationLine: "line-through",
    textDecorationColor: "#B72A12",
  };

  return (
    <>
      <div
        className={`${classList.pricingCard} ${backgroundColor} ${
          type === "simple" ? classList.simple : classList.elite
        }`}>
        {type === "elite" && (
          <img className={classList.elite_image} src={eliteCard.src} alt="" />
        )}
        <div className={classList.wrapperTitle}>
          <Header
            color="white"
            fontWeight="bold"
            fontSize={16}
            style={{
              margin: "0px",
              background: "#E52525",
              padding: "4px 20px",
              borderRadius: "10px",
              letterSpacing: "3px",
              width: "100%",
            }}>
            {title}
          </Header>
          {/* <h1 className={classList.title}></h1> */}
        </div>
        <div className={classList.wrapperAmount}>
          <Header fontWeight="bold" className={classList.dollar}>
            $
          </Header>
          <Header
            fontSize={50}
            fontWeight="bold"
            style={{ marginBottom: "6px" }}>
            {netAmount}
          </Header>
          <Header
            fontSize={22}
            fontWeight="bold"
            color="#B72A12"
            style={discountPriceStyle}>
            ${discountPrice}
          </Header>
        </div>
        <div className={classList.borders}>
          <div className={classList.list}>{children}</div>
        </div>
        {type === "simple" ? (
          <>
            <div className={classList.description}>
              <Button
                hoverLight={true}
                backgroundColor="#1d2228"
                style={{
                  border: "solid 1px #272a3d",
                  borderRadius: "30px",
                }}
                color="white"
                // onClick={openLiveChat}
                onClick={() => setShowQuoteModal(true)}
                hover={true}
                >
                {/* Live Chat */}
                Get a quote
              </Button>
              <Button
                backgroundColor="#E52525"
                color="white"
                hover={true}
                style={{
                  borderRadius: "30px",
                }}
                onClick={() => setModal(true)}>
                Order now
              </Button>
            </div>
          </>
        ) : (
          <>
            <div className={classList.description}>
              <Button
                style={{ border: "solid 1px #fff", borderRadius: "30px" }}
                color="#000"
                // onClick={() => setModal(true)}
                onClick={() => setShowQuoteModal(true)}
                hover={true}
                >
                {/* Live Chat */}
                Get a quote
              </Button>
              <Button
                style={{ border: "solid 1px #fff", borderRadius: "30px" }}
                color="#000"
                onClick={() => setModal(true)}>
                Order now
              </Button>
            </div>
          </>
        )}
        <Modal modal={modal} setModal={setModal}>
          <ContactFormModal />
        </Modal>
        <GetAQuotModal
        show={showQuotModal}
        onHide={() => setShowQuoteModal(false)}
      />
      </div>
    </>
  );
};

export default ComboPricingPlanCard;
