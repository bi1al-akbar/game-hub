import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenre from "../hooks/useGenre";

interface Props {
	gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
	const { data: genres } = useGenre();
	const { data: platforms } = useGenre();
	const genre = genres?.results.find((genre) => genre.id === gameQuery.genreId);
	const platform = platforms?.results.find((platform) => platform.id === gameQuery.platformId);
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
