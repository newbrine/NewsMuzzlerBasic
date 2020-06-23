import React from "react";
import HorizontalContentCard from "./horizontalContentCard";
import {Box, Heading, SimpleGrid, Stack} from "@chakra-ui/core";
import RecommendContentCard from "./recommendContentCard";
import contentCardPreviewData from "../data/contentCardPreviewData";
import recommendContentCardData from "../data/recommendContentCardData";

export default class contentPage extends React.Component {

    render() {
        return (
                <Box id={"mainPage"} width={'100%'} backgroundColor={"#E5E5E5"} transition="width 1s">
                    <SimpleGrid columns={2} gridTemplateColumns={'80% 20%'}>
                        <Stack>
                            {
                                contentCardPreviewData.map((card, index) => {
                                    return <HorizontalContentCard key={index} {...card}/>
                                })
                            }
                        </Stack>

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

