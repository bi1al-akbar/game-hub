import { SimpleGrid, Text } from '@chakra-ui/react';
import CriticScore from './CriticScore';
import ItemDefinition from './ItemDefinition';
import { Game } from '../entities/Game';
interface Props{
    data: Game;
}
const GameAttributes = ({data} : Props) => {
    return (
			<SimpleGrid columns={2} as={"dl"}>
				<ItemDefinition term="Platforms">
					{data.parent_platforms.map(({ platform }) => (
						<Text key={platform.id}> {platform.name}</Text>
					))}
				</ItemDefinition>

				<ItemDefinition term="Metascore">
					<CriticScore score={data.metacritic} />
				</ItemDefinition>

				<ItemDefinition term="Genres">
					{data.genres.map((genre) => (
						<Text key={genre.id}>{genre.name}</Text>
					))}
				</ItemDefinition>

				<ItemDefinition term="Publishers">
					{data.publishers.map((publisher) => (
						<Text key={publisher.id}>{publisher.name}</Text>
					))}
				</ItemDefinition>
			</SimpleGrid>
		);
};

export default GameAttributes;