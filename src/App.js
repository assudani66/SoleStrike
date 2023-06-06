import { BrowserRouter } from "../node_modules/react-router-dom/dist/index";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import NavBarComponent from "./components/Navbar/NavbarComponent";
import AuthContextProvider from "./context/authContext";
import CartContextProvider from "./context/cartContext";
import FilterContextProvider from "./context/filterContext";
import UserContextProvider from "./context/userContext";
import WishListContextProvider from "./context/wishListContext";
import AppRouter from "./utils/AppRouter";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBarComponent/>
        <FilterContextProvider>
          <CartContextProvider>
            <AuthContextProvider>
              <UserContextProvider>
                <WishListContextProvider>
                <AppRouter/>
              </WishListContextProvider>
              </UserContextProvider>
            </AuthContextProvider>
          </CartContextProvider>
        </FilterContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
