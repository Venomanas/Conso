import React from "react";
import WrapButton from "../ui/wrap-button";
import { Globe } from "lucide-react";

const HeroContent = () => {
  return (
    <div className="h-full flex flex-col items-center py-20">
      <h3 className="text-4xl not-dark:text-black/80 font-bold">
        Components crafted for
      </h3>
      <h1 className="text-[5.4rem] font-bold not-dark:text-black/80">
        Modern Websites
      </h1>
      <WrapButton href="#" className="mt-10">
        <Globe className="animate-spin transition " />
        Start here 👉
      </WrapButton>
    </div>
  );
};

export default HeroContent;
