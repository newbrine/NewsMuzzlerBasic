import React from "react";
import TopNavBar from "./topNavBar";
import {Box, Heading, SimpleGrid, Stack} from "@chakra-ui/core";
import ContentDetail from "./contentDetail";
import recommendContentCardData from "../data/recommendContentCardData";
import RecommendContentCard from "./recommendContentCard";

export default class contentDetailPage extends React.Component {
    render() {
        return (
            <Box backgroundColor={'#f2f2f2'}>
                <TopNavBar />
                <SimpleGrid columns={2} gridTemplateColumns={'83% 17%'} >
                    {/*Left Part*/}
                    <Box >
                        <ContentDetail />
                    </Box>

                    {/*Right Part*/}
                    <Stack className={'recommendation-list'} >
                        <Heading as="h3" size="lg" fontSize={'20px'} marginTop={'-2.5%'} letterSpacing={'0px'} fontFamily={'Arial,Helvetica,sans-serif'}>
                            Based on your history
                        </Heading>
                        {
                            recommendContentCardData.map((card, index) => {
                                return <RecommendContentCard {...card}/>
                            })
                        }
                    </Stack>
                </SimpleGrid>
            </Box>
        );
    }
}
