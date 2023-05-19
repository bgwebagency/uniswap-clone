import type { V2_MetaFunction } from "@remix-run/node";
import Banner from "../components/Banner";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Uniswap Clone" },
    {
      property: "og:title",
      content: "Uniswap Clone",
    },
    {
      name: "description",
      content:
        "This app is a uniswap clone built with React, Remix, TailwindCSS and Fly.io",
    },
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen pb-20 pt-[72px]">
      <div
        data-testid="landing-page"
        className="flex flex-col items-center scroll-smooth"
      >
        <Banner />
        <section>Features</section>
        <section>CTA</section>
        <footer>footer</footer>
      </div>
    </div>
  );
}
