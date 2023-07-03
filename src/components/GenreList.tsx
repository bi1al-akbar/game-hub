import { Button, HStack, Image, List, Spinner} from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import getCroppedImgUrl from "../services/image-url";

interface Props{
	onSelectGenre: (genre: Genre) => void
}

const GenreList = ({onSelectGenre}: Props) => {
	const { data: genres, isLoading, error } = useGenre();
	if (error) return null;
	if (isLoading) return <Spinner></Spinner>;
	return (
		<>
			<List>
				{genres.map((genre) => (
					<List key={genre.id} paddingY={"5px"}>
						<HStack>
							<Image boxSize={"32px"} borderRadius={"8px"} src={getCroppedImgUrl(genre.image_background)}></Image>
							<Button onClick={() => onSelectGenre(genre)} fontSize={"lg"} variant={"link"}>
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
