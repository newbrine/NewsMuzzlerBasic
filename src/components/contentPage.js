import React from "react";
import LeftMenu from "./leftMenu";
import TopNav from "./topNavBar";
import {Box, Heading, SimpleGrid, Stack} from "@chakra-ui/core";

export default class contentPage extends React.Component {
    render() {
        return (
            <SimpleGrid columns={2} gridTemplateColumns={'17% 83%'}>
                {/*Left Part*/}
                <Box backgroundColor={'#2b2737'} >
                    <LeftMenu />
                </Box>

                {/*Right Part*/}
                <Box backgroundColor={'#E5E5E5'}>
                    <TopNav />
                    <SimpleGrid columns={2} gridTemplateColumns={'80% 20%'}>
                        <Stack className={'content-card'} spacing={8}>

                        </Stack>

                        <Stack className={'recommendation-list'} spacing={8}>
                            <Heading as="h3" size="lg" fontSize={'20px'}>Based on your history</Heading>
                        </Stack>
                    </SimpleGrid>
                </Box>
            </SimpleGrid>
        );
    }
}