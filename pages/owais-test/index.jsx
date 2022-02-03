import React from "react";
import CustomPakage from "../../components/CustomPakage/CustomPakage";
import AnimatedButton from "../../components/AnimatedButton/AnimatedButton";
import BulletList from "../../components/BulletList/BulletList";
import GifsBanner from "../../components/GifsBanner/GifsBanner";
import classList from "./index.module.scss";
import Section from "../../components/Section/Section";
import StepsGifsBanners from "../../components/StepsGifsBanners/StepsGifsBanners";
import SimpleGif from "../../components/SimpleGif/SimpleGif";
import CustomerFeedBackGifsBanner from "../../components/CustomerFeedBackGifsBanner/CustomerFeedBackGifsBanner";
import UseInput from "../../components/UseInput/UseInput";
import UseForm from "../../components/UseForm/UseForm";
import Button from "../../components/Button/Button";

const index = () => {
  return (
    <>
      {/* <Section>
        <StepsGifsBanners />
      </Section>
      <Section>
        <CustomerFeedBackGifsBanner />
      </Section> */}
      <Section>
        <UseInput
          getFieldValue={(e) => {
            console.log(e);
          }}
          placeholder="Enter Your Link"
        />
      </Section>

      {/* FORM ELEMENT */}
      <Section>
        <UseForm
          useFinish={(e) => {
            console.log("I AM IN FORM", e);
          }}>
          <UseInput error={true} placeholder="Enter Your Email" name="email" />
          <UseInput placeholder="Enter Your Name" name="name" />
          <UseInput placeholder="Enter Your Phone" name="phone" />
          <UseInput placeholder="Enter Your Link" name="link" />
          <Button>Submit</Button>
        </UseForm>
      </Section>
    </>
  );
};

export default index;
