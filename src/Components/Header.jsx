import {
	Navbar,
	Collapse,
	Typography,
	Button,
	IconButton,
} from "@material-tailwind/react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
	HomeIcon,
	Bars3Icon,
	XMarkIcon,
	ChatBubbleOvalLeftEllipsisIcon,
	HomeModernIcon,
	SquaresPlusIcon,
} from "@heroicons/react/24/solid";

import logo from "./../assets/logo.png";

const Header = () => {
	const [openNav, setOpenNav] = useState(false);
	const navList = (
		<ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
			<NavLink to="/">
				<Typography
					as="li"
					variant="small"
					color="blue-gray"
					className="flex items-center gap-x-2 p-1 font-semibold hover:text-blue-800 transition-all border-b border-transparent hover:border-b-blue-800"
				>
					<HomeIcon className="h-5 w-5" />

					<div className="flex items-center">Home</div>
				</Typography>
			</NavLink>
			<NavLink to="/available-camps">
				<Typography
					as="li"
					variant="small"
					color="blue-gray"
					className="flex items-center gap-x-2 p-1 font-semibold hover:text-blue-800 transition-all border-b border-transparent hover:border-b-blue-800"
				>
					<HomeModernIcon className="h-5 w-5" />

					<div className="flex items-center">Available Camps</div>
				</Typography>
			</NavLink>
			<NavLink to="/dashboard">
				<Typography
					as="li"
					variant="small"
					color="blue-gray"
					className="flex items-center gap-x-2 p-1 font-semibold hover:text-blue-800 transition-all border-b border-transparent hover:border-b-blue-800"
				>
					<SquaresPlusIcon className="h-5 w-5" />

					<div className="flex items-center">Dashboard</div>
				</Typography>
			</NavLink>
			<NavLink to="/contact">
				<Typography
					as="li"
					variant="small"
					color="blue-gray"
					className="flex items-center gap-x-2 p-1 font-semibold hover:text-blue-800 transition-all border-b border-transparent hover:border-b-blue-800"
				>
					<ChatBubbleOvalLeftEllipsisIcon className="h-5 w-5" />

					<div className="flex items-center">Contact Us</div>
				</Typography>
			</NavLink>
		</ul>
	);
	return (
		<Navbar className="mx-auto max-w-screen-2xl px-4 py-2 sticky z-10 rounded-none top-0">
			<div className="container mx-auto flex items-center justify-between text-blue-gray-900">
				<NavLink to="/" className="mr-4 cursor-pointer">
					<img src={logo} alt="MediCamp Logo" className="lg:w-32 w-60" />
				</NavLink>
				<div className="hidden lg:block">{navList}</div>
				<div className="flex items-center gap-x-1">
					<Link to="/login">
						<Button
							variant="text"
							size="sm"
							className="hidden lg:inline-block "
						>
							<span>Log In</span>
						</Button>
					</Link>
					<Link to="/register">
						<Button
							variant="gradient"
							size="sm"
							className="hidden lg:inline-block "
						>
							<span>Sign Up</span>
						</Button>
					</Link>
				</div>
				<IconButton
					variant="text"
					className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
					ripple={false}
					onClick={() => setOpenNav(!openNav)}
				>
					{openNav ? (
						<XMarkIcon className="h-6 w-6" />
					) : (
						<Bars3Icon className="h-6 w-6" />
					)}
				</IconButton>
			</div>
			<Collapse open={openNav}>
				<div className="container mx-auto">
					{navList}
					<div className="flex items-center gap-x-1">
						<Link to="/login">
							<Button fullWidth variant="text" size="sm" className="">
								<span>Log In</span>
							</Button>
						</Link>
						<Link to="/register">
							<Button fullWidth variant="gradient" size="sm" className="">
								<span>Sign Up</span>
							</Button>
						</Link>
					</div>
				</div>
			</Collapse>
		</Navbar>
	);
};

export default Header;
