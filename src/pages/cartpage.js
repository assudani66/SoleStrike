import AddressCard from "../components/AddressCard/AddressCard"
import AddressModal from "../components/AddressModal/AddressModal"
import CartCard from "../components/CartCard/CartCard"
import { useCart } from "../context/cartContext"
import { useUserData } from "../context/userContext"

const Cart = () => {
  const {cart} = useCart()
  const {userData,userDispatch} = useUserData()
  
    return (<>
    {cart.map(product => <CartCard key={product._id} {...product} isInCart />)}
    <div>
      <h1>Total Cost</h1>
      <p>{cart.reduce((arr,curr)=>(arr + curr.price),0)}</p>
      {userData.address.map((address)=> <AddressCard {...address}/>)}
      <button onClick={()=>userDispatch({type:'openAddress'})}>addAddress</button>
      {userData. addressModalVisible && <AddressModal/>}
    </div>
    </>
  )
}

export default Cart