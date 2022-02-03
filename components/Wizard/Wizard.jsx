import React, { useState } from "react";
import classList from "./Wizard.module.scss";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import Header from "../Header/Header";
import { post } from "../../utils/Data/helpers";
import ShowMessage from "../ShowMessage/ShowMessage";

const DetailForm = ({ submit, prevStep, title }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const validate = Boolean(name) && Boolean(email) && Boolean(phone);
  console.log(validate, "checking logicc");
  return (
    <>
      <div className={classList.details}>
        <Header
          style={{ marginBottom: 30 }}
          fontWeight="semi-bold"
          fontSize={20}>
          {title}
        </Header>
   
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
            type="text"
            placeholder="Enter Name"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            type="email"
            placeholder="Enter Email"
          />
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            name="phone"
            type="text"
            placeholder="Phone Number"
          />
          <div className={classList.submit_action}>
          <Button
            onClick={prevStep}
            hoverLight={true}
            color="#000"
            backgroundColor="#fff"
            style={{ border: "solid 1px #000000" }}>
            Back
          </Button>
          <Button
            hover={validate}
            backgroundColor={!validate && "gray"}
            disabled={!validate}
            onClick={() => submit({ fullName: name, email, phone })}>
            Submit
          </Button>
          </div>
        
      </div>
    </>
  );
};

const WizardFrom = ({
  data,
  steps,
  nextStep,
  prevStep,
  title = "",
  onHide,
  submit,
}) => {
  const [val, setVal] = useState(data.value);
  const nextSetter = () => {
    data.setter(val);
    nextStep();
  };

  return (
    <>
      <div className={classList.wizard}>
        <div>
          <Header
            style={{ marginBottom: 30 }}
            fontWeight="semi-bold"
            fontSize={20}>
            {title}
          </Header>
          {data.fields.map((v, i) => (
            <label className={classList.container}>
              {v.type}
              <input
                onChange={(e) => setVal(e.target.value)}
                value={v.value}
                type="radio"
                name={data.type}
              />
              <span className={classList.checkmark}></span>
            </label>
          ))}
        </div>
        <div className={classList.submit_action}>
          <Button
            onClick={steps === 1 ? onHide : prevStep}
            hoverLight={true}
            color="#000"
            backgroundColor="#fff"
            style={{ border: "solid 1px #000000" }}>
            {steps === 1 ? "Cancel" : "Back"}
          </Button>
          <Button
            disabled={!Boolean(val)}
            onClick={nextSetter}
            type="button"
            hover={Boolean(val)}
            backgroundColor={!Boolean(val) && "gray"}>
            Next
          </Button>
        </div>
      </div>
    </>
  );
};

const Wizard = (props) => {
  const { show, onHide } = props;
  const [steps, setSteps] = useState(1);
  const [business, setBusiness] = useState(null);
  const [industry, setIndustry] = useState(null);
  const [budget, setBudget] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const nextStep = () => {
    setSteps((steps) => steps + 1);
  };
  const prevStep = () => {
    setSteps((steps) => steps - 1);
  };
  const submit = async (details) => {
    try {
      const data = {
        businessType: business,
        operationType: industry,
        budget,
        ...details,
      };
      // console.log(data);
      // console.log("data", data);
      const res = await post("/wizard", data);
      if (res.status) {
        setIsSubmitted(true);
      }
      setTimeout(() => {
        onHide();
      }, 1000);
      // console.log("res", res);
    } catch (error) {
      console.log(error);
      setIsSubmitted(false);
      setTimeout(() => {
        onHide();
      }, 1000);
    }
  };

  const data = [
    {
      type: "business",
      title: "What type of business is this for",
      setter: setBusiness,
      value: business,
      fields: [
        {
          type: "personal project",
          value: "personal project",
        },
        {
          type: "my project",
          value: "my project",
        },
        {
          type: "your project",
          value: "your project",
        },
      ],
    },
    {
      type: "industry",
      title: "What industry do you operate for",
      setter: setIndustry,
      value: industry,
      fields: [
        {
          type: "personal industry",
          value: "personal industry",
        },
        {
          type: "my industry",
          value: "my industry",
        },
        {
          type: "your industry",
          value: "your industry",
        },
      ],
    },
    {
      type: "budget",
      title: "What s your estimated budget or this project",
      setter: setBudget,
      value: budget,
      fields: [
        {
          type: "personal budget",
          value: "personal budget",
        },
        {
          type: "my budget",
          value: "my budget",
        },
        {
          type: "your budget",
          value: "your budget",
        },
      ],
    },
  ];
  return (
    <Modal modal={show} setModal={onHide}>
      <div className={classList.wizard_form_wrapper}>
        {steps === 1 && (
          <WizardFrom
            title="What type of business is this for?"
            steps={steps}
            data={data[0]}
            prevStep={prevStep}
            nextStep={nextStep}
            onHide={onHide}
          />
        )}
        {steps === 2 && (
          <WizardFrom
            title="What industry do you operate in?"
            steps={steps}
            data={data[1]}
            prevStep={prevStep}
            nextStep={nextStep}
            onHide={onHide}
          />
        )}
        {isSubmitted && (
          <ShowMessage
            modal={isSubmitted}
            setModal={setIsSubmitted}
            infoType="success">
            Successfully submitted
          </ShowMessage>
        )}
        {steps === 3 && (
          <WizardFrom
            title="What is your estimated budget for this project?"
            steps={steps}
            data={data[2]}
            prevStep={prevStep}
            nextStep={nextStep}
            onHide={onHide}
            submit={submit}
          />
        )}
        {steps === 4 && (
          <DetailForm
            title="Enter Your Details"
            prevStep={prevStep}
            submit={submit}
          />
        )}
      </div>
    </Modal>
  );
};

export default Wizard;
