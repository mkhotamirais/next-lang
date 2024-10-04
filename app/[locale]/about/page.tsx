import { unstable_setRequestLocale } from "next-intl/server";

export default function AboutPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);

  return <div>AboutPage</div>;
}
