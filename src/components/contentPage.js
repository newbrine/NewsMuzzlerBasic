import React from "react";
import LeftMenu from "./leftMenu";
import TopNav from "./topNavBar";
import HorizontalContentCard from "./horizontalContentCard";
import {Box, Heading, SimpleGrid, Stack} from "@chakra-ui/core";
import RecommendContentCard from "./recommendContentCard";

export default class contentPage extends React.Component {
    render() {
        return (
            <SimpleGrid id={"MainPage-SimpleGrid"} columns={2} gridTemplateColumns={'17% 83%'}>
                {/*Left Part*/}
                <Box id={"leftMenu"} backgroundColor={'#2b2737'} >
                    <LeftMenu />
                </Box>

                {/*Right Part*/}
                <Box id={"mainPage"} backgroundColor={'#E5E5E5'}>
                    <TopNav />
                    <SimpleGrid columns={2} gridTemplateColumns={'80% 20%'}>
                        <Stack>
                            <HorizontalContentCard />
                            <HorizontalContentCard />
                            <HorizontalContentCard />
                            <HorizontalContentCard />
                            <HorizontalContentCard />

                        </Stack>

                        <Stack className={'recommendation-list'} >
                            <Heading as="h3" size="lg" fontSize={'20px'} marginTop={'-2.5%'} letterSpacing={'0px'} fontFamily={'Arial,Helvetica,sans-serif'}>
                                Based on your history
                            </Heading>

                            <RecommendContentCard />
                            <RecommendContentCard />

                        </Stack>
                    </SimpleGrid>
                </Box>
            </SimpleGrid>
        );
    }
}