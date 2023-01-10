import SideBar from "./components/SideBar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Button from "./components/Button";
import About from "./About";

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
        <i className="text-xs">BB Stats build 7.2</i>
      </p>

      <div className="pt-5 pl-24">
        {/* <button className="lg-button">
            <Link to="/About">Start Taking Stats!</Link>
          </button> */}

        <Button orange>Start Taking Stats!</Button>
      </div>
    </>
  );
};

export default Home;
