import React from 'react'
import { useUserData } from '../../context/userContext'
import AddressCard from '../../components/AddressCard/AddressCard'
import AddressModal from '../../components/AddressModal/AddressModal'
import { useCart } from '../../context/cartContext'
import "./checkOutPage.css"
const CheckOutPage = () => {
    const {userData,userDispatch} = useUserData()
    const {cart} = useCart()
  return (
    <div className='checkOut'>
    <div>
      {userData.address.map((address)=> <AddressCard {...address}/>)}
      <button onClick={()=>userDispatch({type:'openFreshAddress',payload:"reset"})}>addAddress</button>
      {userData. addressModalVisible && <AddressModal/>}
      </div>
      <div className='oderSummary'>
        <h3>OrderSummary</h3>
        {cart.map(({name,price})=><div className='order'>
            <p>{name}</p>
            <p>{price}</p>
        </div>)}
        <p className='order'> total:<span>₹{cart.reduce((arr,curr)=>(arr + curr.price*curr.qty),0)}</span></p>
      <button>PlaceOrder</button>
      </div>
      
    </div>
  )
}

export default CheckOutPage