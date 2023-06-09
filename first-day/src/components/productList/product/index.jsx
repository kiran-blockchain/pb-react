import { useContext } from "react"
import { CartContext } from "../../../providers/CartContext"

export const Product = (props) => {
    const cartContext = useContext(CartContext);
    return (
        props.data ?
            <div className="col-md-3 mt-3">
                <div class="card" >
                    <img src={props.data.image} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{props.data.name}</h5>
                        <a href="#" class="btn btn-primary">{props.data.price}</a>
                        <button className="btn btn-success" onClick={e=>{
                            cartContext.addToCart("add",props.data);
                        }}>Add to Cart</button>
                    </div>
                </div>
            </div>
            : <div>
                <label>data not found</label>
            </div>

    )
}