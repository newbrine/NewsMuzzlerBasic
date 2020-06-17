import React, { useReducer } from "react";
import {ThemeProvider, CSSReset, Box, Stack, Button, Image, SimpleGrid} from "@chakra-ui/core";
import "../stylesheets/leftMenu.css";
import TopNav from "./topNavBar";
import Channels from "./channels";
import ContentCard from "./contentCard";

export default function BarsCombo () {
    const initialState = (<Box> </Box>);
    const reducer = (state, action) => {
        switch(action.type) {
            case "dashboard":
                return (<Box/>);
            case "channels":
                return <Channels/>;
            case "content":
                return <ContentCard/>;
            case "subscriptions":
                return (<Box>This is the subscriptions page!</Box>);
            case "statistics":
                return (<Box>This is the statistics page!</Box>);
        }
    };
    const [selectedComponent, dispatch] = useReducer(reducer, initialState);
    return (
        <SimpleGrid columns={2} gridTemplateColumns={"17% 83%"}>
            <Box backgroundColor={"#2b2737"} >

                <ThemeProvider>
                    <CSSReset />
                    <Box
                        // width={["100%", "40%", "20%"]}
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
                    <TopNav />
                    {selectedComponent}
                </Box>
        </SimpleGrid>
    );
}

