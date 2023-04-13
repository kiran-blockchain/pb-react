import { Outlet,Link } from "react-router-dom";

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
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}