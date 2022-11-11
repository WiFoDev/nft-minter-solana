import type {AppProps} from "next/app";

import {WalletAdapterNetwork} from "@solana/wallet-adapter-base";
import {PhantomWalletAdapter} from "@solana/wallet-adapter-phantom";
import {useMemo} from "react";
import {clusterApiUrl} from "@solana/web3.js";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {WalletModalProvider} from "@solana/wallet-adapter-react-ui";

import {Layout} from "@/Layout";
import "@/styles/globals.css";

require("@solana/wallet-adapter-react-ui/styles.css");

function MyApp({Component, pageProps}: AppProps) {
  const network = WalletAdapterNetwork.Devnet;

  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(
    () => [new PhantomWalletAdapter()],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [network],
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider autoConnect wallets={wallets}>
        <WalletModalProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default MyApp;
