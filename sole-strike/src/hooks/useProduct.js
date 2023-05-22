import { useEffect, useState } from "react";

export const useProductInfo = (productId) => {
  const [productInfo, setProductInfo] = useState(null);

  useEffect(() => {
    const getProductInfo = async () => {
      const response = await fetch(`/api/products/${productId}`);
      const productData = await response.json();
      setProductInfo(productData);
    };

    getProductInfo();
  }, [productId]);

  return productInfo;
};
