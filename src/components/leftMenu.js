import React from 'react';
import {ThemeProvider, CSSReset, Box, Stack, Button, Image} from '@chakra-ui/core';
import "../stylesheets/leftMenu.css";
import ContentCard from "./contentCard";
import { Route, Link } from 'react-router-dom';


export default function LeftMenu () {
    // render() {

    return (

                <ThemeProvider>
                    <CSSReset />

                <Box
                    // width={["100%", "40%", "20%"]}
                    backgroundColor="#2B2737">

                    <Stack spacing={0}>

                        <Box paddingTop={'30px'} paddingBottom={'30px'} color={'#FFFFFF'}>
                            <div className="leftMenu-row">
                                <div className={"leftMenu-col-2"} >
                                    <Image  size="40px" src="https://cdn.iconscout.com/icon/free/png-256/news-1445770-1224362.png"></Image>
                                </div>
                                <div className={"leftMenu-header leftMenu-col-2"}>
                                    NewsMuzzler
                                </div>
                            </div>
                        </Box>

                        <Button _hover={{background: "#534488", stroke: "#534488" }} backgroundColor="#2B2737" className={"leftMenu-btnTxt"} height="90px">
                            <div className={"leftMenu-row-btn"} >
                                <Box size="20px">
                                    <Image src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/dashboard-icon-18-256.png"></Image>
                                </Box>
                                <Link to="/dashboard">
                                    &nbsp;&nbsp; Dashboard
                                </Link>
                            </div>
                        </Button>

                        <Button _hover={{background: "#534488", stroke: "#534488" }} backgroundColor="#2B2737" className={"leftMenu-btnTxt"} height="90px">
                            <div className={"leftMenu-row-btn"} >
                                <Box size="20px">
                                    <Image src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/64/png/channel-mosaic-icon-18-64.png"></Image>
                                </Box>
                                <Link to="/channels">
                                    &nbsp;&nbsp; Channels
                                </Link>
                            </div>
                        </Button>

                        <Button _hover={{background: "#534488", stroke: "#534488" }} backgroundColor="#2B2737" className={"leftMenu-btnTxt"} height="90px">
                            <div className={"leftMenu-row-btn"} >
                                <Box size="20px">
                                    <Image src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/64/png/today-icon-18-64.png"></Image>
                                </Box>
                                <Link to="/contentCard">
                                    &nbsp;&nbsp; Content
                                </Link>
                            </div>
                        </Button>

                        <Button _hover={{background: "#534488", stroke: "#534488" }}  backgroundColor="#2B2737" className={"leftMenu-btnTxt"} height="90px">
                            <div className={"leftMenu-row-btn"} >
                                <Box size="20px">
                                    <Image src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/64/png/contacts-2-icon-18-64.png"></Image>
                                </Box>
                                <Link to="/subscriptions">
                                    &nbsp;&nbsp; Subscriptions
                                </Link>
                            </div>
                        </Button>


                        <Button _hover={{background: "#534488", stroke: "#534488" }}  backgroundColor="#2B2737" className={"leftMenu-btnTxt"} height="90px">
                            <div className={"leftMenu-row-btn"} >
                                <Box size="20px">
                                    <Image src="https://www.iconsdb.com/icons/preview/white/statistics-xxl.png"></Image>
                                </Box>
                                <Link to="/statistics">
                                    &nbsp;&nbsp; Statistics
                                </Link>
                            </div>
                        </Button>

                        <div>

                        </div>
                    </Stack>

                    <Box h={500}/>
                </Box>

                </ThemeProvider>

        );
    // }
}