import heart from "../assets/heart.gif";
import star from "../assets/star.gif";
import Super from "../assets/Super.gif";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
	rating: number;
}
const Emoji = ({ rating }: Props) => {
	if (rating < 2) return null;
	const emojiMap: { [key: number]: ImageProps } = {
		//An index signature
		3: { src: star, alt: "meh" , boxSize: "45px"},
		4: { src: heart, alt: "recommended", boxSize: "35px" },
		5: { src: Super, alt: "Exceptional", boxSize: "45px" },
	};
	return <Image {...emojiMap[rating]} marginY={"5px"}/>;
};

export default Emoji;
