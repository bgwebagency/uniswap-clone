import { Link } from "@remix-run/react";

const Footer = () => {
  return (
    <div className="flex w-full max-w-[1440px] flex-col gap-12 lg:flex-row lg:justify-between">
      {/* Logo and Social container */}
      <div className="hidden flex-col lg:flex">
        <img
          src="/assets/img/logo.png"
          alt="Uniswap"
          className="hidden h-[72px] w-[72px] lg:block"
        />
        <div className="mt-5 flex items-center gap-5">
          <a
            href="https://discord.gg/FCfyBSbCU5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              viewBox="0 0 71 55"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              className="fill-uns-light-blue"
            >
              <title>Discord</title>
              <path d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z"></path>
            </svg>
          </a>
          <a
            href="https://twitter.com/uniswap"
            target="_blank"
            rel="noopener noreferrer"
            className="sc-161z70s-6 fCbTAS"
          >
            <svg
              viewBox="0 0 32 32"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              className="fill-uns-light-blue"
            >
              <title>Twitter</title>
              <path d="M31.2746 5.92398C30.7719 6.14694 30.2551 6.33512 29.727 6.4879C30.3522 5.7808 30.8289 4.9488 31.1199 4.03835C31.1851 3.83427 31.1175 3.61089 30.9498 3.47742C30.7822 3.34385 30.5495 3.32785 30.365 3.43716C29.2434 4.10235 28.0334 4.58039 26.7647 4.85993C25.4866 3.6111 23.7508 2.90039 21.9563 2.90039C18.1684 2.90039 15.0867 5.98199 15.0867 9.76975C15.0867 10.0681 15.1056 10.3647 15.143 10.6573C10.4426 10.2446 6.07276 7.9343 3.07198 4.25337C2.96504 4.12217 2.80029 4.05146 2.63162 4.06498C2.46285 4.0782 2.31121 4.17337 2.22595 4.31964C1.61733 5.36398 1.29557 6.5584 1.29557 7.77368C1.29557 9.4289 1.88654 10.9994 2.93046 12.2265C2.61304 12.1166 2.30502 11.9792 2.01103 11.816C1.8532 11.7282 1.66058 11.7295 1.50378 11.8194C1.34687 11.9093 1.2485 12.0747 1.24437 12.2554C1.24365 12.2859 1.24365 12.3163 1.24365 12.3472C1.24365 14.8179 2.5734 17.0423 4.60644 18.2547C4.43178 18.2373 4.25722 18.212 4.0838 18.1788C3.90502 18.1447 3.72117 18.2073 3.6006 18.3437C3.47983 18.4799 3.43988 18.6699 3.49552 18.8433C4.24804 21.1927 6.18548 22.9208 8.52767 23.4477C6.58507 24.6644 4.36355 25.3017 2.03147 25.3017C1.54486 25.3017 1.05547 25.2731 0.5765 25.2165C0.338565 25.1882 0.111055 25.3287 0.0300229 25.5549C-0.0510093 25.7813 0.0348745 26.0337 0.2373 26.1634C3.23322 28.0844 6.69738 29.0997 10.2551 29.0997C17.249 29.0997 21.6242 25.8016 24.063 23.0349C27.104 19.585 28.8481 15.0186 28.8481 10.5067C28.8481 10.3182 28.8452 10.1278 28.8394 9.93812C30.0392 9.03417 31.0722 7.94018 31.9128 6.68279C32.0404 6.49182 32.0266 6.23943 31.8787 6.06364C31.731 5.88774 31.4848 5.83087 31.2746 5.92398Z"></path>
            </svg>
          </a>
          <a
            href="https://github.com/Uniswap"
            target="_blank"
            rel="noopener noreferrer"
            className="sc-161z70s-6 fCbTAS"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              className="fill-uns-light-blue"
            >
              <title>GitHub</title>
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
            </svg>
          </a>
        </div>
        <span className="mt-4 text-uns-blue-6">© 2023 Uniswap Labs</span>
      </div>
      {/* Links */}
      <div className="grid gap-6 xl:grid-cols-4">
        <div className="mt-5 flex w-[200px] flex-col gap-3 xl:m-0">
          <span className="font-bold">App</span>
          <Link
            to="/swap"
            className="font-medium tracking-wide text-uns-light-blue hover:opacity-60"
          >
            Swap
          </Link>
          <Link
            to="/tokens"
            className="font-medium tracking-wide text-uns-light-blue hover:opacity-60"
          >
            Tokens
          </Link>
          <Link
            to="/nfts"
            className="font-medium tracking-wide text-uns-light-blue hover:opacity-60"
          >
            NFTs
          </Link>
          <Link
            to="/pools"
            className="font-medium tracking-wide text-uns-light-blue hover:opacity-60"
          >
            Pools
          </Link>
        </div>
        <div className="mt-5 flex w-[200px] flex-col gap-3 xl:m-0">
          <span className="font-bold">Protocol</span>
          <a
            href="https://uniswap.org/community"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium tracking-wide text-uns-light-blue hover:opacity-60"
          >
            Community
          </a>
          <a
            href="https://uniswap.org/governance"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium tracking-wide text-uns-light-blue hover:opacity-60"
          >
            Governance
          </a>
          <a
            href="https://uniswap.org/developers"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium tracking-wide text-uns-light-blue hover:opacity-60"
          >
            Developers
          </a>
        </div>
        <div className="mt-5 flex w-[200px] flex-col gap-3 xl:m-0">
          <span className="font-bold">Company</span>
          <a
            href="https://boards.greenhouse.io/uniswaplabs"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium tracking-wide text-uns-light-blue hover:opacity-60"
          >
            Careers
          </a>
          <a
            href="https://uniswap.org/blog"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium tracking-wide text-uns-light-blue hover:opacity-60"
          >
            Blog
          </a>
        </div>
        <div className="mt-5 flex w-[200px] flex-col gap-3 xl:m-0">
          <span className="font-bold">Get Help</span>
          <a
            href="https://support.uniswap.org/hc/en-us/requests/new"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium tracking-wide text-uns-light-blue hover:opacity-60"
          >
            Contact Us
          </a>
          <a
            href="https://support.uniswap.org/hc/en-us"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium tracking-wide text-uns-light-blue hover:opacity-60"
          >
            Help Center
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
