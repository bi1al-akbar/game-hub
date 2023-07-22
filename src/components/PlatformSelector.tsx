import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatforms";

interface Props {
	onSelectPlatform: (platformId: number) => void;
    selectedPlatformId?: number;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatformId }: Props) => {
	const { data, error } = usePlatform();
	const platform = data?.results.find((platform) => platform.id === selectedPlatformId);

	if (error) return null;
	return (
		<Menu>
			<MenuButton marginY={"10px"} as={Button} rightIcon={<BsChevronDown />}>
				{platform?.name || "Platform"}
			</MenuButton>
			<MenuList>
				{data?.results.map((platform) => (
					<MenuItem onClick={() => onSelectPlatform(platform.id)} key={platform.id}>
						{platform.name}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

export default PlatformSelector;
