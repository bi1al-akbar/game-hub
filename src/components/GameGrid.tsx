import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const GameGrid = () => {
	
	const { data, error, isLoading, hasNextPage, fetchNextPage } = useGames();
	const skeletons = [1, 2, 3, 4, 5, 6];
	const fetchedGamesCount = data?.pages.reduce((total, page) => total + page.results.length, 0) || 0; //reduce to get total number of games fetched
	return (
		<InfiniteScroll
			style={{paddingTop: "10px" ,paddingLeft: "10px"}}
			dataLength={fetchedGamesCount}
			next={fetchNextPage}
			hasMore={!!hasNextPage} // !! to convert in to actual boolean value
			loader={<h4>Loading...</h4>}
			endMessage={
				<p style={{ textAlign: "center" }}>
					<b>End of the Data</b>
				</p>
			}>
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
		</InfiniteScroll>
	);
};

export default GameGrid;
