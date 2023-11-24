import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Login = () => {
	const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    };
	return (
		<Card
			color="transparent"
			shadow={false}
			className="mx-auto md:w-1/2 lg:w-1/4 py-20"
		>
			<Typography variant="h4" color="blue-gray">
				Login
			</Typography>
			<form
				onSubmit={handleLogin}
				className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
			>
				<div className="mb-1 flex flex-col gap-6">
					<Typography variant="h6" color="blue-gray" className="-mb-3">
						Your Email
					</Typography>
					<Input
						size="lg"
                        name="email"
                        type="email"
                        required
						placeholder="name@mail.com"
						className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
						labelProps={{
							className: "before:content-none after:content-none",
						}}
					/>
					<Typography variant="h6" color="blue-gray" className="-mb-3">
						Password
					</Typography>
					<Input
						type="password"
                        name="password"
						size="lg"
						placeholder="********"
						className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
						labelProps={{
							className: "before:content-none after:content-none",
						}}
					/>
				</div>
				<Button className="mt-6" type="submit" fullWidth>
					Login
				</Button>
				<Typography color="gray" className="mt-4 text-center font-normal">
					Don&lsquo;t have an account?{" "}
					<Link to="/register" className="font-medium text-gray-900">
						Sign In
					</Link>
				</Typography>
			</form>
		</Card>
	);
};

export default Login;
