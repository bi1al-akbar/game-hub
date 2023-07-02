import { useState, useEffect } from "react";
import apiClient, { CanceledError } from "../services/api-client";

export interface Platform {
	id: number;
	name: string;
	slug: string;
}

export interface Game {
	id: number;
	name: string;
	background_image: string;
	parent_platforms: {platform: Platform}[];
}
interface FetchGameResponse {
	count: number;
	results: Game[];
}

const useGames = () => {
	const abortController = new AbortController();

	const [games, setGames] = useState<Game[]>([]);
	const [error, setError] = useState("");
	useEffect(() => {
		apiClient
			.get<FetchGameResponse>("/games", { signal: abortController.signal })
			.then((res) => {
				setGames(res.data.results);
			})
			.catch((error) => {
				if (error instanceof CanceledError) return;
				setError(error.message);
			});

		return () => {
			abortController.abort();
		};
	}, []);
	return { games, error };
};

export default useGames;
