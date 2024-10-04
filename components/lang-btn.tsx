"use client";

import { routing, usePathname, useRouter } from "@/i18n/routing";

export default function LangBtn() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="dropdown dropdown-hover">
      <div tabIndex={0} role="button" className="btn m-1">
        Hover
      </div>
      <ul tabIndex={0} className="dropdown-content dropdown-right menu bg-base-100 rounded-box z-[1] w-max p-2 shadow">
        {routing.locales.map((locale, i) => (
          <li key={i}>
            <button
              type="button"
              onClick={() => {
                router.replace(pathname, { locale });
                router.refresh();
              }}
            >
              {locale.toUpperCase()}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
