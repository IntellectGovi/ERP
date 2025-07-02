
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export function OpenRoute({ children }) {
    debugger
    const { token } = useSelector((state) => state.auth)
    console.log(token, "token")

    if (token != null) {
        return <Navigate to="/" />
    } else {
        return children
    }
}