import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";


const PriveteRoute = ({children}) => {
    const {user,loadding} = useContext(AuthContext);
    if(loadding){
       return <span className="loading loading-spinner loading-lg"></span>
    }
    if(user){
        return children
    }
    return <Navigate to='/login'></Navigate>
};

export default PriveteRoute;