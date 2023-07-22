import { Button, HStack, Heading, Image, List, Spinner } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import getCroppedImgUrl from "../services/image-url";

interface Props {
	onSelectGenre: (genreId: number) => void;
	selectedGenreId?: number;
}

const GenreList = ({ onSelectGenre, selectedGenreId }: Props) => {
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
								fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
								onClick={() => onSelectGenre(genre.id)}
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
