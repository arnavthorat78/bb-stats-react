import SideBar from "./components/SideBar";
// import { Link } from "react-router-dom";

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
        <i className="text-xs">BB Stats v0.0.1</i>
      </p>

      <div className="pt-5 pl-24">
        <button className="lg-button">Start Taking Stats!</button>
      </div>
    </>
  );
};

export default Home;
