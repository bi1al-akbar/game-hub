import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client.ts";
import genres from "../data/genres.ts";
import ms from "ms";

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
		staleTime: ms('24h'),
		initialData: genres,
	});
};

export default useGenres;
