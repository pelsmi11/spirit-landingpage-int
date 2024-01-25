import { useTranslations } from "next-intl";
import LocaleSwitcher from "./LocaleSwitcher";
import NavigationLink from "./NavigationLink";
import Image from "next/image";
import { SPIRIT_IMAGES } from "@/utils";

export default function Navigation() {
  const t = useTranslations("Navbar");

  return (
    <div className="bg-slate-850">
      <div className="bg-ui-primary-light text-center py-2">
        <p className="text-white text-base font-black">{t("order")}</p>
      </div>
      <nav className="container mx-auto flex justify-between p-2 text-white items-center">
        <div>
          <NavigationLink href="/">
            <Image
              src={SPIRIT_IMAGES.logo.mainLogo}
              alt={t("alt")}
              height={68}
              width={116}
            />
          </NavigationLink>
        </div>
        <LocaleSwitcher />
      </nav>
    </div>
  );
}
