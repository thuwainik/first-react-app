import "./App.css";
import products from "./products";
import Home from "./components/Home";
import Products from "./components/Product";

function App() {
  const productList = products.map((p) => {
    return <Product name={p.name} price={p.price} image={p.img}></Product>;
  });
  return (
    <div>
      <Home />
      <div className="container">{productList}</div>
    </div>
  );
}

export default App;
