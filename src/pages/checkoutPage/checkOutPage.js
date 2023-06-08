import React from 'react'
import { useUserData } from '../../context/userContext'
import AddressCard from '../../components/AddressCard/AddressCard'
import AddressModal from '../../components/AddressModal/AddressModal'
import { useCart } from '../../context/cartContext'
import "./checkOutPage.css"
const CheckOutPage = () => {
    const {userData,userDispatch} = useUserData()
    const {cart} = useCart()
    const handleSubmit = ()=>{
        var options = {
          key: "rzp_test_2pm1kNf4Qwoehw",
          key_secret:"3xiMRzmvH6iCzETCNeeEMLmT",
          amount: cart.reduce((arr,curr)=>(arr + curr.price*curr.qty),0)*100,
          currency:"INR",
          name:"SOLE_STRIKE",
          description:"for testing purpose",
          handler: function(response){
            alert(response.razorpay_payment_id);
          },
          prefill: {
            name:"adarshbalika",
            email:"adarshbalika@gmail.com",
            contact:"7904425033"
          },
          notes:{
            address:"Razorpay Corporate office"
          },
          theme: {
            color:"#3399cc"
          }
        };
        var pay = new window.Razorpay(options);
        pay.open();
    }
  
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
      <button onClick={e=>handleSubmit(e)}>PlaceOrder</button>
      </div>
    </div>
  )
}

export default CheckOutPage