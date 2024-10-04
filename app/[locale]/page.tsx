import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { unstable_setRequestLocale } from "next-intl/server";

// export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
//   const t = await getTranslations({ locale, namespace: "Metadata" });

//   return {
//     title: t("title"),
//   };
// }

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);

  const t = useTranslations("HomePage");
  return (
    <div>
      <h1>{t("title")}</h1>
      <div>
        <Link href="/about">About</Link>
      </div>
    </div>
  );
}
