import { Outlet, useLocation } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Main = () => {
	const location = useLocation();
	const noHeaderFooter =
		location.pathname.includes("login") || location.pathname.includes("signUp");
	return (
		<div className="max-w-screen-2xl mx-auto">
			{noHeaderFooter || <Header />}
			<Outlet/>
			{noHeaderFooter || <Footer />}
		</div>
	);
};

export default Main;
