import { Pathnames } from "next-intl/navigation";

export const locales = ["en", "de", "es"];

export const pathnames = {
  "/": "/",
  "/pathnames": {
    en: "/pathnames",
    es: "/pathnames",
    de: "/pfadnamen",
  },
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;
