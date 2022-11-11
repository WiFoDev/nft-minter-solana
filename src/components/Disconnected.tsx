import {useWalletModal} from "@solana/wallet-adapter-react-ui";
import React from "react";

export const Disconnected = () => {
  const walletModal = useWalletModal();

  const handleConnect = () => {
    walletModal.setVisible(true);
  };

  return (
    <>
      <div className="text-6xl font-semibold text-center">
        <h1>Mint your buildoor.</h1>
        <p className="text-white">Earn $BLD. Level up.</p>
      </div>
      <button
        className="p-3 rounded w-60 bg-primary"
        onClick={handleConnect}
      >
        become a buildoor
      </button>
    </>
  );
};
