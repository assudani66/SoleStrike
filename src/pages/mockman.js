import React from 'react'
import Mockman from "mockman-js";
import { useProductData } from '../hooks/useProductData';

const MockmanAPI = () => {
    const data = useProductData()
    console.log(data)
  return (
    <Mockman/>
  )
}

export default MockmanAPI