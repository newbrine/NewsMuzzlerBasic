import React from "react";
import {
    Box, Heading, Icon, Menu, MenuButton, MenuList, MenuItem, Text, Badge, Modal, ModalOverlay, ModalContent,
    ModalFooter, ModalHeader, ModalBody, ModalCloseButton, Button, useDisclosure, Grid, Collapse, ThemeProvider, Image
} from "@chakra-ui/core";
import "../stylesheets/channelsMain.css";
import "../stylesheets/subscriptionCard.css";

export default function SubscriptionCard(){
    const { isOpen, onOpen, onClose } = useDisclosure();
    const buttons = [
        {id:1, buttonState: false},
        {id:2, buttonState: false},
        {id:3, buttonState: false},
        {id:4, buttonState: false},
    ];
    const [buttonStatus, setStatus] = React.useState(buttons);

    const updateStatus = index => e => {
        let newArr = [...buttonStatus]; // copying the old datas array
        newArr[index] = {id:index, buttonState: !newArr[index].buttonState};// replace new value with whatever we want to change it to
        setStatus(newArr);
    };

    const buttonsToggle = buttonStatus.map((button, index) =>(
        <Button key={button.id} mb="10px" _hover={{border:"1px solid rgba(168, 166, 185, 0.5)", borderRadius:"5px"}} size="25px" backgroundColor="#E8E8E8" onClick={updateStatus(index)} >
            <Box size="15px" textAlign="center">
                <Image src= {button.buttonState? "https://img.icons8.com/metro/72/expand-arrow.png": "https://img.icons8.com/metro/2x/collapse-arrow.png"}></Image>
            </Box>
        </Button>)
    );

    const subscriptionsArray = [
        {id: 1, newsletterName: "Ask Leo", likedNumber: "4", savedNumber: "6", receivingEmail: "Work Email",
            titles: ['"How do I Back Up my Computer?"', '"How do I remove malware?"', '"Dealing with browser problems"'], SubscriptionCarddates: ["June 9th, 2020 10:37AM", "June 8th, 2020 10:37AM", "June 7th, 2020 10:37AM"],
            activity: ["Sent by source", "Read by me", "Sent by source"], dates: ["January 22, 2019, 4:08 PM", "January 22, 2019, 4:08 PM", "January 22, 2019, 4:08 PM"]},
        {id: 2, newsletterName: "Harvard Business Review", likedNumber: "4", savedNumber: "6", receivingEmail: "Work Email",
            titles: ['"How do I Back Up my Computer?"', '"How do I remove malware?"', '"Dealing with browser problems"'],  SubscriptionCarddates: ["June 9th, 2020 10:37AM", "June 8th, 2020 10:37AM", "June 7th, 2020 10:37AM"],
            activity: ["Sent by source", "Read by me", "Sent by source"], dates: ["January 22, 2019, 4:08 PM", "January 22, 2019, 4:08 PM", "January 22, 2019, 4:08 PM"]},
        {id: 3, newsletterName: "The Skim", likedNumber: "8", savedNumber: "6", receivingEmail: "Work Email",
            titles: ['"How do I Back Up my Computer?"', '"How do I remove malware?"', '"Dealing with browser problems"'],  SubscriptionCarddates: ["June 9th, 2020 10:37AM", "June 8th, 2020 10:37AM", "June 7th, 2020 10:37AM"],
            activity: ["Sent by source", "Read by me", "Sent by source"], dates: ["January 22, 2019, 4:08 PM", "January 22, 2019, 4:08 PM", "January 22, 2019, 4:08 PM"]},
        {id: 4, newsletterName: "The news times", likedNumber: "20", savedNumber: "6", receivingEmail: "Work Email",
            titles: ['"How do I Back Up my Computer?"', '"How do I remove malware?"', '"Dealing with browser problems"'],  SubscriptionCarddates: ["June 9th, 2020 10:37AM", "June 8th, 2020 10:37AM", "June 7th, 2020 10:37AM"],
            activity: ["Sent by source", "Read by me", "Sent by source"], dates: ["January 22, 2019, 4:08 PM", "January 22, 2019, 4:08 PM", "January 22, 2019, 4:08 PM"]},
    ];

    const subscriptions = subscriptionsArray.map((subscrip,idx) =>
        <Box key={subscrip.id} pt="20px">
            <Box className={"badge"} ml="50px" mb="10px" mt="10px">
                {subscrip.newsletterName.charAt(0)}
            </Box>
            <Box backgroundColor="#E8E8E8" borderRadius="6px" ml="50px" mr="80px" alignContent="right" >
                <Grid templateColumns="28% 28% 28% 12% 4%">
                    <Box height="135px" textAlign="left" alignItems="top">
                        <Heading pl="30px" pt="20px" as="h3" size="md"> {subscrip.newsletterName}</Heading>
                        <Text fontSize="18px" pl="30px" pt="15px"> {subscrip.receivingEmail}</Text>
                    </Box>
                    <Box textAlign="left">
                        <Heading pt="20px" as="h3" size="md">Category</Heading>
                        <Button mt="15px" size= "xs" backgroundColor="#6E61BF" _hover={{ bg: "#F2F2F2", color: "#595959" }} className={"channelsMain-Btn channelsMain-xsBtnTxt"}>Technology √</Button>
                    </Box>
                    <Box textAlign="left">
                        <Heading pl="20px" pt="20px" as="h3" size="md">Statistics</Heading>
                        <Text fontSize="18px" pt="15px"># liked articles: {subscrip.likedNumber}</Text>
                        <Text fontSize="18px" pt="15px"># saved articles: {subscrip.savedNumber}</Text>
                    </Box>
                    <Box justifyContent="center" alignContent="center">
                        <Button fontSize="20px" pt="22px" color="#1890FF" variant="link" onClick={onOpen}>Unsubscribe</Button>

                        <Modal isOpen={isOpen} onClose={onClose}>
                            <ModalOverlay />
                            <ModalContent>
                                <ModalHeader>Unsubscribe?</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>
                                    <Text>
                                        Unsubscribing from this newsletter "newsletter-name" means that you will no longer receive
                                        emails from 'newsletter-name' to your subscriptions email 'created-email' and your forwarding
                                        email 'users-email'
                                    </Text>
                                </ModalBody>

                                <ModalFooter>
                                    <Button variant="ghost" mr={3} onClick={onClose}>
                                        Cancel
                                    </Button>
                                    <Button variantColor="purple">Yes, unsubscribe</Button>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>
                    </Box>
                    <Menu justifyContent="flex-end">
                        <MenuButton
                            px={1}
                            py={1}
                            height="25%"
                            width="55%"
                            transition="all 0.2s"
                            rounded="md"
                            borderWidth="1px"
                            _hover={{ bg: "gray.100" }}
                            _expanded={{ bg: "red.200" }}
                            _focus={{ outline: 0, boxShadow: "outline" }}
                        >
                            <Icon name="settings" />
                        </MenuButton>
                        <MenuList>
                            <MenuItem>
                                <Icon name="edit" />
                                &nbsp;&nbsp;Modify Subscription
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Grid>
                <Box display="flex" justifyContent="center">
                    {buttonsToggle[idx]}
                </Box>
                <Collapse mt={4} isOpen={buttonStatus[idx].buttonState} >
                    {
                        subscrip.titles.map((title, index) =>
                            <Box backgroundColor="#E8E8E8" border="1px solid rgba(168, 166, 185, 0.5)" borderRadius="6px">
                                <Grid templateColumns="28% 28% 28% 16%">
                                    <Box pl="30px" pt="20px" height="135px" textAlign="left" alignItems="top">
                                        <Text fontSize="18px" pt="15px"> {title}</Text>
                                    </Box>
                                    <Box pt="20px" textAlign="left">
                                        <Heading as="h3" size="md">Latest Activity</Heading>
                                        <Text fontSize="18px" pt="15px">{subscrip.activity[index]}</Text>
                                    </Box>
                                    <Box pt="20px" textAlign="left">
                                        <Heading as="h3" size="md">Date Sent</Heading>
                                        <Text fontSize="18px" pt="15px">{subscrip.dates[index]}</Text>
                                    </Box>
                                    <Box pt="20px" justifyContent="center">
                                        <Button fontSize="20px" color="#1890FF" variant="link">
                                            View Newsletter
                                        </Button>
                                    </Box>
                                </Grid>
                            </Box>
                        )
                    }
                </Collapse>
            </Box>
        </Box>
    );

    return(
        <ThemeProvider>
            {subscriptions}
        </ThemeProvider>

    );
}