import axios, {CanceledError} from "axios";

export default axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: "d8ded097c1584b68801d4d4587e1b37b",
	},
});

export {CanceledError};