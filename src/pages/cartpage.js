import CartCard from "../components/CartCard/CartCard"
import { useCart } from "../context/cartContext"

const Cart = () => {
  const {cart} = useCart()
    return (<>
    {cart.map(product => <CartCard {...product} />)}
    </>
  )
}

export default Cart