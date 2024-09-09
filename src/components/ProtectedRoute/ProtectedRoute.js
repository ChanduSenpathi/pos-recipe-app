import { Navigate, Outlet } from "react-router-dom";
import { firebaseAuth } from "../../utils/firebase-config";

const ProtectedRoute = props => {    
    return firebaseAuth.currentUser ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoute