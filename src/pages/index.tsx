import type {NextPage} from "next";

const Home: NextPage = () => {
  return (
    <section className="flex flex-col items-center gap-10">
      <div className="text-6xl font-semibold text-center">
        <h1>Mint your buildoor.</h1>
        <p className="text-white">Earn $BLD. Level up.</p>
      </div>
      <button className="p-3 rounded w-60 bg-primary">
        become a buildoor
      </button>
    </section>
  );
};

export default Home;
