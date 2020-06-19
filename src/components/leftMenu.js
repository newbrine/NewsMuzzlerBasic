import React from 'react';
import {ThemeProvider, CSSReset, Box, Stack, Button, Image, Flex} from '@chakra-ui/core';
import "../stylesheets/leftMenu.css";

export default class LeftMenu extends React.Component {
    render() {
        return (
            <ThemeProvider>
                <CSSReset />

                <Box
                    // width={["100%", "40%", "20%"]}
                    backgroundColor={"#2B2737"}
                    // transition={'0.5s'}
                    // height={'100%'}
                    zIndex={'1'}
                    top={'0'}
                    left={'0'}
                >

                    <Stack spacing={0} id={"leftMenu-root"}>

                        {/*<Box paddingTop={'30px'} paddingBottom={'30px'} color={'#FFFFFF'}>*/}
                        {/*    <div className="leftMenu-row">*/}
                        {/*        <div className={"leftMenu-col-2"} >*/}
                        {/*            <Image  size="40px" src="https://cdn.iconscout.com/icon/free/png-256/news-1445770-1224362.png"></Image>*/}
                        {/*        </div>*/}
                        {/*        <div className={"leftMenu-header leftMenu-col-2 leftMenu-description"}>*/}
                        {/*            NewsMuzzler*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</Box>*/}

                        <Box paddingTop={'30px'} paddingBottom={'30px'} color={'#FFFFFF'}>
                            <Flex flexWrap={"wrap"} alignItems={"center"} justifyContent={"flex-start"}>
                                <Flex >
                                    &nbsp;&nbsp;
                                    <Image size="40px" src="https://cdn.iconscout.com/icon/free/png-256/news-1445770-1224362.png"></Image>
                                </Flex>
                                <p className={"leftMenu-description"}>
                                    NewsMuzzler
                                </p>
                            </Flex>
                        </Box>

                        <Button _hover={{background: "#534488", stroke: "#534488" }} backgroundColor="#2B2737" className={"leftMenu-btnTxt"} height="63px"  >
                            <div className={"leftMenu-row-btn"} >
                                <Box size="20px">
                                    <Image src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/dashboard-icon-18-256.png"></Image>
                                </Box>

                                <div className="leftMenu-description">&nbsp;&nbsp; Dashboard</div>
                            </div>
                        </Button>

                        <Button _hover={{background: "#534488", stroke: "#534488" }} backgroundColor="#2B2737" className={"leftMenu-btnTxt"} height="63px">
                            <div className={"leftMenu-row-btn"} >
                                <Box size="20px">
                                    <Image src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/64/png/channel-mosaic-icon-18-64.png"></Image>
                                </Box>

                                <div className="leftMenu-description">&nbsp;&nbsp; Channels</div>
                            </div>
                        </Button>

                        <Button _hover={{background: "#534488", stroke: "#534488" }} backgroundColor="#2B2737" className={"leftMenu-btnTxt"} height="63px">
                            <div className={"leftMenu-row-btn"} >
                                <Box size="20px">
                                    <Image src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/64/png/today-icon-18-64.png"></Image>
                                </Box>

                                <div className="leftMenu-description">&nbsp;&nbsp; Content</div>
                            </div>
                        </Button>

                        <Button _hover={{background: "#534488", stroke: "#534488" }}  backgroundColor="#2B2737" className={"leftMenu-btnTxt"} height="63px">
                            <div className={"leftMenu-row-btn"} >
                                <Box size="20px">
                                    <Image src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/64/png/contacts-2-icon-18-64.png"></Image>
                                </Box>

                                <div className="leftMenu-description">&nbsp;&nbsp; Subscriptions</div>
                            </div>
                        </Button>

                        <Button _hover={{background: "#534488", stroke: "#534488" }}  backgroundColor="#2B2737" className={"leftMenu-btnTxt"} height="63px">
                            <div className={"leftMenu-row-btn"} >
                                <Box size="20px">
                                    <Image src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/combo-icon-256.png"></Image>
                                </Box>

                                <span className="leftMenu-description" >&nbsp;&nbsp; Statistics</span>
                            </div>
                        </Button>

                        <div>

                        </div>
                    </Stack>

                    <Box h={500}/>
                </Box>
            </ThemeProvider>

        );
    }
}