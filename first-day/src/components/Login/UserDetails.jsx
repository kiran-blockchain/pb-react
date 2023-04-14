import { useContext } from "react"
import { AuthContext } from "../../providers/AuthContext"
import { CartContext } from "../../providers/CartContext"

export const UserDetails = () => {

  
  
    const getCartItemsCount =()=>{
        let count = auth.cartItems.length;
        console.log(count)
        return <h1>{count}</h1>
    }
    const auth = useContext(CartContext)
    return (
        <div>
            {getCartItemsCount()}
        </div>
    )
}