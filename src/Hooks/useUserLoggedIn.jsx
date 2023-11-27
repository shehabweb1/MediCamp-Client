import { Spinner } from "@material-tailwind/react";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useUserLoggedIn = () => {
	const { user } = useAuth();
	const axiosPublic = useAxiosPublic();
	const { data: userData = [], isPending } = useQuery({
		queryKey: ["users"],
		queryFn: async () => {
			const res = await axiosPublic("/users");
			return res.data;
		},
	});

	if (isPending) {
		return <Spinner />;
	}

	const loggedUser = userData.find((data) => data.email === user?.email);
	return loggedUser;
};

export default useUserLoggedIn;
