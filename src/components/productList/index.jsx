import axios from "axios";
import { useEffect, useState } from "react";
import { useApi } from "../../hooks/useApi";
import { apiGet } from "../../services";
import { Product } from "./product";

export const ProductList = (props) => {
    const url = 'https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json';
    //usage of custom hooks 
    const productList = useApi(url,{});
    
    const showProducts = () => {
        return productList.map((item, index) => {
            return <Product data={item} key={index} />
        })
    }
    return (
        <div className="container">
            <div className="row mt-4">
                {showProducts()}
            </div>
        </div>
    )
}

