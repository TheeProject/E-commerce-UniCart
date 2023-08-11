import React, { createContext, useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState(null);
    let { product_name } = useParams();

    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(`http://ecommerce.muersolutions.com/api/v1/products`);
        const fetchedProducts = await response.json();
        setProducts(fetchedProducts); // Set the fetched products to the state
        const foundProduct = fetchedProducts.find(p => p.product_name === decodeURIComponent(product_name));
        setProduct(foundProduct); // Set the selected product to the state
      };

      fetchData();
    }, [product_name]);

    const starRating = () => {
      let stars = [];
      if (product) { // Add a check here to avoid errors when product is null
        for (let i = 0; i < product.ranking; i++) {
          stars.push(<span key={i} style={{color: '#FFA500'}}>&#9733;</span>);
        }
      }
      return stars;
    };

    // Context value should be an object containing the states and any useful functions
    const contextValue = {
      products,
      setProducts,
      product,
      setProduct,
      starRating
    };

    return (
        <ProductsContext.Provider value={contextValue}>
            {children}
        </ProductsContext.Provider>
    )
}