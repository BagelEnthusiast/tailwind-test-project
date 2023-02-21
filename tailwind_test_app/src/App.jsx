import ProductTile from "./components/ProductTile";
import { logo } from "./assets";
import { products } from "./constants";

const App = () => (
  <div
    className="
    flex flex-column items-start flex-wrap
    p-6 gap-8
    border-solid border-black border 2"
  >
    <img
      src={logo}
      className="
        border-solid border-black border 2"
    ></img>
    <div
      className="
        flex flex-column items-start flex-wrap
        p-0 gap-12
        border-solid border-black border 2
        "
    >
      {products.map(product => (
        <ProductTile img={product.img} content={product.content} />
      ))}
    </div>
  </div>
);

export default App;
