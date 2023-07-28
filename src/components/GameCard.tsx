import { Game } from "../entities/Game";
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImgUrl from "../services/image-url";
import Emoji from "./Emoji";
import { Link } from "react-router-dom";

interface GameCardProps {
	game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
	return (
		<Card>
			<Image src={getCroppedImgUrl(game.background_image)}></Image>
			<CardBody>
				<HStack justifyContent={"space-between"} marginBottom={3}>
					<PlatformIconList platforms={game.parent_platforms.map((p) => p.platform)}></PlatformIconList>
					<CriticScore score={game.metacritic}></CriticScore>
				</HStack>
				<Heading fontSize={"2xl"}>
					<Link to={`/games/${game.slug}`}> {game.name}</Link>
				</Heading>
				<Emoji rating={game.rating_top}></Emoji>
			</CardBody>
		</Card>
	);
};

export default GameCard;
