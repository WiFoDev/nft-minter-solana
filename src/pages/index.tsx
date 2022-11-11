import type {NextPage} from "next";

const Home: NextPage = () => {
  return (
    <section className="flex flex-col gap-10">
      <div className="text-6xl font-semibold text-center">
        <h1>Mint your buildoor.</h1>
        <p className="text-white">Earn $BLD. Level up.</p>
      </div>
      <button>become a buildoor</button>
    </section>
  );
};

export default Home;
