import { Grid, GridItem, Show, HStack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

function App() {
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
				<NavBar />
			</GridItem>
			<Show above="lg">
				<GridItem area={"aside"} paddingX={"5px"}>
					<GenreList />
				</GridItem>
			</Show>
			<GridItem area={"main"}>
				<GameHeading />
				<HStack spacing={5} paddingBottom={3}>
					<PlatformSelector />
					<SortSelector />
				</HStack>
				<GameGrid />
			</GridItem>
		</Grid>
	);
}

export default App;
