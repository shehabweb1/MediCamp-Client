import { Helmet } from "react-helmet-async";
import SliderBanner from "../../Components/SliderBanner";

const Home = () => {
	return (
		<>
			<Helmet>
				<title>MediCamp | Home</title>
			</Helmet>
			<main >
				<SliderBanner />
			</main>
		</>
	);
};

export default Home;
