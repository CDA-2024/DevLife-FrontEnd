import { Link } from "react-router-dom";
import { Button } from "../../../shared/components/ui/button";
import GridComponent from "../../../shared/components/GridComponent/GridComponent";

const Hero = () => {
  return (
    <section className="w-full max-w-[1200px] flex items-center h-[calc(100%-60px)] mx-auto ">
      <div className="w-full flex justify-between pt-16 px-5">
        <GridComponent
          cols="grid-cols-1 md:grid-cols-2"
          gap="gap-8"
          className="min-h-[calc(100vh-60px)] items-center p-8"
        >
          <HeroLeft />
          <HeroRight />
        </GridComponent>
      </div>
    </section>
  );
};

const HeroLeft = () => {
  return (
    <div className="flex flex-col justify-between">
      <HeroInfo />
      <HeroDL />
    </div>
  );
};

const HeroInfo = () => {
  return (
    <div className="flex flex-col space-y-6 select-none">
      <h1 className="font-bold text-[65px] leading-[81px]">
        Bienvenue <br />
        Chez <br /> <span className="text-[#6841DA]">DevLife</span>
      </h1>
      <p className="font-light text-xs leading-relaxed">
        Dans ce jeu, commencez en tant que développeur freelance et progressez
        vers la gestion d’une entreprise de développement. Gérez vos projets,
        recrutez des développeurs, spécialisez votre entreprise, et faites des
        choix stratégiques pour maximiser vos profits. Surmontez des défis,
        atteignez de nouveaux niveaux et développez une entreprise florissante,
        tout en optimisant vos ressources et vos compétences.
      </p>
      <div className="flex gap-6">
        <Button variant={"secondary"} size={"lg"}>
          Get started now
        </Button>
        <Button variant={"primary"} size={"lg"}>
          Contact Us
        </Button>
      </div>
    </div>
  );
};

const HeroDL = () => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex items-center space-x-2">
        <img
          src={"src/assets/images/star.svg"}
          alt="Star"
          width={20}
          height={20}
        />
        <p className="text-xs text-[#979797] font-bold">
          PAY ONE-TIME SMALL FEE, USE LIFETIME
        </p>
      </div>
      <div className="flex gap-6">
        <Link to="/" className="cursor-pointer">
          <img
            src={"src/assets/images/googleplay-badge.svg"}
            alt="AppStore Badge"
            width={120}
            height={50}
          />
        </Link>
        <Link to="/" className="cursor-pointer">
          <img
            src={"src/assets/images/googleplay-badge.svg"}
            alt="Google Play Badge"
            width={120}
            height={50}
          />
        </Link>
      </div>
    </div>
  );
};

const HeroRight = () => {
  return (
    <img
      alt="Mockup"
      src={"src/assets/images/1.png"}
      width={450}
      height={450}
    />
  );
};

export default Hero;
