import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client.ts";
import { FetchResponse } from "../services/api-client";
import genres from "../data/genres.ts";
export interface Genre {
	id: number;
	name: string;
	image_background: string;
}

const useGenre = () => {
	return useQuery({
		queryKey: ["genres"],
		queryFn: () => apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data),
		staleTime: 24 * 60 * 60 * 1000, //This crossponds to 24 hours
		initialData: { count: genres.length, results: genres },
	});
};

export default useGenre;
