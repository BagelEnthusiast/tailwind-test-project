import ProductTile from "./components/ProductTile";
import { logo } from "./assets";
import { products } from "./constants";

const App = () => (
  <div
    className="
    flex flex-column items-start flex-wrap
    p-6 gap-8"
  >
    <img
      src={logo}
      className=""
    ></img>
    <div
      className="
        grid grid-cols-2
        p-0 gap-12
        "
    >
      {products.map(product => (
        <ProductTile img={product.img} content={product.content} />
      ))}
    </div>
  </div>
);

export default App;
