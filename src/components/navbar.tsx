import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/greek-helmet.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { NavLink } from "react-router-dom";

const NavBar = () => {
	return (
		<HStack justifyContent="space-between" padding={"10px"}>
			<NavLink to="/">
				<Image src={logo} alt="logo" style={{width: "70px"}} borderRadius={"10px"} />
			</NavLink>
			<SearchInput />
			<ColorModeSwitch />
		</HStack>
	);
};

export default NavBar;
