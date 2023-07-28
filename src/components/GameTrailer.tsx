import useTrailer from "../hooks/useTrailers";

interface Props {
	gameId: number;
}
const GameTrailer = ({ gameId }: Props) => {
	const { data, isLoading, error } = useTrailer(gameId);
	if (isLoading) return null;
	if (error) throw error;

	const first = data?.results[0];
	if (!first) return null;

	return <video style={{width: "50%", margin: "auto"}} src={first.data[480]} poster={first.preview} controls />;
};

export default GameTrailer;
