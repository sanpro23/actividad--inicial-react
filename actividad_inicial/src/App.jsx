
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import { data } from "../data/data.js";
import Products from "./componentes/Products";
import NavMenu from "./componentes/NavMenu.jsx";

function App() {
  return (
    <>
      <NavMenu />
      <Header />
      <Products data={data} />
      <Footer />
    </>
  );
}

export default App;
