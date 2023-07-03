import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/greek-helmet.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
interface Props {
	onSearch: (search: string) => void;
}
const NavBar = ({onSearch}: Props) => {
	return (
		<HStack justifyContent="space-between" padding={"10px"}>
			<Image src={logo} alt="logo" boxSize="60px" borderRadius={"10px"} />
			<SearchInput onSearch={onSearch}/>
			<ColorModeSwitch />
		</HStack>
	);
};

export default NavBar;
