import { Helmet } from "react-helmet-async";
import PageHeader from "../../../Components/PageHeader";
import {
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	IconButton,
	Input,
	Spinner,
	Typography,
} from "@material-tailwind/react";
import { MagnifyingGlassIcon, PlusCircleIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { AwesomeButton } from "react-awesome-button";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const ManageCamps = () => {
	const axiosPublic = useAxiosPublic();
	const { data: campsData, isPending } = useQuery({
		queryKey: ["camps"],
		queryFn: async () => {
			const res = await axiosPublic.get("/camps");
			return res.data;
		},
	});

	if (isPending) {
		return <Spinner />;
	}

	const TABLE_HEAD = [
		"No.",
		"Camp Name",
		"Scheduled",
		"Location",
		"Healthcare",
		"Audience",
		"Action",
		"Delete",
	];

	return (
		<>
			<Helmet>
				<title>MediCamp | Manage Camps</title>
			</Helmet>
			<main>
				<PageHeader title="Manage Camps" />

				<Card className="h-full w-full">
					<CardHeader floated={false} shadow={false} className="rounded-none">
						<div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
							<div className="flex w-full shrink-0 gap-2 md:w-max">
								<div className="w-full md:w-72">
									<Input
										label="Search"
										icon={<MagnifyingGlassIcon className="h-5 w-5" />}
									/>
								</div>
								<Link to="/dashboard/add-a-camp">
									<Button className="flex items-center gap-3" size="sm">
										<PlusCircleIcon className="h-4 w-4" />
										Add Camp
									</Button>
								</Link>
							</div>
						</div>
					</CardHeader>
					<CardBody className="overflow-scroll px-0">
						<table className="w-full min-w-max table-auto text-left">
							<thead>
								<tr>
									{TABLE_HEAD.map((head) => (
										<th
											key={head}
											className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
										>
											<Typography
												variant="small"
												color="blue-gray"
												className="font-normal leading-none opacity-70"
											>
												{head}
											</Typography>
										</th>
									))}
								</tr>
							</thead>
							<tbody>
								{campsData.map((camp, idx) => (
									<tr key={camp._id}>
										<td>{idx + 1}</td>
										<td>{camp.camp_name}</td>
										<td>{camp.date}</td>
										<td>{camp.location}</td>
										<td>{camp.healthcare}</td>
										<td>{camp.audience}</td>
										<td>
											<Link to={`/dashboard/manage-camps/${camp._id}`}>
												View Details
											</Link>
										</td>
										<td>
											<AwesomeButton type="danger">Delete</AwesomeButton>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</CardBody>
					<CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
						<Button variant="outlined" size="sm">
							Previous
						</Button>
						<div className="flex items-center gap-2">
							<IconButton variant="outlined" size="sm">
								1
							</IconButton>
						</div>
						<Button variant="outlined" size="sm">
							Next
						</Button>
					</CardFooter>
				</Card>
			</main>
		</>
	);
};

export default ManageCamps;
