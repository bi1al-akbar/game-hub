import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/PlatformSelector";
function App() {
	const [selectedGerne, setSelectedGenre] = useState<Genre | null>(null);
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
					<GenreList onSelectGenre={(gerne) => setSelectedGenre(gerne)} selectedGenre={selectedGerne}/>
				</GridItem>
			</Show>
			<GridItem area={"main"}>
				<PlatformSelector />
				<GameGrid selectedGenre={selectedGerne}/>
			</GridItem>
		</Grid>
	);
}

export default App;
