import { BrowserRouter } from "../node_modules/react-router-dom/dist/index";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AuthContextProvider from "./context/authContext";
import CartContextProvider from "./context/cartContext";
import FilterContextProvider from "./context/filterContext";
import AppRouter from "./utils/AppRouter";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <FilterContextProvider>
          <CartContextProvider>
            <AuthContextProvider>
              <AppRouter/>
            </AuthContextProvider>
          </CartContextProvider>
        </FilterContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
