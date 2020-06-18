import React from "react";
import LeftMenu from "./leftMenu";
import TopNav from "./topNavBar";
import { SimpleGrid, Box } from "@chakra-ui/core";
import SubscriptionCard from "./subscriptionCard";

export default function Subscriptions(props){
    {return(
        <SimpleGrid columns={2} gridTemplateColumns={"17% 83%"}>
            {/*Left Column*/}
            <Box backgroundColor={"#2b2737"} >
                <LeftMenu heading='Subcription'/>
            </Box>

            {/*Right Column*/}
            <Box backgroundColor={"#f2f2f2"}>
                <TopNav heading='Subcriptions'/>
                <Box paddingLeft='20px'>
                    <Box>
                        <SubscriptionCard information={props.information}/>
                    </Box>
                </Box>
            </Box>
        </SimpleGrid>
    );}
}