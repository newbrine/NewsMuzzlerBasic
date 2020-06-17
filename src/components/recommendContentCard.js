import React from "react";
import {Box, ThemeProvider, Flex} from "@chakra-ui/core";
import LazyLoad from 'react-lazyload';


// const horizontalContentCardProps = {
//     imageUrl: "https://bit.ly/2Z4KKcF",
//     imageAlt: "card image",
//     title: "Popular destinations",
//     subtitle: "Robert Walsh",
//     publishedDate: "May 22, 2020",
// };

export default class RecommendContentCard extends React.Component {
    render() {
        return (
            <ThemeProvider>
                {/*<LazyLoad>*/}
                    <Flex
                        as={'button'}
                        textAlign={'left'}
                        rounded="lg"
                        overflow="hidden"
                        background={'#FFFFFF'}
                        boxShadow={'0px 1px 4px rgba(0, 0, 0, 0.16), 0px 0px 2px rgba(0, 0, 0, 0.08), 0px 0px 0px #D1D6DB'}
                        borderRadius={'2px'}
                        borderWidth={'0'}
                        margin={'0% 4% 2% 0%'}
                        width="95%"
                        height={'150px'}
                        padding={'0'}
                    >
                        <LazyLoad>
                            <img src={this.props.imageUrl} style={{width:'110px', height:'150px'}} alt={this.props.imageAlt} />
                        </LazyLoad>

                        <Box padding="2" paddingLeft={'4'} width="64%" height="150px">
                            <Box
                                color={'#000000'}
                                marginTop="0"
                                fontWeight={'semibold'}
                                fontSize={'19px'}
                                lineHeight="28px"
                                // isTruncated
                                letterSpacing={'1px'}
                            >
                                {this.props.title}
                            </Box>

                            <Box display="flex" alignItems="baseline" marginTop={'10%'}>
                                <Box
                                    color={'#595959'}
                                    fontWeight="semibold"
                                    letterSpacing="wide"
                                    fontSize="15px"
                                    lineHeight={'24px'}
                                    textTransform="uppercase"
                                >
                                    {this.props.subtitle}
                                </Box>
                            </Box>

                            <Box>
                                <Box as="span" color={'#8C8C8C'} fontSize="sm">
                                    {this.props.publishedDate}
                                </Box>
                            </Box>

                        </Box>
                    </Flex>
                {/*</LazyLoad>*/}
            </ThemeProvider>
        );
    }
}