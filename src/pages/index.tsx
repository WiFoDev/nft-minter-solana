import type {NextPage} from "next";

import {useWallet} from "@solana/wallet-adapter-react";

import {Connected, Disconnected} from "@/components";

const Home: NextPage = () => {
  const {connected} = useWallet();

  return (
    <section className="flex flex-col items-center gap-10">
      {!connected ? <Disconnected /> : <Connected />}
    </section>
  );
};

export default Home;
