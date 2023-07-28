import { Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import GameGrid from '../components/GameGrid';
import GameHeading from '../components/GameHeading';
import GenreList from '../components/GenreList';
import PlatformSelector from '../components/PlatformSelector';
import SortSelector from '../components/SortSelector';

const HomePage = () => {
    return (
		<Grid
			templateAreas={{
				base: `"main"`, // 1 column, 1 rows
				lg: `"aside main" `, // 2 columns, 1 rows
			}}
			templateColumns={{
				base: "1fr",
				lg: "200px 1fr",
			}}>
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
};

export default HomePage;