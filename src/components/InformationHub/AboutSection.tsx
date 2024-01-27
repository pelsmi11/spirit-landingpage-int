import { SPIRIT_IMAGES } from "@/utils";
import { useTranslations } from "next-intl";
import React from "react";

export const AboutSection = () => {
  const t = useTranslations("About");
  return (
    <section className=" min-h-[653px] bg-ui-gray-300">
      <div className="container mx-auto py-20 px-6">
        <div
          style={{
            backgroundImage: `url('${SPIRIT_IMAGES.aboutUs}')`,
          }}
          className="min-h-[500px] lg:min-h-[653px]  bg-no-repeat bg-right-bottom 
          lg:bg-right bg-contain flex lg:items-center "
        >
          <div className="lg:w-4/6 flex flex-col gap-5">
            <p className="text-ui-black text-4xl lg:text-6xl font-extrabold">
              {t("title")}
            </p>
            <p className="text-ui-black lg:text-2xl lg:w-3/6">{t("body")}</p>
            <div
              className="w-48 h-12 px-8 py-3.5 bg-ui-primary rounded-3xl justify-center 
        items-center gap-2.5 inline-flex"
            >
              <div className="text-white text-lg lg:text-2xl font-bold font-['Nexa Bold']">
                {t("button")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
