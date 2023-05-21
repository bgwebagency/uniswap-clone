import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

const NETWORKS = [
  {
    name: "Ethereum",
    imgUrl: "/assets/img/eth.png",
    network: "ethereum",
  },
  {
    name: "Polygon",
    imgUrl: "/assets/img/polygon.svg",
    network: "polygon",
  },
  {
    name: "Optimism",
    imgUrl: "/assets/img/optimism.svg",
    network: "optimism",
  },
  {
    name: "Arbitrum",
    imgUrl: "/assets/img/arbitrum.svg",
    network: "arbitrum",
  },
  {
    name: "Celo",
    imgUrl: "/assets/img/celo.svg",
    network: "celo",
  },
  {
    name: "BNB Chain",
    imgUrl: "/assets/img/bnbchain.svg",
    network: "bnbchain",
  },
] as Networks;

type Networks = {
  name: string;
  imgUrl: string;
  network: NetworkDropdownProps["selectedNetwork"];
}[];

export type selectedNetwork =
  | "ethereum"
  | "polygon"
  | "optimism"
  | "arbitrum"
  | "celo"
  | "bnbchain";

interface NetworkDropdownProps {
  selectedNetwork: selectedNetwork;
  onClick: (network: NetworkDropdownProps["selectedNetwork"]) => void;
}

export default function NetworkDropdown({
  selectedNetwork,
  onClick,
}: NetworkDropdownProps) {
  return (
    <div className="mt-1 sm:mt-0">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className=" flex h-10 w-10 items-center justify-center rounded-xl text-uns-light-blue transition duration-[250ms] hover:bg-uns-blue-gray">
            <svg
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              width="24"
              height="24"
            >
              <path
                d="M10 10.8334C10.4603 10.8334 10.8334 10.4603 10.8334 10C10.8334 9.53978 10.4603 9.16669 10 9.16669C9.5398 9.16669 9.16671 9.53978 9.16671 10C9.16671 10.4603 9.5398 10.8334 10 10.8334Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M15.8334 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10C16.6667 9.53978 16.2936 9.16669 15.8334 9.16669C15.3731 9.16669 15 9.53978 15 10C15 10.4603 15.3731 10.8334 15.8334 10.8334Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M4.16671 10.8334C4.62694 10.8334 5.00004 10.4603 5.00004 10C5.00004 9.53978 4.62694 9.16669 4.16671 9.16669C3.70647 9.16669 3.33337 9.53978 3.33337 10C3.33337 10.4603 3.70647 10.8334 4.16671 10.8334Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 w-60 origin-top-right justify-between rounded-xl border border-uns-blue-11 bg-uns-blue-10 py-2 shadow-dropdown focus:outline-none sm:bottom-auto sm:top-14">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1 px-2">
                {NETWORKS.map((network) => (
                  <Menu.Item key={network.network}>
                    <button
                      className="grid w-full grid-cols-[min-content_1fr_min-content] items-center whitespace-nowrap rounded-xl p-2 text-left tracking-wide transition duration-[250ms] hover:bg-uns-blue-gray"
                      onClick={() => onClick(network.network)}
                    >
                      <img
                        src={network.imgUrl}
                        alt={network.name}
                        className="mr-3 h-5 w-5 max-w-none"
                      />
                      <div>{network.name}</div>
                      <div>
                        {selectedNetwork === network.network && (
                          <svg
                            width="20"
                            height="20"
                            color="#4C82FB"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.6693 5.33789L7.5026 14.3175L3.33594 10.2358"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        )}
                      </div>
                    </button>
                  </Menu.Item>
                ))}
              </div>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
