import { Link } from "@remix-run/react";
import clsx from "clsx";
import { forwardRef } from "react";

const FEATURES = [
  {
    title: "Swap tokens",
    description:
      "Buy, sell, and explore tokens on Ethereum, Polygon, Optimism, and more.",
    link: "Trade Tokens",
    image: "bg-[url('/assets/img/swapCard.png')]",
    target: "/swap",
  },
  {
    title: "Trade NFTs",
    description:
      "Buy and sell NFTs across marketplaces to find more listings at better prices.",
    link: "Explore NFTs",
    image: "bg-[url('/assets/img/nftCard.png')]",
    target: "/nfts",
  },
];

const SUB_FEATURES = [
  {
    title: "Buy crypto",
    description:
      "Buy crypto with your credit card or bank account at the best rates.",
    iconUrl: "/assets/img/dollarIcon.png",
    link: "Buy now",
    target:
      "https://support.uniswap.org/hc/en-us/articles/11306574799117-How-to-use-Moon-Pay-on-the-Uniswap-web-app-",
  },
  {
    title: "Earn",
    description:
      "Provide liquidity to pools on Uniswap and earn fees on swaps.",
    iconUrl: "/assets/img/earn.png",
    link: "Provide liquidity",
    target: "/pools",
  },
  {
    title: "Build dApps",
    description:
      "Build apps and tools on the largest DeFi protocol on Ethereum.",
    iconUrl: "/assets/img/build.png",
    link: "Developer docs",
    target: "https://docs.uniswap.org/",
  },
];

const Features = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <>
      {/* 2 Col Grid */}
      <div
        className="grid w-full max-w-[1440px] scroll-mt-20 grid-cols-2 gap-8 pt-6"
        ref={ref}
      >
        {FEATURES.map((feature) => (
          <Link
            key={feature.target}
            to={feature.target}
            className={clsx(
              "flex flex-col justify-between rounded-3xl border border-transparent bg-uns-blue bg-auto-hundred bg-right bg-no-repeat shadow-features shadow-uns-blue-8 transition duration-[250ms] hover:border-uns-blue-9 sm:h-[360px] xl:p-8",
              feature.image
            )}
          >
            <div className="text-[28px] font-semibold leading-[36px] tracking-wide">
              {feature.title}
            </div>
            <div className="max-w-[480px] pr-10 text-xl">
              {feature.description}
              <div className="mt-6 cursor-pointer font-medium text-uns-sky transition duration-[250ms] hover:opacity-60">
                {feature.link}
              </div>
            </div>
          </Link>
        ))}
      </div>
      {/* 3 Col Grid */}
      <div
        className="grid w-full max-w-[1440px] scroll-mt-20 grid-cols-3 gap-8 pt-6"
        ref={ref}
      >
        {/* TODO: Refactor the external target check */}
        {SUB_FEATURES.map((feature) => {
          const isExternalTarget = feature.target.startsWith("http");
          const NewLink = isExternalTarget ? "a" : Link;

          const LinkProps = isExternalTarget
            ? { href: feature.target, to: "", target: "_blank" }
            : { to: feature.target, href: "" };

          return (
            <NewLink
              key={feature.target}
              {...LinkProps}
              className="flex flex-col justify-between rounded-3xl border  border-transparent bg-uns-blue-10 shadow-features shadow-uns-blue-8 transition duration-[250ms] hover:border-uns-blue-9 xl:h-[260px] xl:p-8"
            >
              <div className="align-center flex justify-between">
                <div className="text-[28px] font-semibold leading-[36px] tracking-wide">
                  {feature.title}
                </div>
                <img
                  src={feature.iconUrl}
                  alt={feature.link}
                  className="max-h-[48px] min-h-[20px] min-w-[20px] max-w-[48px]"
                />
              </div>
              <div className="flex flex-col pr-10 text-uns-light-blue xl:max-w-[480px] xl:text-xl">
                <div className="mt-4 text-uns-light-blue">
                  {feature.description}
                </div>
                <div className="mt-6 cursor-pointer font-medium text-uns-sky transition duration-[250ms] hover:opacity-60">
                  {feature.link}
                </div>
              </div>
            </NewLink>
          );
        })}
      </div>
    </>
  );
});
Features.displayName = "Features";

export default Features;
