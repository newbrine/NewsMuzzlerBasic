import React, { useReducer } from 'react';
import {ThemeProvider, CSSReset, Box, Stack, Button, Image} from '@chakra-ui/core';
import "../stylesheets/leftMenu.css";


export default function LeftMenu () {
    const initialState = (<Box> </Box>);
    const reducer = (state, action) => {
        switch(action.type) {
            case 'dashboard':
                return (<Box>This is the dashboard!</Box>);
            case 'channels':
                return (<Box>This is the channels!</Box>);
            case 'content':
                return (<Box>This is the content!</Box>);
            case 'subscriptions':
                return (<Box>This is the subscriptions!</Box>);
            case 'statistics':
                return (<Box>This is the statistics!</Box>);
        }
    }
    const [state, dispatch1] = useReducer(reducer, initialState);
    const routeToDashboard = () => dispatch1({ type: 'dashboard' });
    return (
        <ThemeProvider>
            <CSSReset />
                <Box
                    // width={["100%", "40%", "20%"]}
                    backgroundColor="#2B2737">
                    <Box>
                        {state}
                    </Box>

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

                        <Button onClick={routeToDashboard} _hover={{background: "#534488", stroke: "#534488" }} backgroundColor="#2B2737" className={"leftMenu-btnTxt"} height="90px">
                            <div className={"leftMenu-row-btn"} >
                                <Box size="20px">
                                    <Image src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/dashboard-icon-18-256.png"></Image>
                                </Box>
                                    &nbsp;&nbsp; Dashboard
                            </div>
                        </Button>

                        <Button onClick={() => dispatch1({ type: 'channels' })} _hover={{background: "#534488", stroke: "#534488" }} backgroundColor="#2B2737" className={"leftMenu-btnTxt"} height="90px">
                            <div className={"leftMenu-row-btn"} >
                                <Box size="20px">
                                    <Image src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/64/png/channel-mosaic-icon-18-64.png"></Image>
                                </Box>
                                    &nbsp;&nbsp; Channels
                            </div>
                        </Button>

                        <Button onClick={() => dispatch1({ type: 'content' })} _hover={{background: "#534488", stroke: "#534488" }} backgroundColor="#2B2737" className={"leftMenu-btnTxt"} height="90px">
                            <div className={"leftMenu-row-btn"} >
                                <Box size="20px">
                                    <Image src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/64/png/today-icon-18-64.png"></Image>
                                </Box>
                                    &nbsp;&nbsp; Content
                            </div>
                        </Button>

                        <Button onClick={() => dispatch1({ type: 'subscriptions' })} _hover={{background: "#534488", stroke: "#534488" }}  backgroundColor="#2B2737" className={"leftMenu-btnTxt"} height="90px">
                            <div className={"leftMenu-row-btn"} >
                                <Box size="20px">
                                    <Image src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/64/png/contacts-2-icon-18-64.png"></Image>
                                </Box>
                                    &nbsp;&nbsp; Subscriptions
                            </div>
                        </Button>


                        <Button onClick={() => dispatch1({ type: 'statistics' })} _hover={{background: "#534488", stroke: "#534488" }}  backgroundColor="#2B2737" className={"leftMenu-btnTxt"} height="90px">
                            <div className={"leftMenu-row-btn"} >
                                <Box size="20px">
                                    <Image src="https://www.iconsdb.com/icons/preview/white/statistics-xxl.png"></Image>
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

        );
}

