import React, { createContext } from "react";
import type { selectedNetwork } from "../components/NetworkDropdown";

const NetworkContext = createContext({
  network: "ethereum" as selectedNetwork,
  setNetwork: (network: selectedNetwork) => {},
});

const NetworkProvider = ({ children }: { children: React.ReactNode }) => {
  const [network, setNetwork] = React.useState<selectedNetwork>("ethereum");
  const value = React.useMemo(
    () => ({ network, setNetwork }),
    [network, setNetwork]
  );

  return (
    <NetworkContext.Provider value={value}>{children}</NetworkContext.Provider>
  );
};

export { NetworkContext, NetworkProvider };
