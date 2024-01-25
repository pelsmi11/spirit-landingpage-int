import { SPIRIT_IMAGES } from "@/utils";
import { useTranslations } from "next-intl";
import React from "react";

export const HeroSection = () => {
  const t = useTranslations("Hero");
  return (
    <section
      style={{
        backgroundImage: `url('${SPIRIT_IMAGES.hero}')`,
      }}
      className="min-h-[430px] lg:min-h-[653px] bg-center bg-no-repeat bg-contain lg:bg-cover"
    >
      <div className="container mx-auto py-16 px-6 flex flex-col items-center">
        <div className="max-w-[690px]">
          <p className="text-center text-ui-black text-4xl lg:text-6xl font-extrabold">
            {t("transform")}
          </p>
          <p
            className="text-center text-ui-primary text-9xl lg:text-[260px] font-normal 
          font-['Sidney']"
          >
            spirit
          </p>
        </div>
        <div
          className="w-48 h-12 px-8 py-3.5 bg-ui-primary rounded-3xl justify-center 
        items-center gap-2.5 inline-flex"
        >
          <div className="text-white text-2xl font-bold font-['Nexa Bold']">
            {t("button")}
          </div>
        </div>
      </div>
    </section>
  );
};
