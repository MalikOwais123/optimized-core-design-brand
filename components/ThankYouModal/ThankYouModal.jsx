import Modal from "../Modal/Modal";
import classList from "./ThankYouModal.module.scss";
import optimize from "../../assets/images/sample/optimize.png";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import thankYou from "../../assets/images/sample/thankYou.png";


const ThankYouModal = ({show,steps,prevStep,onHide}) => {
  return (

    <Modal modal={show} setModal={onHide}>
    <div className={classList.wizard_form_wrapper}>
        <span className={classList.close} onClick={onHide}>
          X
        </span>
        
      <div className={classList.wizard}>
        <div className={classList.gridWizard}>
          <div className={classList.cheel}>
            <img src={optimize.src} alt="" />
          </div>
          <div className={classList.contentWrepper}>
            <img src={thankYou.src} alt="img" />
            <div className={classList.inputs}>
            Thank you for your Information, <b />
            Our Sr. Design Consultant, will Contact you Shortly. <br />
            Incase you with to contact him Directly Please Call this <br /> <span className={classList.phoneNumber}> Number: <a href="tel:+1 (212)-343-1105">+1 (212)-343-1105</a> or </span>
            <span className={classList.phoneNumber}>Email us at:  <a href="mailto:info@thecoredesigns.com">info@thecoredesigns.com</a> </span>
            You can always Discuss your project <br />Directly with on Chat
            </div>
          </div>
        </div>
        <div className={classList.offerimg}>
        </div>
        {/* <div className={classList.submit_action}> 
          <Button
            hover={validate}
            backgroundColor={!validate && "gray"}
            disabled={!validate}
            onClick={onHide}
            >
           Dismiss
          </Button>
        </div> */}
      </div>
      </div>
    </Modal>
  );
};

export default ThankYouModal;
