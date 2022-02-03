import classList from "./PackageList.module.scss";
import { FaCheck, FaCheckCircle } from "react-icons/fa";
import Header from "../Header/Header";
import Paragraph from "../Paragraph/Paragraph";

const PackageList = (props) => {
  const { title, services } = props;
  return (
    <div className={classList.package_list}>
      {title?.length && (
        <Header fontWeight="bold" fontSize={20}>
          {title}
        </Header>
      ) || ""}
      {
        services?.map((ser, i)=> (
          <div key={i} className={classList.list_items}>
        <FaCheck
          className={classList.check_icon}
          color="#272a3d"
          size={"15px"}
        />
        <Paragraph fontWeight="medium" > {ser}</Paragraph>
      </div>
        ))
      }
      
    </div>
  );
};

export default PackageList;
