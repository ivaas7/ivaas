import logo from "./logo.svg";
import Navlinks from "./shared/components/Navigation/Navlinks";
import Footer from "./shared/components/Footer/Footer";
import MainSlider from "./shared/components/Section/MainSlider";
import "./App.css";

function App() {
  return (
    <main>
      <Navlinks logo={logo} />
      <MainSlider />
      <Footer />
    </main>
  );
}

export default App;
