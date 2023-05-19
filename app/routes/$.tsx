import type { LoaderArgs } from "@remix-run/node";
export async function loader() {
  return {};
}

export default function FourOhFour() {
  return <div>Not Found</div>;
}
