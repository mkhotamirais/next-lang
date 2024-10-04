import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export default function AboutPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);

  const t = useTranslations("AboutPage");

  return (
    <section className="py-4">
      <div className="border rounded-xl p-4">
        <h1>{t("title")}</h1>
      </div>
    </section>
  );
}
