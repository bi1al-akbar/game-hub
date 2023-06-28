import axios, {CanceledError} from "axios";

export default axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: "e862014e11bf4f71bbfb28839adaa987",
	},
});

export {CanceledError};