import React from "react";
import {Box, Image, Badge} from "@chakra-ui/core";


const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
};

export default class contentCard extends React.Component {
    render() {
        return (
            <Box maxW="sm" borderStyle={'solid'} borderWidth="1px" rounded="lg" overflow="hidden" borderColor={'grey'}>
                <Image src={property.imageUrl} alt={property.imageAlt} width={381} height={254} />

                <Box p="6">
                    <Box d="flex" alignItems="baseline">
                        <Badge rounded="full" px="2" variantColor="teal">
                            New
                        </Badge>
                        <Box
                            color="gray.500"
                            fontWeight="semibold"
                            letterSpacing="wide"
                            fontSize="xs"
                            textTransform="uppercase"
                            ml="2"
                        >
                            {property.beds} beds &bull; {property.baths} baths
                        </Box>
                    </Box>

                    <Box
                        mt="1"
                        fontWeight="semibold"
                        as="h4"
                        lineHeight="tight"
                        isTruncated
                    >
                        {property.title}
                    </Box>

                    <Box>
                        {property.formattedPrice}
                        <Box as="span" color="gray.600" fontSize="sm">
                            / wk
                        </Box>
                    </Box>

                    <Box d="flex" mt="2" alignItems="center">

                        <Box as="span" ml="2" color="gray.600" fontSize="sm">
                            {property.reviewCount} reviews
                        </Box>
                    </Box>
                </Box>
            </Box>
        );
    }
}