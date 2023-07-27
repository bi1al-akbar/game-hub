import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/greek-helmet.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
	return (
		<HStack justifyContent="space-between" padding={"10px"}>
			<Image src={logo} alt="logo" boxSize="60px" borderRadius={"10px"} />
			<SearchInput />
			<ColorModeSwitch />
		</HStack>
	);
};

export default NavBar;
