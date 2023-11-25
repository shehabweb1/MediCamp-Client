import { Helmet } from "react-helmet-async";
import PageBanner from "../../Components/PageBanner";
import { Link } from "react-router-dom";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";
import { Input, Textarea } from "@material-tailwind/react";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import Swal from "sweetalert2";

const Contact = () => {
	const { register, handleSubmit, reset } = useForm();
	const onSubmit = (data) => {
		if (data) {
			Swal.fire({
				position: "top-end",
				icon: "success",
				title: "Your Message has been sent",
				showConfirmButton: false,
				timer: 1500,
			});
			reset();
		}
	};

	return (
		<>
			<Helmet>
				<title>MediCamp | Contact</title>
			</Helmet>
			<main>
				<PageBanner title="Contact Us" />

				<div className="py-20 md:w-1/3 mx-auto">
					<h2 className="text-xl text-center mb-5">
						Have a question or interested in our services? Feel free to ask
						questions
					</h2>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="flex flex-col gap-6"
					>
						<Input
							variant="outlined"
							label="Full Name"
							type="text"
							{...register("name", { required: true, maxLength: 80 })}
						/>
						<Input
							type="tel"
							variant="outlined"
							label="Mobile number"
							{...register("mobile", { required: true, maxLength: 12 })}
						/>
						<Input
							type="email"
							variant="outlined"
							label="Email"
							{...register("email", { required: true, pattern: /^\S+@\S+$/i })}
						/>
						<Textarea
							variant="outlined"
							label="Massage Here"
							{...register("message", {})}
						/>

						<AwesomeButton type="primary" size="medium">
							Submit
						</AwesomeButton>
					</form>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 md:p-20 p-5 text-white">
					<div className="bg-[#054279]  flex flex-col justify-center items-center p-5">
						<h3 className="text-4xl font-semibold text-center">
							Are You Find Medical Consultants?
						</h3>
						<h5 className="text-2xl font-semibold my-5">
							Let us know how we can help …
						</h5>
						<div className="flex gap-5">
							<Link to="/available-camps">Available Cams</Link>
							<Link to="/login">Login</Link>
						</div>
					</div>
					<div className="bg-gray-700 p-5">
						<h2 className="text-3xl text-center border-b">Service Center</h2>
						<div className="ml-20 mt-5 text-xl">
							<p className="mb-3">
								<PhoneIcon className="h-6 inline-block text-[#054279] mr-3" />|
								+8801608451204
							</p>
							<p className="mb-3">
								<EnvelopeIcon className="h-6 inline-block text-[#054279] mr-3" />
								| support@medicamp.com
							</p>
							<p>
								<MapPinIcon className="h-6 inline-block text-[#054279] mr-3 " />
								| Dhaka, BD - 1207
							</p>
						</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default Contact;
