import { Button, HStack, Heading, Image, List, Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImgUrl from "../services/image-url";
import useGameQueryStore from "../store";


const GenreList = () => {
	const { data: genres, isLoading, error } = useGenres();
	const {gameQuery, setGenreId} =  useGameQueryStore();
	if (error) return null;
	if (isLoading) return <Spinner></Spinner>;
	return (
		<>
			<Heading
				fontSize={"3xl"}
				marginY={"10px"}>
				Genres
			</Heading>
			<List>
				{genres.results.map((genre) => (
					<List
						key={genre.id}
						paddingY={"5px"}>
						<HStack>
							<Image
								objectFit={"cover"}
								boxSize={"32px"}
								borderRadius={"8px"}
								src={getCroppedImgUrl(genre.image_background)}></Image>
							<Button
								whiteSpace={"normal"}
								textAlign={"left"}
								fontWeight={genre.id === gameQuery.genreId ? "bold" : "normal"}
								onClick={() => setGenreId(genre.id)}
								fontSize={"lg"}
								variant={"link"}>
								{genre.name}
							</Button>
						</HStack>
					</List>
				))}
			</List>
		</>
	);
};

export default GenreList;
