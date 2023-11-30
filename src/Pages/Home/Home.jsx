import { Helmet } from "react-helmet-async";
import SliderBanner from "../../Components/SliderBanner";
import PopularMedicalCamps from "../../Components/PopularMedicalCamps";
import Testimonials from './../../Components/Testimonials';

const Home = () => {
	return (
		<>
			<Helmet>
				<title>MediCamp | Home</title>
			</Helmet>
			<main>
				<SliderBanner />
				<PopularMedicalCamps />
				<Testimonials/>
			</main>
		</>
	);
};

export default Home;
