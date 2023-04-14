import { useContext } from "react"
import { AuthContext } from "../../providers/AuthContext"

export const Login = () => {

    const checkStatus = () => {
        if (auth.status == 'loggedin')
            return <h1>User Logged In</h1>
        else
            return <button className="btn btn-primary"
                onClick={auth.login}>Login</button>
    }
    const auth = useContext(AuthContext)
    return (
        <div>
            {checkStatus()}
        </div>
    )
}