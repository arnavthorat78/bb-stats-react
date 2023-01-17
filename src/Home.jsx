import SideBar from "./components/SideBar";

import Textbox from "./components/Textbox";

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

      <h2 className="font-semibold text-4xl pt-10 pl-24">Stats Table</h2>
      <p className="font-light text-xl pt-5 pl-24 text-gray-800">Start taking stats now here!</p>

      <Textbox />
    </>
  );
};

export default Home;
