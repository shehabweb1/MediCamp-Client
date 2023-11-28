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
import HealthcareProfile from "../Pages/Dashboard/HealthcareProfessional/HealthcareProfile";
import ParticipantProfile from "../Pages/Dashboard/Participant/ParticipantProfile";
import AcceptedCamps from "./../Pages/Dashboard/HealthcareProfessional/AcceptedCamps";
import AddCamp from "./../Pages/Dashboard/Organizer/AddCamp";
import ManageCamps from "./../Pages/Dashboard/Organizer/ManageCamps";
import ManageRegisteredCamps from "./../Pages/Dashboard/Organizer/ManageRegisteredCamps";
import AddUpcomingCamps from "../Pages/Dashboard/Organizer/AddUpcomingCamps";
import ManageUpcomingCamps from "./../Pages/Dashboard/Organizer/ManageUpcomingCamps";
import RegisteredCamps from "./../Pages/Dashboard/Participant/RegisteredCamps";
import FeedbackRatings from "./../Pages/Dashboard/Participant/FeedbackRatings";
import PaymentHistory from "../Pages/Dashboard/Participant/PaymentHistory";
import UpdateCamps from "../Pages/Dashboard/Organizer/UpdateCamps";

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
				path: "organizer-profile",
				element: <OrganizerProfile />,
			},
			{
				path: "add-a-camp",
				element: <AddCamp />,
			},
			{
				path: "manage-camps",
				element: <ManageCamps />,
			},
			{
				path: "update-camps/:id",
				element: <UpdateCamps />,
			},
			{
				path: "manage-registered-camps",
				element: <ManageRegisteredCamps />,
			},
			{
				path: "add-upcoming-camp",
				element: <AddUpcomingCamps />,
			},
			{
				path: "manage-upcoming-camps",
				element: <ManageUpcomingCamps />,
			},
			{
				path: "professional-profile",
				element: <HealthcareProfile />,
			},
			{
				path: "accepted-camps",
				element: <AcceptedCamps />,
			},
			{
				path: "participant-profile",
				element: <ParticipantProfile />,
			},
			{
				path: "registered-camps",
				element: <RegisteredCamps />,
			},
			{
				path: "payment-history",
				element: <PaymentHistory />,
			},
			{
				path: "feedback-and-ratings",
				element: <FeedbackRatings />,
			},
		],
	},
]);

export default router;
