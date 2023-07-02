import { ButtonSpinner, Center, HStack, Image, List, Spinner, Text } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import getCroppedImgUrl from "../services/image-url";

const GenreList = () => {
	const { data: genres, isLoading, error } = useGenre();
	if (error) return null;
	if (isLoading) return <Spinner></Spinner>
	return (
		<>
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
		</>
	);
};

export default GenreList;
