import type { V2_MetaFunction } from "@remix-run/node";

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
  return <div></div>;
}
