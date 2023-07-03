import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
	return (
		<Menu>
			<MenuButton marginY={"10px"} as={Button} rightIcon={<BsChevronDown />}>
				Sort By
			</MenuButton>
			<MenuList>
				<MenuItem>Sort by Date</MenuItem>
				<MenuItem>Sort by Name</MenuItem>
				<MenuItem>Sort by Rating</MenuItem>
				<MenuItem>Sort by Popularity</MenuItem>
			</MenuList>
		</Menu>
	);
};

export default SortSelector;
