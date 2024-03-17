import "./assets/css/style.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Clotheslist from "./components/clothes/clotheslist";

function App() {
  return (
    <div>
      <Header />
      <Clotheslist />
      <Footer />
    </div>
  );
}

export default App;
