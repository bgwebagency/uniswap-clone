import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import clsx from "clsx";

const WALLETS = [
  {
    name: "Uniswap Wallet",
    iconUrl: "/assets/img/uniwallet.png",
    new: true,
  },
  {
    name: "MetaMask",
    iconUrl: "/assets/img/metamask.svg",
    new: false,
  },
  {
    name: "WalletConnect",
    iconUrl: "/assets/img/walletConnectIcon.svg",
    new: false,
  },
  {
    name: "Coinbase Wallet",
    iconUrl: "/assets/img/coinbaseWalletIcon.svg",
    new: false,
  },
];

function ConnectSidebar() {
  let [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <button
        onClick={openModal}
        className="flex h-10 items-center rounded-full bg-uns-blue-12 px-3 py-2.5 tracking-wider text-uns-sky transition duration-[150ms] hover:text-uns-blue-12"
      >
        Connect
      </button>
      {/* TODO: Fix transition to apply only margin transition */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed right-2 top-2 z-[1030] flex h-[calc(100%-16px)] flex-row"
          onClose={closeModal}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 z-[1040] bg-black bg-opacity-25" />
          </Transition.Child>

          <div
            data-testid="close-account-drawer"
            className="z-[1041] h-full cursor-pointer overscroll-contain rounded-xl rounded-bl-xl rounded-tl-xl py-6 pl-3.5 pr-7 transition-[background] duration-[250ms] hover:mr-[-8px] hover:bg-uns-blue-13 hover:opacity-60"
            style={{ scrollbarGutter: "stable" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="stroke-uns-light-blue"
            >
              <polyline points="13 17 18 12 13 7"></polyline>
              <polyline points="6 17 11 12 6 7"></polyline>
            </svg>
          </div>

          <div
            className={clsx(
              "z-[1041] w-80 overflow-hidden rounded-xl border border-uns-blue-14 bg-uns-blue-10 transition-[margin-right] duration-[250ms]  xl:w-[390px]",
              isOpen ? "mr-0 xl:mr-0" : "mr-[-320px] xl:mr-[-390px]"
            )}
          >
            <div className="flex h-full w-full">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="flex w-full flex-shrink flex-grow flex-col flex-nowrap bg-uns-blue-10 p-4">
                  {/* Title section */}
                  <div className="mb-4 flex w-full items-center justify-between">
                    <div>Connect a wallet</div>
                    {/* TODO: Implement Settings Feature */}
                    <button className="flex h-8 w-8 items-center justify-center rounded-xl bg-uns-blue-9 transition-[background] duration-[125ms] hover:bg-uns-blue-15">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="3"></circle>
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                      </svg>
                    </button>
                  </div>
                  {/* Content section */}
                  <div className="grid gap-4">
                    <div className="grid gap-[2px] overflow-hidden rounded-xl">
                      {WALLETS.map((wallet) => (
                        <button
                          key={wallet.name}
                          className="flex items-center bg-uns-blue p-[18px] transition duration-[125ms] hover:bg-uns-blue-15"
                        >
                          <img
                            src={wallet.iconUrl}
                            alt={wallet.name}
                            className="h-10 w-10"
                          />
                          <div className="px-2 font-semibold">
                            {wallet.name}
                          </div>
                          {wallet.new && (
                            <div className="rounded-md from-uns-pink-5 from-[4.35%] to-uns-pink-6 to-[96.44%] px-1 py-[2px] text-[8px] font-semibold leading-3 text-uns-blue-16 bg-gradient-[139.57deg]">
                              NEW
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                    {/* TnC */}
                    <div className="px-1">
                      <div className="text-xs font-normal text-uns-light-blue">
                        By connecting a wallet, you agree to Uniswap Labs'{" "}
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://uniswap.org/terms-of-service/"
                          className="font-semibold hover:opacity-60"
                        >
                          Terms of Service{" "}
                        </a>
                        and consent to its{" "}
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://uniswap.org/privacy-policy"
                          className="font-semibold hover:opacity-60"
                        >
                          Privacy Policy.
                        </a>
                        <span className="text-uns-blue-6">
                          {" "}
                          (Last Updated 11.17.22)
                        </span>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default ConnectSidebar;
