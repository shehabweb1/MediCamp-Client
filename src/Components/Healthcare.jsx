import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import PageHeader from "./PageHeader";
import { Spinner } from "@material-tailwind/react";

const Healthcare = () => {
	const axiosPublic = useAxiosPublic();
	const { data: healthcareData = [], isPending: loading } = useQuery({
		queryKey: ["healthcare"],
		queryFn: async () => {
			const res = await axiosPublic.get("/healthcare");
			return res.data;
		},
	});
	if (loading) {
		return <Spinner />;
	}
	return (
		<div>
			<PageHeader title="Our Healthcare Professional" />
			<div className="grid">
				{healthcareData?.map((healthcare) => (
					<div key={healthcare._id}>
						<img src={healthcare.image} alt={healthcare.name} />
						<h3>{healthcare.name}</h3>
						<p>{healthcare.specialist}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Healthcare;
