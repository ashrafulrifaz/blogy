import { useContext } from "react";
import { AuthContext } from "../Provider/Provider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
   const {user} = useContext(AuthContext)

   if(user){
      return children
   } else {
      return <Navigate to="/admin-login"></Navigate>
   }
};

export default PrivateRoute;