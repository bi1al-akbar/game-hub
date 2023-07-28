import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Button, Heading, Spinner, Text } from "@chakra-ui/react";
import { useState } from "react";
import GameAttributes from "../components/GameAttributes";

const GameDetailPage = () => {
	const { slug } = useParams();
	const { data, error, isLoading } = useGame(slug!); //By this we are telling ts that it will not be null;
	const [expanded, setExpanded] = useState(false);
	const gameDescription = expanded ? data?.description_raw : data?.description_raw.slice(0, 300) + "...";

	if (isLoading) return <Spinner />;
	if (error || !data) throw error;
	return (
		<>
			<Heading>{data.name}</Heading>
			<Text>
				{gameDescription}
				<Button
					size={"sm"}
					fontWeight={"bold"}
					colorScheme="yellow"
					marginLeft={"10px"}
					onClick={() => {
						setExpanded(!expanded);
					}}>
					{expanded ? "Show less" : "Show More"}
				</Button>
			</Text>
			<GameAttributes data={data} />
			
		</>
	);
};

export default GameDetailPage;
