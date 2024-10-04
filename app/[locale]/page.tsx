import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { unstable_setRequestLocale } from "next-intl/server";

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);

  const t = useTranslations("HomePage");

  return (
    <section className="py-16">
      <article className="text-center">
        <h1>{t("title")}</h1>
        <p>{t("description")}</p>
        <Link href="/about">
          <button type="button" className="btn btn-md btn-primary capitalize">
            {t("cta")}
          </button>
        </Link>
      </article>
    </section>
  );
}
