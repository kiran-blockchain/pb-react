import { useState } from "react";
import { Login } from "./components/Login";
import { UserDetails } from "./components/Login/UserDetails";
import { Products } from "./pages/products";
import { AuthContext } from "./providers/AuthContext";
import { CartContext } from "./providers/CartContext";
const App = () => {
    const [authStatus, setAuthStatus] = useState(false);

    const userLogin = () => {
        setAuthStatus('loggedin')
    }
    const [cartInfo,updateCart] = useState([]);

    const handleCart = (type,data)=>{
        if(type=='add'){
            let cart=cartInfo;
            cart.push(data);
            updateCart(cart);
        }
    
    }
    return (
        <AuthContext.Provider value={{ status: authStatus, login: userLogin }}>
            <CartContext.Provider value={{cartItems:cartInfo,addToCart:handleCart}}>
                <Login />
                <UserDetails />
                <Products />
            </CartContext.Provider>
        </AuthContext.Provider>
    )
}

export default App;