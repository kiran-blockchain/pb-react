import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useApi } from "../../hooks/useApi";
import { apiGet } from "../../services";
import { fetchProductsAsync } from "../../store/products/actions";
import { Product } from "./product";

export const ProductList = (props) => {
    const url = 'https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json';
    //usage of custom hooks 
    //const productList = useApi(url,{});
    const products = useSelector(x=>x.productsReducer);
    console.log(products);
    
    const showProducts = () => {
       if(products.status=='start'){
        return<h6>Fetching Products</h6>
       }
       else if(products.status=='success'){
         return products.products.map((item,index)=>{
            return <Product data={item}/>
          })
       }
       else{
         return <h6 className="lbl-danger">Error in fetching data</h6>
       }
    }
    const dispatch = useDispatch();
    useEffect(()=>{
          return dispatch(fetchProductsAsync(url,{}))
    },[])
    return (
        <div className="container">
            <div className="row mt-4">
                {showProducts()}
            </div>
        </div>
    )
}



