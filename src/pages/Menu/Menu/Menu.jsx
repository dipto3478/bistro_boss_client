import { Helmet } from "react-helmet-async";
import Cover from "../../../Shared/Cover";
import menuImg from "../../../assets/menu/menu-bg.jpg";
import SectionTitle from "../../../Shared/SectionTitle";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Our Menu || bistro Boss</title>
      </Helmet>
      <Cover img={menuImg} title="our menu"></Cover>

      <SectionTitle
        subHeading="Don't Miss"
        heading="Today's Offer"
      ></SectionTitle>
    </div>
  );
};

export default Menu;
