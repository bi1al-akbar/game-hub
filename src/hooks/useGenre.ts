import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/api-client";

interface Genre {
	id: number;
	name: string;
}
interface FetchGenreResponse {
	count: number;
	results: Genre[];
}
const useGenre = () => {
	const abortController = new AbortController();

	const [genres, setGenre] = useState<Genre[]>([]);
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		setIsLoading(true);
		apiClient
			.get<FetchGenreResponse>("/genres", { signal: abortController.signal })
			.then((res) => {
				setGenre(res.data.results);
				setIsLoading(false);
			})
			.catch((error) => {
				if (error instanceof CanceledError) return;
				setError(error.message);
				setIsLoading(false);
			});

		// return () => {
		// 	abortController.abort();
		// };
	}, []);
	return {  genres, error, isLoading };
};

export default useGenre;
