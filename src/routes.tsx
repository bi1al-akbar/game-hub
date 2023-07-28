import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import GameDetailPage from "./pages/GameDetailPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";

const route = createBrowserRouter([
	{
		path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
            {
                path: "games/:id",
                element: <GameDetailPage />,
            },
		],
	},
]);

export default route;