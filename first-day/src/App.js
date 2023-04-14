import { useState } from "react";
import { Login } from "./components/Login";
import { UserDetails } from "./components/Login/UserDetails";
import { Products } from "./pages/products";
import { AuthContext } from "./providers/AuthContext";
import { CartContext } from "./providers/CartContext";
//redux implmentation
import { createStore, applyMiddleware } from "redux";
import { combinedReducers } from './store/index';
import thunk from "redux-thunk";
import { Provider } from "react-redux";
const store = createStore(combinedReducers, applyMiddleware(thunk))
const App = () => {
    const [authStatus, setAuthStatus] = useState(false);

    const userLogin = () => {
        setAuthStatus('loggedin')
    }
    const [cartInfo, updateCart] = useState([]);

    const handleCart = (type, data) => {
        if (type == 'add') {
            let cart = cartInfo;
            cart = [...cartInfo, data]
            updateCart(cart);
        }

    }
    return (
        <Provider store={store}>
            <Products />
        </Provider>
    )
}

export default App;