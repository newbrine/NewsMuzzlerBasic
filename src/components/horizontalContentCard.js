import React from "react";
import {Box, Image, ThemeProvider, Flex} from "@chakra-ui/core";

const horizontalContentCardProps = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "card image",
    title: "Exploring open source opportunities",
    subtitle: "Nicole Henley in Harvard Business Review",
    publishedDate: "May 22, 2020",
    timeToRead: "3",
    contentPreview: "Solutions for a new economy in the 21st century. Adoption and use of free and open source software in India has grown over the last...",
};

export default class HorizontalContentCard extends React.Component {
    render() {
        return (
            <ThemeProvider>
                <Flex
                    as={'button'}
                    textAlign={'left'}
                    rounded="lg"
                    overflow="hidden"
                    background={'#FFFFFF'}
                    boxShadow={'0px 1px 4px rgba(0, 0, 0, 0.16), 0px 0px 2px rgba(0, 0, 0, 0.08)'}
                    borderRadius={'2px'}
                    margin={'0% 2% 2% 2%'}
                    height={'150px'}
                >
                    <Image src={horizontalContentCardProps.imageUrl} alt={horizontalContentCardProps.imageAlt} width={381} height={254} />

                    <Box padding="2" pl={'4'}>
                        <Box
                            color={'#000000'}
                            marginTop="0"
                            fontWeight={'semibold'}
                            fontSize={'20px'}
                            lineHeight="28px"
                            isTruncated
                            letterSpacing={'1px'}
                        >
                            {horizontalContentCardProps.title}
                        </Box>

                        <Box display="flex" alignItems="baseline">
                            <Box
                                color={'#595959'}
                                fontWeight="semibold"
                                letterSpacing="wide"
                                fontSize="16px"
                                lineHeight={'24px'}
                                textTransform="uppercase"
                            >
                                {horizontalContentCardProps.subtitle}
                            </Box>
                        </Box>

                        <Box>
                            <Box as="span" color={'#8C8C8C'} fontSize="sm">
                                {horizontalContentCardProps.publishedDate} &bull; {horizontalContentCardProps.timeToRead} minute read
                            </Box>
                        </Box>

                        <Box display="flex" alignItems="center">
                            <Box as="span" color={'#595959'} fontSize="sm">
                                {horizontalContentCardProps.contentPreview}
                            </Box>
                        </Box>
                    </Box>
                </Flex>
            </ThemeProvider>
        );
    }
}