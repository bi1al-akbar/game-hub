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
				<GridItem area={"aside"}>Aside</GridItem>
			</Show>
			<GridItem area={"main"}>Main</GridItem>
		</Grid>
	);
}

export default App;
