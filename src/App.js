import kha from "./queb.png";
import "./App.css";
import products from "./products";

let productList = products.map((p) => {
  return (
    <div className="product">
      <img src={p.img} alt="ccc"></img>
      <h4>{p.name}</h4>
      <h4>{p.price}</h4>
    </div>
  );
});
function App() {
  return (
    <>
      <div>
        <h1 className="title">QueB</h1>
        <h4 className="slogan">Mix Shape & Bake</h4>
        <img src={kha} alt="QB icon" className="qb"></img>
      </div>
      <div className="container">{productList}</div>
    </>
  );
}

export default App;
