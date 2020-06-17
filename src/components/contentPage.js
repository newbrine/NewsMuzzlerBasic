import React from "react";
import LeftMenu from "./leftMenu";
import TopNav from "./topNavBar";
import HorizontalContentCard from "./horizontalContentCard";
import {Box, Heading, SimpleGrid, Stack, Flex} from "@chakra-ui/core";
import RecommendContentCard from "./recommendContentCard";
import contentCardPreviewData from "../data/contentCardPreviewData";
import recommendContentCardData from "../data/recommendContentCardData";

export default class contentPage extends React.Component {


    render() {
        return (
            <Flex id={"MainPage-SimpleGrid"}>
                {/*Left Part*/}
                <Box id={"leftMenu"} width={'17%'} transition={"width 1s"} backgroundColor={'#2b2737'}>
                    <LeftMenu  />
                </Box>

                {/*Right Part*/}
                <Box id={"mainPage"} width={'83%'} backgroundColor={'#E5E5E5'} transition="width 1s">
                    <TopNav />
                    <SimpleGrid columns={2} gridTemplateColumns={'80% 20%'}>
                        <Stack>
                            {
                                contentCardPreviewData.map((card, index) => {
                                    return <HorizontalContentCard {...card} />
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
            </Flex>
        );
    }
}

// export default class contentPage extends React.Component {
//
//     // const contentCards = contentCardPreviewData.map((card, index) =>
//     //     <HorizontalContentCard key={index} />
//     // );
//
//     render() {
//         return (
//             <SimpleGrid id={"MainPage-SimpleGrid"} columns={2} gridTemplateColumns={'17% 83%'}>
//                 {/*Left Part*/}
//                 <Box id={"leftMenu"} backgroundColor={'#2b2737'}>
//                     <LeftMenu />
//                 </Box>
//
//                 {/*Right Part*/}
//                 <Box id={"mainPage"} backgroundColor={'#E5E5E5'} transition="width .5s">
//                     <TopNav />
//                     <SimpleGrid columns={2} gridTemplateColumns={'80% 20%'}>
//                         <Stack>
//                             {
//                                 contentCardPreviewData.map((card, index) => {
//                                     return <HorizontalContentCard
//                                         {...card}
//                                     />
//                                 })
//                             }
//                             {/*<HorizontalContentCard />*/}
//                             {/*<HorizontalContentCard />*/}
//                             {/*<HorizontalContentCard />*/}
//                             {/*<HorizontalContentCard />*/}
//                             {/*<HorizontalContentCard />*/}
//
//                         </Stack>
//
//                         <Stack className={'recommendation-list'} >
//                             <Heading as="h3" size="lg" fontSize={'20px'} marginTop={'-2.5%'} letterSpacing={'0px'} fontFamily={'Arial,Helvetica,sans-serif'}>
//                                 Based on your history
//                             </Heading>
//                             {
//                                 recommendContentCardData.map((card, index) => {
//                                     return <RecommendContentCard {...card}/>
//                                 })
//                             }
//                             {/*<RecommendContentCard />*/}
//                             {/*<RecommendContentCard />*/}
//
//                         </Stack>
//                     </SimpleGrid>
//                 </Box>
//             </SimpleGrid>
//         );
//     }
// }