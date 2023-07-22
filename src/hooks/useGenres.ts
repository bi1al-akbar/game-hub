import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client.ts";
import genres from "../data/genres.ts";

const apiClient = new APIClient<Genre>("/genre");

export interface Genre {
	id: number;
	name: string;
	image_background: string;
}

const useGenres = () => {
	return useQuery({
		queryKey: ["genres"],
		queryFn: apiClient.getAll,
		staleTime: 24 * 60 * 60 * 1000, //This crossponds to 24 hours
		initialData: genres,
	});
};

export default useGenres;
