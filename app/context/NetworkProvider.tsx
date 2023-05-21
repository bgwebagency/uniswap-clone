import { createContext } from "react";
import type { selectedNetwork } from "../components/NetworkDropdown";

// network context provider
const NetworkContext = createContext({
  network: "ethereum" as selectedNetwork,
  setNetwork: (network: selectedNetwork) => {},
});

export { NetworkContext };
