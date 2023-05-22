import { BrowserRouter } from "../node_modules/react-router-dom/dist/index";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import CartContextProvider from "./context/cartContext";
import FilterContextProvider from "./context/filterContext";
import Cart from "./pages/cart";
import Store from "./pages/store";
import AppRouter from "./utils/AppRouter";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <FilterContextProvider>
          <CartContextProvider>
              <AppRouter/>
          </CartContextProvider>
        </FilterContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
