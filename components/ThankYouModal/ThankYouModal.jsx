import Modal from "../Modal/Modal";
import classList from "./ThankYouModal.module.scss";

const ThankYouModal = () => {
  return (
    <Modal>
      <div className={classList.wizard}>
        <div className={classList.gridWizard}>
          <div className={classList.cheel}>
            <img src={optimize.src} alt="" />
          </div>
          <div className={classList.contentWrepper}>
            <Header
              style={{ marginBottom: 30 }}
              fontWeight="semi-bold"
              fontSize={20}>
              {title}
            </Header>
          </div>
        </div>
        <div className={classList.submit_action}></div>
      </div>
    </Modal>
  );
};

export default ThankYouModal;
