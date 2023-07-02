import { HStack, Image, List, Text } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import getCroppedImgUrl from "../services/image-url";

const GenreList = () => {
	const { data: genres } = useGenre();
	return (
		<List>
			{genres.map((genre) => (
				<List key={genre.id} paddingY={"5px"}>
					<HStack>
						<Image boxSize={"32px"} borderRadius={"8px"} src={getCroppedImgUrl(genre.image_background)}></Image>
						<Text fontSize={"lg"}>{genre.name}</Text>
					</HStack>
				</List>
			))}
		</List>
	);
};

export default GenreList;
