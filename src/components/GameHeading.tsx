import { Heading } from "@chakra-ui/react";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";
import useGameQueryStore from "../store";


const GameHeading = () => {
	const { gameQuery } = useGameQueryStore();
	const genre = useGenre(gameQuery.genreId);
	const platform = usePlatform(gameQuery.platformId);
	const heading = `${platform?.name || ""} ${genre?.name || ""} Games `;
	return (
		<Heading
            fontSize={{
                sm: "5xl",
                md: "6xl",
                lg: "5xl"
			}}>
			{heading}
		</Heading>
	);
};

export default GameHeading;
