import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { Spinner } from "@material-tailwind/react";

const PrivateRoute = ({ children }) => {
	const { user, loading } = useAuth();
	const location = useLocation();

	if (loading) {
		return <Spinner className="h-16 w-16 text-gray-900/50 mx-auto" />;
	}

	if (user) {
		return children;
	}

	return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
