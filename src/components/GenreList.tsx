import { Button, HStack, Heading, Image, List, Spinner } from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import getCroppedImgUrl from "../services/image-url";

interface Props {
	onSelectGenre: (genre: Genre) => void;
	selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
	const { data: genres, isLoading, error } = useGenre();
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
								fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
								onClick={() => onSelectGenre(genre)}
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
