import React, { useReducer } from "react";
import {
    ThemeProvider,
    CSSReset,
    Box,
    Stack,
    Button,
    Image,
    SimpleGrid,
    Flex,
    Heading,
    InputGroup,
    InputLeftElement,
    Icon,
    Input,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverArrow,
    PopoverCloseButton,
    PopoverHeader, PopoverBody, Avatar
} from "@chakra-ui/core";
import "../stylesheets/leftMenu.css";
import Channels from "./channels";
import ContentPage from "./contentPage";
import SubscriptionCard from "./subscriptionCard";

const initialState = (<Box> </Box>);
const reducer = (state, action) => {
    switch(action.type) {
        case "dashboard": {
            navProps.heading = "Dashboard";
            return (<Box/>);
        }
        case "channels": {
            navProps.heading = "Channels";
            return <Channels/>;
        }
        case "content": {
            navProps.heading = "Content";
            return <ContentPage/>;
        }
        case "subscriptions": {
            navProps.heading = "Subscriptions";
            return <SubscriptionCard newsletterName='Ask Leo'
                                     likedNumber="4"
                                     savedNumber='6'
                                     elements={3}
                                     titles={["Title 1", "Title 2", "Title 3"]}
                                     dates={["June 9th, 2020 10:37AM", "June 8th, 2020 10:37AM", "June 7th, 2020 10:37AM"]}
                                     activity={["Sent by source", "Read by me", "Sent by source"]}/>;
        }
        case "statistics": {
            navProps.heading = "Statistics";
            return (<Box>This is the statistics page!</Box>);
        }
    }
};

const navProps = {
    heading: "Dashboard",
    userName: "Valto",
    userImgUrl: "https://ca.slack-edge.com/TJ8BLJUMN-UHWUEGG10-8358a59801b9-512",
    notificationContent: "No New Notifications",
};

//unusable
React.openLeftMenu = () => {
    document.getElementById("leftMenu").style.display = "block";
    document.getElementById("mainPage").style.width = "100%";
};

export default function BarsCombo(){

    const [selectedComponent, dispatch] = useReducer(reducer, initialState);
    return (
        <SimpleGrid columns={2} gridTemplateColumns={"17% 83%"}>
            <Box backgroundColor={"#2b2737"} >

                <ThemeProvider>
                    <CSSReset />
                    <Box
                        backgroundColor="#2B2737">
                        <Stack spacing={0}>
                            <Box paddingTop={"30px"} paddingBottom={"30px"} color={"#FFFFFF"}>
                                <div className="leftMenu-row">
                                    <div className={"leftMenu-col-2"} >
                                        <Image size="40px" src="https://cdn.iconscout.com/icon/free/png-256/news-1445770-1224362.png"/>
                                    </div>
                                    <div className={"leftMenu-header leftMenu-col-2"}>
                                        NewsMuzzler
                                    </div>
                                </div>
                            </Box>

                            <Button onClick={() => dispatch({type: "dashboard"})} _hover={{background: "#534488", stroke: "#534488" }} backgroundColor="#2B2737" className={"leftMenu-btnTxt"} height="90px">
                                <div className={"leftMenu-row-btn"} >
                                    <Box size="20px">
                                        <Image src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/dashboard-icon-18-256.png"/>
                                    </Box>
                                    &nbsp;&nbsp; Dashboard
                                </div>
                            </Button>

                            <Button onClick={() => dispatch({type: "channels"})} _hover={{background: "#534488", stroke: "#534488" }} backgroundColor="#2B2737" className={"leftMenu-btnTxt"} height="90px">
                                <div className={"leftMenu-row-btn"} >
                                    <Box size="20px">
                                        <Image src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/64/png/channel-mosaic-icon-18-64.png"/>
                                    </Box>
                                    &nbsp;&nbsp; Channels
                                </div>
                            </Button>

                            <Button onClick={() => dispatch({type:"content"})} _hover={{background: "#534488", stroke: "#534488" }} backgroundColor="#2B2737" className={"leftMenu-btnTxt"} height="90px">
                                <div className={"leftMenu-row-btn"} >
                                    <Box size="20px">
                                        <Image src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/64/png/today-icon-18-64.png"/>
                                    </Box>
                                    &nbsp;&nbsp; Content
                                </div>
                            </Button>

                            <Button onClick={() => dispatch({type:"subscriptions"})} _hover={{background: "#534488", stroke: "#534488" }}  backgroundColor="#2B2737" className={"leftMenu-btnTxt"} height="90px">
                                <div className={"leftMenu-row-btn"} >
                                    <Box size="20px">
                                        <Image src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/64/png/contacts-2-icon-18-64.png"/>
                                    </Box>
                                    &nbsp;&nbsp; Subscriptions
                                </div>
                            </Button>

                            <Button onClick={() => dispatch({type:"statistics"})} _hover={{background: "#534488", stroke: "#534488" }}  backgroundColor="#2B2737" className={"leftMenu-btnTxt"} height="90px">
                                <div className={"leftMenu-row-btn"} >
                                    <Box size="20px">
                                        <Image src="https://www.iconsdb.com/icons/preview/white/statistics-xxl.png"/>
                                    </Box>
                                    &nbsp;&nbsp; Statistics
                                </div>
                            </Button>

                            <div>

                            </div>
                        </Stack>
                        <Box h={500}/>
                    </Box>
                </ThemeProvider>
            </Box>

                <Box backgroundColor={"#E5E5E5"}>
                        <div className={"row"}>
                            <Flex
                                as="nav"
                                align="center"
                                flexDirection={"row"}
                                // justify="space-between"
                                wrap="wrap"
                                padding="4px"
                                backgroundColor="#F2F2F2"
                                color="#000000"
                                height={"60px"}
                                boxShadow={"0px 0px 4px rgba(0, 0, 0, 0.25)"}
                                marginBottom={"2%"}
                            >
                                <box align="left" className={"col-2"}>
                                    <Heading onClick={React.openLeftMenu} as="h1" letterSpacing={""} fontSize={"20px"} color={"#000000"} paddingLeft={"10%"}>
                                        {navProps.heading}
                                    </Heading>
                                </box>

                                <div className={"col-6"}></div>
                                <Flex className={"col-4"} flexDirection={"row"} justifyContent={"space-around"} alignItems={"center"}>
                                    <Box >
                                        <InputGroup borderColor={"#6E61BF"}>
                                            <InputLeftElement children={<Icon name="search" color="#595959" />}  />
                                            <Input placeholder="Search" />
                                        </InputGroup>
                                    </Box>

                                    <Box
                                        // paddingLeft={'5%'}
                                    >
                                        <Popover>
                                            <PopoverTrigger>
                                                <Icon name={"bell"} size="24px"/>
                                            </PopoverTrigger>
                                            <PopoverContent zIndex={4}>
                                                <PopoverArrow />
                                                <PopoverCloseButton />
                                                <PopoverHeader>Notifications</PopoverHeader>
                                                <PopoverBody>{navProps.notificationContent}</PopoverBody>
                                            </PopoverContent>
                                        </Popover>
                                    </Box>

                                    <Box
                                        // mr={'4%'}
                                        borderRadius={"50%"}
                                        boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.29)"}
                                    >
                                        <Avatar name={navProps.userName} src={navProps.userImgUrl} />
                                    </Box>
                                </Flex>
                            </Flex>
                        </div>
                    {selectedComponent}
                </Box>
        </SimpleGrid>
    );

}

