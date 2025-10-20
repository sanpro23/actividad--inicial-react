
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import { data } from "../data/data.js";
import Products from "./componentes/Products";


function App() {
  return (
    <>
      <Header />
      <Products data={data} />
      <Footer />
    </>
  );
}

export default App;
