import { useContext } from "react"
import { AuthContext } from "../../providers/AuthContext"
import { CartContext } from "../../providers/CartContext"

export const UserDetails = () => {

    const auth = useContext(CartContext)
    console.log(auth.cartItems.length);
    return (
        <div>
            {JSON.stringify(auth.cartItems)}
        </div>
    )
}