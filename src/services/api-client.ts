import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
	params: {
		key: "8b9e3196ad894f56899fec176db18dbb",
	},
});