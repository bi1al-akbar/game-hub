import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';

const GameCardSkeleton = () => {
    return (
			<Card borderRadius={10} overflow={"hidden"} width={"250px"}>
				<Skeleton height={"150px"}></Skeleton>
				<CardBody>
					<SkeletonText />
				</CardBody>
			</Card>
		);
};

export default GameCardSkeleton;