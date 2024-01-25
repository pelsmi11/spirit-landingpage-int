import { useTranslations } from "next-intl";
import Head from "next/head";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  title: ReactNode;
};

export default function PageLayout({ children, title }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div>{children}</div>
    </>
  );
}
