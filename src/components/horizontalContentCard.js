import React from "react";
import {Box, ThemeProvider, Flex} from "@chakra-ui/core";

import LazyLoad from 'react-lazyload';

// const horizontalContentCardProps = {
//     imageUrl: "https://bit.ly/2Z4KKcF",
//     imageAlt: "card image",
//     title: "Exploring open source opportunities",
//     subtitle: "Nicole Henley in Harvard Business Review",
//     publishedDate: "May 22, 2020",
//     timeToRead: "3",
//     contentPreview: "Solutions for a new economy in the 21st century. Adoption and use of free and open source software in India has grown over the last...",
// };

export default class HorizontalContentCard extends React.Component {

    closeLeftMenu = () => {
        document.getElementById("leftMenu").style.width = "4%";
        document.getElementById("mainPage").style.width = "96%";
        var leftMenu = document.getElementById("leftMenu-root");
        var leftMenu_Descriptions = leftMenu.getElementsByClassName("leftMenu-description");
        var i;
        for (i = 0; i < leftMenu_Descriptions.length; i++) {
            console.log(i);
            leftMenu_Descriptions[i].style.color = "transparent";
        }
    }

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
                    // height={'150px'}
                    height={'160px'}
                    width="96%"
                    onClick={this.closeLeftMenu}
                >
                    <LazyLoad>
                        <img src={this.props.imageUrl} alt={this.props.imageAlt} style={{width:'260px', height:'160px'}}/>
                    </LazyLoad>

                    <Box padding="2" paddingLeft={'4'} width="70%">
                        <Box
                            color={'#000000'}
                            marginTop="0"
                            fontWeight={'semibold'}
                            fontSize={'20px'}
                            lineHeight="28px"
                            isTruncated
                            letterSpacing={'1px'}
                        >
                            {this.props.title}
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
                                {this.props.subtitle}
                            </Box>
                        </Box>

                        <Box>
                            <Box as="span" color={'#8C8C8C'} fontSize="sm">
                                {this.props.publishedDate} &bull; {this.props.timeToRead} minute read
                            </Box>
                        </Box>

                        <Box display="flex" alignItems="center">
                            <Box as="span" color={'#595959'} fontSize="sm">
                                {this.props.contentPreview}
                            </Box>
                        </Box>
                    </Box>
                </Flex>
            </ThemeProvider>
        );
    }
}
