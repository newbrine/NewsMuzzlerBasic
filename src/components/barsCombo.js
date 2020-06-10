import React from "react";
import {Box, SimpleGrid} from "@chakra-ui/core";
import TopNav from "./topNavBar";
import LeftMenu from "./leftMenu";

export default class barsComboClass extends React.Component {
    render() {
        return (
           // Based on this Bars-Combo, we can start to work on our own tasks in the "Right Part" below.
           // I suggest to copy the code below into our own stories to implement different pages, so that the code below can still guide any freshman in Prifina.
           <SimpleGrid columns={2} gridTemplateColumns={'17% 83%'}>
                {/*Left Part*/}
                <Box backgroundColor={'#2b2737'} >
                    <LeftMenu />
                </Box>

                {/*Right Part*/}
                <Box backgroundColor={'#E5E5E5'}>
                    <TopNav />
                </Box>
            </SimpleGrid>
        );
    }
}