import Modal from "../Modal/Modal";
import classList from "./ThankYouModal.module.scss";
import optimize from "../../assets/images/sample/optimize.png";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import backButton from "../../assets/images/icons/backButton.png";


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
            <Header fontWeight="semi-bold" fontSize={20}>
              test Title
            </Header>
            <div className={classList.inputs}>
            Thank you for your Information, 
            Our Sr. Design Consultant, will Contact you Shortly.
            Incase you with to contact him Directly Please Call this Number. (212) 343-9069 or
            Email us at Info@thecoredesigns.com
            </div>
          </div>
        </div>
        <div className={classList.offerimg}>
          {/* <img src={discount.src} alt="" /> */}
        </div>
        <div className={classList.submit_action}>
          {/* <div className={classList.bacButton}>
            {steps === 1 ? (
              ""
            ) : (
              <img src={backButton.src} alt="" onClick={prevStep} />
            )}
          </div> */}
          <Button
            // hover={validate}
            // backgroundColor={!validate && "gray"}
            // disabled={!validate}
            onClick={onHide}
            >
           Dismiss
          </Button>
        </div>
      </div>
      </div>
    </Modal>
  );
};

export default ThankYouModal;
