import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Contact from "../Pages/Contact/Contact";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import PrivateRoute from "./PrivateRoute";
import OrganizerProfile from "../Pages/Dashboard/Organizer/OrganizerProfile";
import OrganizerAddCamp from "../Pages/Dashboard/Organizer/OrganizerAddCamp";
import HealthcareProfile from "../Pages/Dashboard/HealthcareProfessional/HealthcareProfile";
import ParticipantProfile from "../Pages/Dashboard/Participant/ParticipantProfile";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/register",
				element: <SignUp />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
		],
	},
	{
		path: "/dashboard",
		element: (
			<PrivateRoute>
				<Dashboard />
			</PrivateRoute>
		),
		errorElement: <ErrorPage />,
		children: [
			{
				path: "organizer/profile",
				element: <OrganizerProfile />,
			},
			{
				path: "organizer/add-camp",
				element: <OrganizerAddCamp />,
			},
			{
				path: "healthcare-professional/profile",
				element: <HealthcareProfile />,
			},
			{
				path: "participant/profile",
				element: <ParticipantProfile />,
			},
		],
	},
]);

export default router;
