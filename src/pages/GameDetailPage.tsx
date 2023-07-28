import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Heading, Spinner, Text } from "@chakra-ui/react";

const GameDetailPage = () => {
	const { slug } = useParams();
    const { data, error, isLoading } = useGame(slug!); //By this we are telling ts that it will not be null;
    
    if (isLoading) return <Spinner />
    if (error || !data) throw error;
    return (
			<>
				<Heading>{data.name}</Heading>
				<Text>{data.description_raw}</Text>
			</>
		);
};

export default GameDetailPage;
