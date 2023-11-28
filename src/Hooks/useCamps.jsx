import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { Spinner } from "@material-tailwind/react";

const useCamps = () => {
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

	return campsData;
};

export default useCamps;
