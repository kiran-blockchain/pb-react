import { Outlet,Link } from "react-router-dom";
import { Highlight } from "../components/Highlight";
import { Timer } from "../components/Timer";

export const Layout = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home </Link>
                    </li>
                    <li>
                        <Link to="/products">Products </Link>
                    </li>
                    <li>
                        <Link to="/cart">Cart </Link>
                    </li>
                    <li>
                      <Timer/>
                    </li>
                    <li>
                        <Highlight/>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}