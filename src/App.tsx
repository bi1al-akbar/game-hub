import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/navbar";
function App() {
	return (
		<Grid
			templateAreas={{
				base: `"nav" "main"`, // 1 column, 2 rows
				lg: `"nav nav" "aside main" `, // 2 columns, 2 rows
			}}>
			<GridItem area={"nav"}>
				<NavBar />
			</GridItem>
			<Show above="lg">
				<GridItem area={"aside"} bg={"yellow.100"}>
					Aside
				</GridItem>
			</Show>
			<GridItem area={"main"} bg={"red.100"}>
				Main
			</GridItem>
		</Grid>
	);
}

export default App;
