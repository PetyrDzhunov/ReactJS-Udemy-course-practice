import { Route } from "react-router";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";
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
    </div>
  )
};

export default App;
