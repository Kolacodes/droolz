import "./HomeStyles.css";
import Droolz from "../img/droolz.png";

function Home() {
  return (
    <>
      <div className="hero">
        <img src={Droolz} className="hero-img" />
        <h1>Droolz</h1>
        <h3>pass me that sip</h3>
      </div>
    </>
  );
}

export default Home;
