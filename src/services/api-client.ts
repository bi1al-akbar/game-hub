import axios, { AxiosRequestConfig } from "axios";
export interface FetchResponse<T> {
	count: number;
	results: T[];
}
const axiosInstance = axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: "d8ded097c1584b68801d4d4587e1b37b",
	},
});

class APIClient<T> {
	endPoint: string;
	constructor(endPoint: string) {
		this.endPoint = endPoint;
	}
	getAll = (requestConfig: AxiosRequestConfig) =>
		axiosInstance.get<FetchResponse<T>>(this.endPoint, requestConfig).then((res) => res.data);
}

export default APIClient