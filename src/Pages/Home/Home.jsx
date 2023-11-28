import { Helmet } from "react-helmet-async";
import SliderBanner from "../../Components/SliderBanner";
import PopularMedicalCamps from "../../Components/PopularMedicalCamps";

const Home = () => {
	return (
		<>
			<Helmet>
				<title>MediCamp | Home</title>
			</Helmet>
			<main>
				<SliderBanner />
				<PopularMedicalCamps />
			</main>
		</>
	);
};

export default Home;
