import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Link } from "@remix-run/react";

export default function Dropdown() {
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
          <Menu.Items className="absolute right-0 origin-top-right rounded-xl border border-uns-blue-11 bg-uns-blue-10 py-2 shadow-dropdown focus:outline-none sm:bottom-auto sm:top-14">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1 px-2">
                <Menu.Item>
                  <a
                    className="flex w-full items-center whitespace-nowrap rounded-xl p-2 tracking-wide transition duration-[250ms] hover:bg-uns-blue-gray"
                    href="https://wallet.uniswap.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <DownloadUniswapIcon aria-hidden="true" className="mr-3" />
                    Download Uniswap Wallet
                  </a>
                </Menu.Item>
                <Menu.Item>
                  <Link
                    className="flex w-full items-center whitespace-nowrap rounded-xl p-2 tracking-wide transition duration-[250ms] hover:bg-uns-blue-gray"
                    to="/vote"
                  >
                    <GovernanceIcon className="mr-3" aria-hidden="true" />
                    Vote in governance
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <a
                    className="flex w-full items-center whitespace-nowrap rounded-xl p-2 tracking-wide transition duration-[250ms] hover:bg-uns-blue-gray"
                    href="https://info.uniswap.org/#/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AnalyticsIcon className="mr-3" aria-hidden="true" />
                    View more analytics
                  </a>
                </Menu.Item>
              </div>
              {/* Divider */}
              <div className="mx-4 h-0 border border-uns-blue-9" />
              {/* Sub Menu 2 */}
              <div className="px-2">
                <Menu.Item>
                  <a
                    className={`flex w-full items-center whitespace-nowrap rounded-xl p-2 text-sm text-uns-light-blue transition duration-[250ms] hover:bg-uns-blue-gray`}
                    href="https://docs.uniswap.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Help center ↗
                  </a>
                </Menu.Item>
                <Menu.Item>
                  <a
                    className={`flex w-full items-center whitespace-nowrap rounded-xl p-2 text-sm text-uns-light-blue transition duration-[250ms] hover:bg-uns-blue-gray`}
                    href="https://help.uniswap.org/en/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Documentation ↗
                  </a>
                </Menu.Item>
                <Menu.Item>
                  <a
                    className={`flex w-full items-center whitespace-nowrap rounded-xl p-2 text-sm text-uns-light-blue transition duration-[250ms] hover:bg-uns-blue-gray`}
                    href="https://uniswap.canny.io/feature-requests"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Feedback ↗
                  </a>
                </Menu.Item>
                <Menu.Item>
                  {/* TODO: Implement Legal & Privacy Modal */}
                  <a
                    className={`flex w-full items-center whitespace-nowrap rounded-xl p-2 text-sm text-uns-light-blue transition duration-[250ms] hover:bg-uns-blue-gray`}
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Legal & Privacy ↗
                  </a>
                </Menu.Item>
              </div>
              {/* Social Menu */}
              <div className="flex justify-center px-4 sm:justify-start">
                <Menu.Item>
                  <a
                    className={`mr-3 flex items-center justify-center`}
                    href="https://discord.com/invite/FCfyBSbCU5"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <DiscordIcon
                      aria-hidden="true"
                      className="rounded-xl text-uns-light-blue transition duration-[250ms] hover:bg-uns-blue-gray"
                    />
                  </a>
                </Menu.Item>
                <Menu.Item>
                  <a
                    className={`mr-3 flex items-center justify-center`}
                    href="https://discord.com/invite/FCfyBSbCU5"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TwitterIcon
                      aria-hidden="true"
                      className="rounded-xl text-uns-light-blue transition duration-[250ms] hover:bg-uns-blue-gray"
                    />
                  </a>
                </Menu.Item>
                <Menu.Item>
                  <a
                    className={`mr-3 flex items-center justify-center`}
                    href="https://discord.com/invite/FCfyBSbCU5"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GithubIcon
                      aria-hidden="true"
                      className="rounded-xl text-uns-light-blue transition duration-[250ms] hover:bg-uns-blue-gray"
                    />
                  </a>
                </Menu.Item>
              </div>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

function DownloadUniswapIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 22.773 22.773"
      xmlSpace="preserve"
      width="24px"
      height="24px"
      fill="#FFFFFF"
      {...props}
    >
      <g>
        <g>
          <path d="M15.769,0c0.053,0,0.106,0,0.162,0c0.13,1.606-0.483,2.806-1.228,3.675c-0.731,0.863-1.732,1.7-3.351,1.573 c-0.108-1.583,0.506-2.694,1.25-3.561C13.292,0.879,14.557,0.16,15.769,0z"></path>
          <path d="M20.67,16.716c0,0.016,0,0.03,0,0.045c-0.455,1.378-1.104,2.559-1.896,3.655c-0.723,0.995-1.609,2.334-3.191,2.334 c-1.367,0-2.275-0.879-3.676-0.903c-1.482-0.024-2.297,0.735-3.652,0.926c-0.155,0-0.31,0-0.462,0 c-0.995-0.144-1.798-0.932-2.383-1.642c-1.725-2.098-3.058-4.808-3.306-8.276c0-0.34,0-0.679,0-1.019 c0.105-2.482,1.311-4.5,2.914-5.478c0.846-0.52,2.009-0.963,3.304-0.765c0.555,0.086,1.122,0.276,1.619,0.464 c0.471,0.181,1.06,0.502,1.618,0.485c0.378-0.011,0.754-0.208,1.135-0.347c1.116-0.403,2.21-0.865,3.652-0.648 c1.733,0.262,2.963,1.032,3.723,2.22c-1.466,0.933-2.625,2.339-2.427,4.74C17.818,14.688,19.086,15.964,20.67,16.716z"></path>
        </g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
      </g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </svg>
  );
}

function GovernanceIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      color="#FFFFFF"
      {...props}
    >
      <path
        d="M18.75 16.5V6.00002C18.7512 5.7042 18.6939 5.41106 18.5813 5.13752C18.4686 4.86397 18.3029 4.61544 18.0938 4.40626C17.8846 4.19708 17.636 4.0314 17.3625 3.91876C17.089 3.80613 16.7958 3.74878 16.5 3.75002H3.75"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M9.75 8.75H15.75"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M9.75 12.75H15.75"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M2.07187 7.49977C1.829 7.22785 1.65585 6.90097 1.56733 6.54728C1.4788 6.19359 1.47756 5.82369 1.56369 5.46941C1.64983 5.11513 1.82077 4.7871 2.0618 4.51353C2.30283 4.23997 2.60673 4.02908 2.94734 3.89902C3.28795 3.76895 3.65507 3.72361 4.01709 3.76689C4.37911 3.81017 4.72519 3.94077 5.02554 4.14747C5.32589 4.35416 5.57151 4.63074 5.74126 4.95342C5.91101 5.27609 5.9998 5.63518 6 5.99977V17.9998C6.00019 18.3644 6.08899 18.7235 6.25874 19.0461C6.42849 19.3688 6.67411 19.6454 6.97446 19.8521C7.27481 20.0588 7.62089 20.1894 7.98291 20.2327C8.34493 20.2759 8.71205 20.2306 9.05266 20.1005C9.39327 19.9705 9.69717 19.7596 9.9382 19.486C10.1792 19.2125 10.3502 18.8844 10.4363 18.5301C10.5224 18.1759 10.5212 17.806 10.4327 17.4523C10.3441 17.0986 10.171 16.7717 9.92813 16.4998H20.4281C20.7177 16.8236 20.9074 17.2243 20.9743 17.6536C21.0411 18.0828 20.9823 18.5223 20.8048 18.9188C20.6274 19.3154 20.3389 19.6521 19.9743 19.8882C19.6096 20.1244 19.1844 20.25 18.75 20.2498H8.25"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  );
}

function AnalyticsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      color="#FFFFFF"
      {...props}
    >
      <path
        d="M12 20V10"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M6 20V4"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M18 20V16"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  );
}

function DiscordIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      color="var(--genie-colors-textSecondary)"
      {...props}
    >
      <path
        d="M17.0325 6.95914C16.0748 6.51107 15.0508 6.18542 13.9802 6C13.8487 6.23771 13.6951 6.55743 13.5892 6.81177C12.4512 6.64062 11.3236 6.64062 10.2065 6.81177C10.1006 6.55743 9.94354 6.23771 9.81089 6C8.73916 6.18542 7.71399 6.51226 6.7563 6.96152C4.82465 9.8805 4.30101 12.727 4.56283 15.5331C5.844 16.4898 7.08562 17.071 8.30628 17.4513C8.60767 17.0365 8.87646 16.5956 9.10803 16.1309C8.66701 15.9633 8.24461 15.7565 7.84549 15.5164C7.95137 15.438 8.05494 15.356 8.15501 15.2716C10.5894 16.4102 13.2343 16.4102 15.6396 15.2716C15.7408 15.356 15.8444 15.438 15.9491 15.5164C15.5488 15.7577 15.1253 15.9645 14.6842 16.1321C14.9158 16.5956 15.1834 17.0377 15.486 17.4525C16.7078 17.0722 17.9506 16.491 19.2318 15.5331C19.539 12.2801 18.707 9.45977 17.0325 6.95914ZM9.43967 13.8074C8.70891 13.8074 8.10962 13.1251 8.10962 12.2944C8.10962 11.4636 8.69611 10.7802 9.43967 10.7802C10.1833 10.7802 10.7825 11.4624 10.7697 12.2944C10.7709 13.1251 10.1833 13.8074 9.43967 13.8074ZM14.3549 13.8074C13.6242 13.8074 13.0249 13.1251 13.0249 12.2944C13.0249 11.4636 13.6113 10.7802 14.3549 10.7802C15.0985 10.7802 15.6978 11.4624 15.685 12.2944C15.685 13.1251 15.0985 13.8074 14.3549 13.8074Z"
        fill="currentColor"
      ></path>
    </svg>
  );
}

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      color="var(--genie-colors-textSecondary)"
      {...props}
    >
      <path
        d="M18.955 7.34849C18.4393 7.57725 17.885 7.73179 17.3033 7.80132C17.897 7.44542 18.3531 6.88184 18.5678 6.21026C18.012 6.53989 17.3966 6.77916 16.7415 6.90812C16.217 6.34918 15.4695 6 14.6424 6C13.0542 6 11.7665 7.28758 11.7665 8.87576C11.7665 9.10117 11.7919 9.32068 11.841 9.53116C9.45084 9.41124 7.33181 8.26628 5.91338 6.52636C5.66583 6.95109 5.52397 7.44507 5.52397 7.97213C5.52397 8.96989 6.03168 9.85012 6.80335 10.3658C6.33194 10.3509 5.8885 10.2215 5.50077 10.0061C5.50044 10.0181 5.50044 10.0302 5.50044 10.0423C5.50044 11.4356 6.49176 12.5979 7.80738 12.8623C7.56607 12.928 7.312 12.9631 7.04973 12.9631C6.86442 12.9631 6.6843 12.9451 6.50866 12.9116C6.87465 14.054 7.93669 14.8855 9.19518 14.9086C8.21094 15.68 6.97095 16.1398 5.62352 16.1398C5.39139 16.1398 5.16248 16.1261 4.9375 16.0996C6.21022 16.9156 7.72187 17.3917 9.34594 17.3917C14.6357 17.3917 17.5284 13.0096 17.5284 9.20917C17.5284 9.08449 17.5256 8.9605 17.52 8.83708C18.0819 8.43169 18.5694 7.92524 18.955 7.34849H18.955Z"
        fill="currentColor"
      ></path>
    </svg>
  );
}

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      color="var(--genie-colors-textSecondary)"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 5.25C8.27062 5.25 5.25 8.34703 5.25 12.1707C5.25 15.2332 7.18219 17.8198 9.86531 18.7368C10.2028 18.7973 10.3294 18.5897 10.3294 18.408C10.3294 18.2437 10.3209 17.6987 10.3209 17.1191C8.625 17.4391 8.18625 16.6952 8.05125 16.3059C7.97531 16.1069 7.64625 15.4927 7.35938 15.3283C7.12312 15.1986 6.78562 14.8785 7.35094 14.8698C7.8825 14.8612 8.26219 15.3716 8.38875 15.5792C8.99625 16.626 9.96656 16.3318 10.3547 16.1502C10.4138 15.7003 10.5909 15.3975 10.785 15.2245C9.28312 15.0515 7.71375 14.4546 7.71375 11.8074C7.71375 11.0548 7.97531 10.4319 8.40563 9.94745C8.33812 9.77443 8.10187 9.06505 8.47312 8.11345C8.47312 8.11345 9.03844 7.93178 10.3294 8.82283C10.8694 8.66711 11.4431 8.58925 12.0169 8.58925C12.5906 8.58925 13.1644 8.66711 13.7044 8.82283C14.9953 7.92313 15.5606 8.11345 15.5606 8.11345C15.9319 9.06505 15.6956 9.77443 15.6281 9.94745C16.0584 10.4319 16.32 11.0461 16.32 11.8074C16.32 14.4632 14.7422 15.0515 13.2403 15.2245C13.485 15.4408 13.6959 15.856 13.6959 16.5048C13.6959 17.4305 13.6875 18.1745 13.6875 18.408C13.6875 18.5897 13.8141 18.806 14.1516 18.7368C16.8178 17.8198 18.75 15.2245 18.75 12.1707C18.75 8.34703 15.7294 5.25 12 5.25Z"
        fill="currentColor"
      ></path>
    </svg>
  );
}
