import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
interface FetchResponse<T> {
	count: number;
	results: T[];
}
const useData = <T>(endPoint: string) => {
	const abortController = new AbortController();

	const [data, setDta] = useState<T[]>([]);
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		setIsLoading(true);
		apiClient
			.get<FetchResponse<T>>(endPoint, { signal: abortController.signal })
			.then((res) => {
				setDta(res.data.results);
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
    return { data, error, isLoading };
};

export default useData;
