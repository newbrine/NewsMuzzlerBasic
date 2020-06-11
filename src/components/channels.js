import React from "react";
import { Box, Stack, Flex, Button, ThemeProvider, SimpleGrid, Collapse, Image} from '@chakra-ui/core';
import "../stylesheets/channelsMain.css";
import TopNav from "./topNavBar";
import LeftMenu from "./leftMenu";

export function ChannelsMain() {

    const [show1, setShow1] = React.useState(false);

    const handleToggle1 = () => setShow1(!show1);

    const [show2, setShow2] = React.useState(false);

    const handleToggle2 = () => setShow2(!show2);

    return (
        <ThemeProvider>
            <SimpleGrid columns={2} gridTemplateColumns={'17% 83%'}>
                {/*Left Part*/}
                <Box backgroundColor={'#2b2737'} >
                    <LeftMenu />
                </Box>
                {/*Right Part*/}
                <Box backgroundColor={'#F2F2F2'}>
                    <TopNav />
                    <Box paddingLeft="20px">
                        <Box paddingTop="40px" paddingBottom="40px">
                            <Button height="40px" backgroundColor="#6E61BF" className={"channelsMain-Btn channelsMain-lgBtnTxt"}>+ Create new email</Button>
                        </Box>
                        <Stack paddingRight = "60px" spacing={2} >
                            <Box position="relative" d="flex" border="1px solid rgba(168, 166, 185, 0.5)" borderRadius="6px" background="#E8E8E8"  className={"channelsMain-row"}>

                                <Box className={"channelsMain-col-3"}>
                                    <Box pt={show1? "35px": "7px"} className={"channelsMain-header"}>
                                        Work Email
                                    </Box>
                                    <Collapse mt={4} isOpen={show1}>
                                        <Box className={"channelsMain-text"}>
                                            <strong>Subscribe email:</strong>
                                            <Box>
                                                cal980@newsmuzzler.com
                                            </Box>
                                        </Box>

                                        <Box h={"16px"}/>

                                        <Box className={"channelsMain-text"}>
                                            <strong>Forward email:</strong>
                                            <Box>
                                                iosifweir@gmail.com
                                            </Box>
                                        </Box>
                                    </Collapse>
                                </Box>

                                <Box className={"channelsMain-col-5"}>
                                    <Flex className={"channelsMain-col-10"} flexDirection={'row'} justifyContent={'center'} alignItems={'center'}>
                                        <Box className={"channelsMain-header channelsMain-col-4"}>
                                            &emsp;&emsp;Categories:
                                        </Box>
                                        <Box>
                                            <Button mr="15px" size= "xs" backgroundColor="#6E61BF" className={"channelsMain-Btn channelsMain-xsBtnTxt"}>Business √</Button>
                                        </Box>
                                        <Box>
                                            <Button mr="15px" size= "xs" backgroundColor="#6E61BF" className={"channelsMain-Btn channelsMain-xsBtnTxt"}>Events √</Button>
                                        </Box>
                                        <Box>
                                            <Button mr="15px" size= "xs" backgroundColor="#6E61BF" className={"channelsMain-Btn channelsMain-xsBtnTxt"}>Social √</Button>
                                        </Box>
                                    </Flex>
                                    <Collapse mt={4} isOpen={show1} >
                                        <Box paddingLeft="50px" paddingRight="40px" className={"channelsMain-text"}>
                                            <strong>Description:</strong>&nbsp;Email for newsletters related to my job in marketing. Want to stay updated on the latest and most relevant news in the market.
                                        </Box>
                                    </Collapse>

                                </Box>
                                <Box className={"channelsMain-col-4"}>
                                    <Flex className={"channelsMain-col-6"} flexDirection={'row'} justifyContent={'start'} alignItems={'center'}>
                                        <Box pl="6px" className={"channelsMain-header"}>
                                            Total Subscriptions:
                                        </Box>
                                        <Box className={"channelsMain-number"}>
                                            &nbsp;6
                                        </Box>
                                    </Flex>

                                    <Collapse mt={4} isOpen={show1} >
                                        <Flex className={"channelsMain-col-7"} flexDirection={'row'} justifyContent={'start'} alignItems={'center'}>
                                            <Box pl="8px" className={"channelsMain-subHeader"}>
                                                Business Subscriptions:
                                            </Box>
                                            <Box className={"channelsMain-number"}>
                                                &nbsp;4
                                            </Box>
                                        </Flex>
                                        <Flex pl="8px" className={"channelsMain-col-7"} flexDirection={'row'} justifyContent={'start'} alignItems={'center'}>
                                            <Box className={"channelsMain-subHeader"}>
                                                Events Subscriptions:
                                            </Box>
                                            <Box className={"channelsMain-number"}>
                                                &nbsp;2
                                            </Box>
                                        </Flex>
                                        <Flex pl="8px" className={"channelsMain-col-7"} flexDirection={'row'} justifyContent={'start'} alignItems={'center'}>
                                            <Box  className={"channelsMain-subHeader"}>
                                                Social Subscriptions:
                                            </Box>
                                            <Box className={"channelsMain-number"}>
                                                &nbsp;2
                                            </Box>
                                        </Flex>
                                    </Collapse>
                                </Box>

                                <Box paddingTop="10px" margin="0 auto">
                                    <Button _hover={{border:"1px solid rgba(168, 166, 185, 0.5)", borderRadius:"5px"}} size="25px" backgroundColor="#E8E8E8" onClick={handleToggle1}>
                                        <Box size="15px" textAlign="center">
                                            <Image src= {show1? "https://img.icons8.com/metro/2x/collapse-arrow.png": "https://img.icons8.com/metro/72/expand-arrow.png"}></Image>
                                        </Box>
                                    </Button>
                                </Box>

                                <Button position = "absolute" backgroundColor="#E8E8E8" className={"ellipsis-right"}>
                                    <Image size="15px" src="https://image.flaticon.com/icons/svg/512/512222.svg"></Image>
                                </Button>
                            </Box>

                            <Box position="relative" d="flex" border="1px solid rgba(168, 166, 185, 0.5)" borderRadius="6px" background="#E8E8E8"  className={"channelsMain-row"}>

                                <Box className={"channelsMain-col-3"}>
                                    <Box pt={show2? "35px": "7px"} className={"channelsMain-header"}>
                                        Leisure Email
                                    </Box>
                                    <Collapse mt={4} isOpen={show2}>
                                        <Box className={"channelsMain-text"}>
                                            <strong>Subscribe email:</strong>
                                            <Box>
                                                cal980@newsmuzzler.com
                                            </Box>
                                        </Box>

                                        <Box h={"16px"}/>

                                        <Box className={"channelsMain-text"}>
                                            <strong>Forward email:</strong>
                                            <Box>
                                                iosifweir@gmail.com
                                            </Box>
                                        </Box>
                                    </Collapse>
                                </Box>

                                <Box className={"channelsMain-col-5"}>
                                    <Flex className={"channelsMain-col-10"} flexDirection={'row'} justifyContent={'center'} alignItems={'center'}>
                                        <Box className={"channelsMain-header channelsMain-col-4"}>
                                            &emsp;&emsp;Categories:
                                        </Box>
                                        <Box>
                                            <Button mr="15px" size= "xs" backgroundColor="#6E61BF" className={"channelsMain-Btn channelsMain-xsBtnTxt"}>Business √</Button>
                                        </Box>
                                        <Box>
                                            <Button mr="15px" size= "xs" backgroundColor="#6E61BF" className={"channelsMain-Btn channelsMain-xsBtnTxt"}>Events √</Button>
                                        </Box>
                                        <Box>
                                            <Button mr="15px" size= "xs" backgroundColor="#6E61BF" className={"channelsMain-Btn channelsMain-xsBtnTxt"}>Social √</Button>
                                        </Box>
                                    </Flex>
                                    <Collapse mt={4} isOpen={show2} >
                                        <Box paddingLeft="50px" paddingRight="40px" className={"channelsMain-text"}>
                                            <strong>Description:</strong>&nbsp;Email for newsletters related to my job in marketing. Want to stay updated on the latest and most relevant news in the market.
                                        </Box>
                                    </Collapse>

                                </Box>
                                <Box className={"channelsMain-col-4"}>
                                    <Flex className={"channelsMain-col-6"} flexDirection={'row'} justifyContent={'start'} alignItems={'center'}>
                                        <Box pl="6px" className={"channelsMain-header"}>
                                            Total Subscriptions:
                                        </Box>
                                        <Box className={"channelsMain-number"}>
                                            &nbsp;6
                                        </Box>
                                    </Flex>

                                    <Collapse mt={4} isOpen={show2} >
                                        <Flex className={"channelsMain-col-7"} flexDirection={'row'} justifyContent={'start'} alignItems={'center'}>
                                            <Box pl="8px" className={"channelsMain-subHeader"}>
                                                Business Subscriptions:
                                            </Box>
                                            <Box className={"channelsMain-number"}>
                                                &nbsp;4
                                            </Box>
                                        </Flex>
                                        <Flex pl="8px" className={"channelsMain-col-7"} flexDirection={'row'} justifyContent={'start'} alignItems={'center'}>
                                            <Box className={"channelsMain-subHeader"}>
                                                Events Subscriptions:
                                            </Box>
                                            <Box className={"channelsMain-number"}>
                                                &nbsp;2
                                            </Box>
                                        </Flex>
                                        <Flex pl="8px" className={"channelsMain-col-7"} flexDirection={'row'} justifyContent={'start'} alignItems={'center'}>
                                            <Box  className={"channelsMain-subHeader"}>
                                                Social Subscriptions:
                                            </Box>
                                            <Box className={"channelsMain-number"}>
                                                &nbsp;2
                                            </Box>
                                        </Flex>
                                    </Collapse>
                                </Box>

                                <Box paddingTop="10px" margin="0 auto">
                                    <Button _hover={{border:"1px solid rgba(168, 166, 185, 0.5)", borderRadius:"5px"}} size="25px" backgroundColor="#E8E8E8" onClick={handleToggle2}>
                                        <Box size="15px" textAlign="center">
                                            <Image src= {show2? "https://img.icons8.com/metro/2x/collapse-arrow.png": "https://img.icons8.com/metro/72/expand-arrow.png"}></Image>
                                        </Box>
                                    </Button>
                                </Box>

                                <Button position = "absolute" backgroundColor="#E8E8E8" className={"ellipsis-right"}>
                                    <Image size="15px" src="https://image.flaticon.com/icons/svg/512/512222.svg"></Image>
                                </Button>
                            </Box>
                        </Stack>
                    </Box>

                </Box>
            </SimpleGrid>
        </ThemeProvider>
    );
}
  