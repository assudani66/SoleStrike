import { useEffect, useState } from "react"

export const useProductData = () => {
    const [shoeProductData,setShoeProductData] = useState([])
    const getshoesData = async() => {
        const shoesData = await fetch("/api/products")
        const {products} = await shoesData.json()
        setShoeProductData(products)
    }

    useEffect(()=>{getshoesData()},[])
    return shoeProductData
}
