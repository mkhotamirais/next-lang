"use client";

import { routing, usePathname, useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";

export default function LangBtn() {
  const router = useRouter();
  const pathname = usePathname();
  const localeActive = useLocale();

  return (
    <div className="dropdown dropdown-hover dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-sm">
        {localeActive.toUpperCase()}
      </div>
      <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-max shadow">
        {routing.locales.map((locale, i) => (
          <li key={i}>
            <button
              type="button"
              onClick={() => {
                router.replace(pathname, { locale });
                router.refresh();
              }}
              className="flex justify-center"
            >
              {locale.toUpperCase()}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
