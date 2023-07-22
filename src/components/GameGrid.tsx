import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";
import React from "react";

interface Props {
	gameQuery: GameQuery;
}
const GameGrid = ({ gameQuery }: Props) => {
	const { data, error, isLoading, isFetchingNextPage, hasNextPage, fetchNextPage } = useGames(gameQuery);
	const skeletons = [1, 2, 3, 4, 5, 6];
	return (
		<Box>
			{error && <Text>{error.message}</Text>}
			<SimpleGrid
				columns={{
					sm: 1,
					md: 2,
					lg: 3,
					xl: 5,
				}}
				spacing={6}>
				{isLoading &&
					skeletons.map((skeleton) => (
						<GameCardContainer key={skeleton}>
							{" "}
							<GameCardSkeleton></GameCardSkeleton>{" "}
						</GameCardContainer>
					))}
				{data?.pages.map((page, index) => (
					<React.Fragment key={index}>
						{page.results.map((game) => (
							<GameCardContainer key={game.id}>
								<GameCard game={game}></GameCard>
							</GameCardContainer>
						))}
					</React.Fragment>
				))}
			</SimpleGrid>
			{hasNextPage && (
				<Button onClick={() => fetchNextPage()} isDisabled={isFetchingNextPage} marginY={10}>
					{isFetchingNextPage ? "Loading..." : "More games"}
				</Button>
			)}
		</Box>
	);
};

export default GameGrid;
