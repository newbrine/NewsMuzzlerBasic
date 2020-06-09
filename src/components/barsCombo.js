import React from "react";
import {Box, SimpleGrid} from "@chakra-ui/core";
import {DrawerExample} from "./drawer";
import TopNav from "./topNavBar";

export default class barsComboClass extends React.Component {
    render() {
        return (
            <SimpleGrid columns={2} gridTemplateColumns={'19% 81%'}>
                {/*Left Part*/}
                <Box >
                    <DrawerExample />
                </Box>

                {/*Right Part*/}
                <Box >
                    <TopNav />
                </Box>
            </SimpleGrid>
        );
    }
}