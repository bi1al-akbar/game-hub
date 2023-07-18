import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import genres from "../data/genres.ts";

const apiClient = new APIClient<Genre>("/platforms/lists/parents");

export interface Genre {
	id: number;
	name: string;
	image_background: string;
}

const useGenre = () => {
	return useQuery({
		queryKey: ["genres"],
		queryFn: apiClient.getAll,
		staleTime: 24 * 60 * 60 * 1000, //This crossponds to 24 hours
		initialData: { count: genres.length, results: genres },
	});
};

export default useGenre;
