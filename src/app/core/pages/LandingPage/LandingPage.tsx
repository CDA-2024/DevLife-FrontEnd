// LandingPage.tsx
import BackgroundImage from "./backgroundImage";
import { Navbar } from "../../layout/LandingPage/navbar";
import Hero from "./hero";
const LandingPage: React.FC = () => {
  return (
    <>
      <BackgroundImage>
        <Navbar />
        <Hero />
      </BackgroundImage>
    </>
  );
};

export default LandingPage;
