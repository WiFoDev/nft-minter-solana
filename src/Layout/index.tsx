import Head from "next/head";
import React from "react";
import Image from "next/image";
import {useConnection, useWallet} from "@solana/wallet-adapter-react";

import bgImage from "@/assets/home-background.svg";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({children}: LayoutProps) => {
  const {connection} = useConnection();
  const {publicKey, connect, disconnect} = useWallet();

  return (
    <div className="flex flex-col justify-between h-screen">
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
        <nav className="flex pointer-events-none h-16 mx-auto max-w-screen-standar items-center justify-end gap-2 pl-[max(env(safe-area-inset-left),1.5rem)] pr-[max(env(safe-area-inset-right),1.5rem)]">
          <button className="text-lg">Connect Wallet</button>
        </nav>
      </header>
      <main className="relative grid place-items-center">
        {children}
      </main>
      <footer className="relative pb-[env(safe-area-inset-bottom)]">
        <div className="mx-auto max-w-screen-standar py-12 flex justify-center pl-[max(env(safe-area-inset-left),1.5rem)] pr-[max(env(safe-area-inset-right),1.5rem)]">
          Build with ❤️ by WiFo
        </div>
      </footer>
    </div>
  );
};
