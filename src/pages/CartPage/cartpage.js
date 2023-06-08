import { useNavigate } from "../../../node_modules/react-router-dom/dist/index"
import AddressCard from "../../components/AddressCard/AddressCard"
import AddressModal from "../../components/AddressModal/AddressModal"
import CartCard from "../../components/CartCard/CartCard"
import { useCart } from "../../context/cartContext"
import { useUserData } from "../../context/userContext"
import './cartpage.css'
const Cart = () => {
  const {cart} = useCart()
  const {userData,userDispatch} = useUserData()
  const navigate = useNavigate()
    return (<div className="cartLayout">
      <div className="cartItems">
      {cart.length ===0  && <div className="emptyCard">
      <h1>Cart is Empty Go Shop now</h1>
      <button onClick={()=>navigate("/store")} >Go Shop Now</button>
      </div>}
    {cart.map(product => <CartCard key={product._id} {...product} isInCart />)}
    </div>
    <div>
      <div className="cartValue">
      <h1>Total Cost</h1>
      <p><span>₹</span>{cart.reduce((arr,curr)=>(arr + curr.price*curr.qty),0)}</p>
      <button className="checkout" onClick={()=>navigate("/checkout")}>Checkout</button>
      </div>
    </div>
    </div>
  )
}

export default Cart