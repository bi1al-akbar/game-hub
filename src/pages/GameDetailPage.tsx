import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Button, Grid, GridItem, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { useState } from "react";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
import GameScreenShots from "../components/GameScreenshots";

const GameDetailPage = () => {
	const { slug } = useParams();
	const { data, error, isLoading } = useGame(slug!); //By this we are telling ts that it will not be null;
	const [expanded, setExpanded] = useState(false);
	const gameDescription = expanded ? data?.description_raw : data?.description_raw.slice(0, 300) + "...";

	if (isLoading) return <Spinner />;
	if (error || !data) throw error;
	return (
		<>
			<SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
				<GridItem>
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
				</GridItem>
				<GridItem>
					<GameTrailer gameId={data.id} />
					<GameScreenShots gameId={data.id} />
				</GridItem>
			</SimpleGrid>
		</>
	);
};

export default GameDetailPage;
