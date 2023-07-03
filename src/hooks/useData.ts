import { AxiosRequestConfig, CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
interface FetchResponse<T> {
	count: number;
	results: T[];
}
const useData = <T>(endPoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
	//AxiosRequestConfig is used to pass params to the api call

	const [data, setDta] = useState<T[]>([]);
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	useEffect(
		() => {
			const abortController = new AbortController();
			setIsLoading(true);
			apiClient
				.get<FetchResponse<T>>(endPoint, { signal: abortController.signal, ...requestConfig })
				.then((res) => {
					setDta(res.data.results);
					setIsLoading(false);
				})
				.catch((error) => {
					if (error instanceof CanceledError) return;
					setError(error.message);
					setIsLoading(false);
				});

			return () => {
				abortController.abort();
			};
		},
		deps ? [...deps] : []
	);
	return { data, error, isLoading };
};

export default useData;
