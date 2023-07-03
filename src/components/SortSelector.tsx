import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
	selectedSort: string | null;
	onSelectSort: (sort: string) => void;
}

const SortSelector = ({ selectedSort, onSelectSort }: Props) => {
	const sortOrders = [
		{ value: "", label: "Relevance" },
		{ value: "-added", label: "Date added" },
		{ value: "name", label: "Name" },
		{ value: "-released", label: "Release date" },
		{ value: "-metacritic", label: "Popularity" },
		{ value: "-rating", label: "Average rating" },
    ];
    const currentSort = sortOrders.find((sortOrder) => sortOrder.value === selectedSort)?.label;
	return (
		<Menu>
			<MenuButton marginY={"10px"} as={Button} rightIcon={<BsChevronDown />}>
				Order by: {currentSort || "Relevance"}
			</MenuButton>
			<MenuList>
				{sortOrders.map((sortOrder) => (
					<MenuItem onClick={() => onSelectSort(sortOrder.value)} key={sortOrder.value} value={sortOrder.value}>
						{sortOrder.label}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

export default SortSelector;
