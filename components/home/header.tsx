"use client";

import React from "react";
import LangBtn from "../lang-btn";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function Header() {
  const t = useTranslations("Nav");
  const menu = t("menu").split("|");
  const menuHref = t("href").split("|");

  return (
    <header className="">
      <div className="container">
        <div className="flex justify-between h-16 items-center">
          <div>
            <Logo />
          </div>
          <nav>
            <div className="flex">
              {menu.map((item, i) => (
                <Link key={i} href={menuHref[i]} className="px-2 text-sm capitalize hover:text-primary">
                  {item}
                </Link>
              ))}
            </div>
          </nav>
          <LangBtn />
        </div>
      </div>
    </header>
  );
}

export const Logo = () => {
  return (
    <Link href="/" className="font-semibold">
      NEXT<span className="text-primary">LANG</span>
    </Link>
  );
};
