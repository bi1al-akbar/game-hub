import { Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
	return (
		<>
			<Heading>Oops ...</Heading>
			<Text>{isRouteErrorResponse(error) ? "No Page Found" : "An unexpected Error occured"}</Text>
		</>
	);
};

export default ErrorPage;
