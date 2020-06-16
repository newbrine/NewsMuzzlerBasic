import React from "react";
import {Box, SimpleGrid} from "@chakra-ui/core";
import TopNav from "./topNavBar";
import LeftMenu from "./leftMenu";
import {BrowserRouter as Router, Route, Switch, withRouter} from "react-router-dom";
import ContentCard from "./contentCard";
import Channels from "./channels";


export default class barsComboClass extends React.Component {
    render() {
        return (
            <Router>
               {/*Based on this Bars-Combo, we can start to work on our own tasks in the "Right Part" below.*/}
               {/*I suggest to copy the code below into our own stories to implement different pages, so that the code below can still guide any freshman in Prifina.*/}
               <SimpleGrid columns={2} gridTemplateColumns={'17% 83%'}>
                   <Box backgroundColor={'#2b2737'} >
                        <LeftMenu />
                   </Box>
                    <Box backgroundColor={'#E5E5E5'}>
                        <TopNav />
                        <Route path="/dashboard"/>
                        <Route path="/contentCard" component={ContentCard}/>
                        <Route path="/channels" component={Channels}/>
                        <Route path="/subscriptions">
                            <h1>
                                This is the subscriptions page!
                            </h1>
                        </Route>
                        <Route path="/statistics">
                            <h1>
                                This is the statistics page!
                            </h1>
                        </Route>
                    </Box>
                </SimpleGrid>
            </Router>
        );
    }
}