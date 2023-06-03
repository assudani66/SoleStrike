import CartCard from "../components/CartCard/CartCard"
import { useWishList } from "../context/wishListContext"

const Cart = () => {
  const {wishList} = useWishList()
    return (<>
    {wishList.map(product => <CartCard key={product._id} {...product} />)}
    </>
  )
}

export default Cart