import axios from "axios";
import { useEffect, useState } from "react";
import { apiGet } from "../../services";
import { Product } from "./product";

export const ProductList = (props) => {
    const url = 'https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json';
    const [productList, fetchProductList] = useState([])
    const getProducts = async () => {
        try {
            let data = await apiGet(url, {});
            fetchProductList(data);
        }
        catch (ex) {
            console.log(ex);
        }
    }
    useEffect(() => {
        // fetch(url)
        // .then(response=>{
        //     return response.json()
        // }).then(data=>{
        //     console.log(data);
        //     fetchProductList(data);
        // })
        // axios.get(url).then(result=>{
        //     fetchProductList(result)
        // }).catch(ex=>{
        //     console.log(ex);
        // })
        getProducts();

    }, []);
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

