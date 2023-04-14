import axios from "axios";

export const fetchProductsAsync =(url,headers)=>{
  return  dispatch=>{
     dispatch(fetchProducts);
        const config = {
            headers: { ...headers }
        }
        axios.get(url).then(res=>{
            dispatch(fetchProductsSuccess(res.data));
        }).catch(err=>{
            dispatch(fetchProductsFailure(err));
        })
        
  }
}
export const fetchProducts =(data)=>{
    return {
        type:"FETCH_PRODUCTS_STARTED"
    }
}
export const fetchProductsSuccess =(data)=>{
    return {
        type:"FETCH_PRODUCTS_SUCCESS",
        data
    }
}
export const fetchProductsFailure =(err)=>{
    return {
        type:"FETCH_PRODUCTS_FAILURE",
        error:"Failed to fetch data"
    }
}