import { SPIRIT_IMAGES } from "@/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

export const Footer = () => {
  const t = useTranslations("Footer");
  return (
    <div
      style={{
        background:
          "linear-gradient(90deg, #966 13.61%, #C29091 59.2%, #AB7471 90.37%)",
      }}
    >
      <div className="min-h-[300px] flex flex-col justify-between ">
        <div
          style={{
            backgroundImage: `url('${SPIRIT_IMAGES.handFooter}')`,
          }}
          className="min-h-[300px] w-full  bg-no-repeat bg-right-top sm:bg-left "
        >
          <div
            className="container lg:min-h-[300px] mx-auto px-6 flex flex-col lg:flex-row-reverse
           gap-9 lg:gap-20 items-center pt-4"
          >
            <Image
              alt={t("getIn")}
              src={SPIRIT_IMAGES.logo.whiteLogo}
              height={124}
              width={213}
            />
            <div className="flex flex-wrap items-center gap-4">
              <p className="text-white text-xl font-black">{t("getIn")}</p>
              <div>
                <FacebookIcon
                  sx={{ height: "31px", width: "31px", color: "white" }}
                />
                <InstagramIcon
                  sx={{ height: "31px", width: "31px", color: "white" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            background:
              "linear-gradient(270deg, rgba(146, 95, 95, 0.00) 2.46%, #925F5F 48.36%, rgba(146, 95, 95, 0.00) 92.46%)",
          }}
          className="text-center py-3 text-white"
        >
          <p className="text-base font-bold ">{t("designBy")}</p>
        </div>
      </div>
    </div>
  );
};
