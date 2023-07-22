import { Grid, GridItem, Show, HStack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
 import GameHeading from "./components/GameHeading";

export interface GameQuery {
	genreId?: number,
	platformId?: number;
	sortOrder: string;
	searchText: string;
}

function App() {
	const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
	return (
		<Grid
			templateAreas={{
				base: `"nav" "main"`, // 1 column, 2 rows
				lg: `"nav nav" "aside main" `, // 2 columns, 2 rows
			}}
			templateColumns={{
				base: "1fr",
				lg: "200px 1fr",
			}}>
			<GridItem area={"nav"}>
				<NavBar
					onSearch={(searchText) => {
						setGameQuery({ ...gameQuery, searchText });
					}}
				/>
			</GridItem>
			<Show above="lg">
				<GridItem area={"aside"} paddingX={"5px"}>
					<GenreList onSelectGenre={(genreId) => setGameQuery({ ...gameQuery, genreId })} selectedGenreId={gameQuery.genreId} />
				</GridItem>
			</Show>
			<GridItem area={"main"}>
				<GameHeading gameQuery={gameQuery} />
				<HStack spacing={5} paddingBottom={3}>
					<PlatformSelector
						selectedPlatformId={gameQuery.platformId}
						onSelectPlatform={(platformId) => setGameQuery({ ...gameQuery, platformId })}
					/>
					<SortSelector
						selectedSort={gameQuery.sortOrder}
						onSelectSort={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })}
					/>
				</HStack>
				<GameGrid gameQuery={gameQuery} />
			</GridItem>
		</Grid>
	);
}

export default App;
