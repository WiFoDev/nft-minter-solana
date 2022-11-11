import type {NextPage} from "next";

import {Connected} from "@/components";

const Home: NextPage = () => {
  return (
    <section className="flex flex-col items-center gap-10">
      <Connected />
    </section>
  );
};

export default Home;
