import { Route } from "react-router";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";
import ProductDetail from "./pages/ProductDetail";
import MainHeader from './components/MainHeader';
const App = () => {
  return (
    <div>
      <MainHeader />
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
      <Route path="/product-detail/:productId">
        <ProductDetail />
      </Route>
    </div>
  )
};

export default App;
