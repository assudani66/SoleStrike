import CartCard from "../components/CartCard/CartCard"
import { useWishList } from "../context/wishListContext"

const Cart = () => {

  const {wishList} = useWishList()
  
    return (<>
    {wishList.map(product => <CartCard key={product._id} {...product} isInCart={false}/>)}
    {wishList.length === 0 && <h1>your wishList is empty</h1>}
    </>
  )
}

export default Cart