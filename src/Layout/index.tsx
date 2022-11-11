import Head from "next/head";
import React, {useMemo} from "react";
import Image from "next/image";
import {useWallet} from "@solana/wallet-adapter-react";
import {useWalletModal} from "@solana/wallet-adapter-react-ui";

import bgImage from "@/assets/home-background.svg";
import connectedIcon from "@/assets/icons/connected.svg";
import disconnectIcon from "@/assets/icons/disconnect.svg";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({children}: LayoutProps) => {
  const modalState = useWalletModal();
  const {publicKey, wallet, disconnect} = useWallet();

  const formatedPK = useMemo(() => {
    if (publicKey) {
      const pkAsStr = publicKey.toString();

      return `${pkAsStr.slice(0, 4)}...${pkAsStr.slice(
        pkAsStr.length - 4,
      )}`;
    }
  }, [publicKey]);

  const handleConnect = () => {
    if (!wallet) {
      modalState.setVisible(true);
    }
  };

  const handleDisconnect = () => {
    modalState.setVisible(true);
  };

  return (
    <div className="flex flex-col h-screen">
      <Head>
        <title>Buildoor NFT</title>
        <meta content="Earn BLD And Level Up" name="Buildoor NFT" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      {!publicKey && (
        <div className="fixed">
          <Image alt="Buildoor Image Background" src={bgImage} />
        </div>
      )}
      <header className="relative w-full">
        <nav className="flex h-16 mx-auto max-w-screen-standar items-center justify-end gap-2 pl-[max(env(safe-area-inset-left),1.5rem)] pr-[max(env(safe-area-inset-right),1.5rem)]">
          {!publicKey ? (
            <button className="text-lg" onClick={handleConnect}>
              Connect Wallet
            </button>
          ) : (
            <>
              <button
                className="flex items-center gap-2"
                onClick={handleDisconnect}
              >
                <div className="grid w-4 h-4 place-items-center">
                  <Image alt="connected icon" src={connectedIcon} />
                </div>
                {formatedPK}
              </button>
              <button onClick={disconnect}>
                <div className="grid w-3 h-3 place-items-center">
                  <Image alt="disconnect icon" src={disconnectIcon} />
                </div>
              </button>
            </>
          )}
        </nav>
      </header>
      <main className="relative grid flex-1 place-items-center">
        {children}
      </main>
      <footer className="relative pb-[env(safe-area-inset-bottom)]">
        <div className="mx-auto max-w-screen-standar py-8 flex justify-center pl-[max(env(safe-area-inset-left),1.5rem)] pr-[max(env(safe-area-inset-right),1.5rem)]">
          Build with ❤️ by WiFo
        </div>
      </footer>
    </div>
  );
};
