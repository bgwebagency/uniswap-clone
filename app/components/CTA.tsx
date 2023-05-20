const CTA = () => {
  return (
    <div className="my-20 flex w-full max-w-[1440px] items-center justify-between rounded-[32px] bg-cta px-12 py-8 shadow-cta shadow-uns-blue-8 md:h-[140px]">
      <div className="flex flex-col">
        <div className="font-bold leading-[36px] tracking-wide lg:text-[28px]">
          Powered by the Uniswap Protocol
        </div>
        <div className="mr-2.5 mt-2.5 font-medium tracking-wide lg:text-xl">
          The leading decentralized crypto trading protocol, governed by a
          global community.
        </div>
      </div>
      <div>
        <a
          href="https://uniswap.org"
          target="_blank"
          rel="noreferrer"
          className="flex w-[200px] justify-center rounded-[20px] border border-white p-4 font-medium transition duration-500"
        >
          Learn more
        </a>
      </div>
    </div>
  );
};

export default CTA;
