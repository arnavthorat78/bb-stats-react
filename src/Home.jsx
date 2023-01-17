import SideBar from "./components/SideBar";

import Button from "./components/Button";

function Home() {
  return (
    <>
      <div className="flex">
        <SideBar />
      </div>

      <HomePage />
    </>
  );
}

const HomePage = () => {
  return (
    <>
      <h1 className="font-semibold text-6xl pt-5 pl-24">BB Stats</h1>
      <h3 className="font-normal text-3xl pt-5 pl-24 text-gray-600">
        An easy way to keep track of basketball statistics!
      </h3>

      {/* Temporary text for beta version */}
      <p className="font-light text-ml pt-5 pl-24 text-gray-500">
        This is beta software. Please <strong>do not</strong> use in a production environment.
        <br />
        <i className="text-xs">BB Stats v0.1.0</i>
      </p>

      <div className="pt-5 pl-24">
        <Button orange>Start Taking Stats</Button>
      </div>

      <h2 className="font-semibold text-4xl pt-10 pl-24">What is BB Stats?</h2>
      <p className="font-light text-xl pt-5 pl-24 text-gray-800">
        BB Stats is a website in which you can keep track of basketball statistics such as assists,
        rebounds, and much, much more.
        <br />
        You also have the ability to save that data to your device and save it online so that you
        can access it from anywhere in the world; literally!
      </p>

      <div className="pt-5 pl-24">
        <Button green>Get Started!</Button>
      </div>
    </>
  );
};

export default Home;
