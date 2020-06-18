import React from "react";
import { Box, Heading, Icon, Menu, MenuButton, MenuList, MenuItem, Text, Badge, Modal, ModalOverlay, ModalContent, 
    ModalFooter, ModalHeader, ModalBody, ModalCloseButton, Button, useDisclosure, Grid, Collapse } from "@chakra-ui/core";

export default function SubscriptionCard(props){
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [show, setShow] = React.useState([false, false]);
    const toggleShow = (item) => e => {
        let newArr = [...show];
        newArr[item] = !show[item];
        setShow(newArr);
    };

    const newsletters = props.information.map((content) =>
    <>
    <Grid padding='20px' templateColumns='28% 28% 28% 12% 4%' key={content.id}>
        <Box height='135px' textAlign='left' alignItems='top'>
            <Heading as='h3' size='md'> {content.name}</Heading>
            <Text> {content.receivingEmail}</Text>
        </Box>
        <Box textAlign='left'>
            <Heading as='h3' size='md'>Category</Heading>
            <Badge variantColor='purple'>Category Type <Icon name='check' /></Badge>
        </Box>
        <Box textAlign='left'>
            <Heading as='h3' size='md'>Statistics</Heading>
            <Text># liked articles: {content.likedNumber}</Text>
            <Text># saved articles: {content.savedNumber}</Text>
        </Box>
        <Box justifyContent='center' alignContent='center'>
            <Button variant='link' onClick={onOpen}>Unsubscribe</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Unsubscribe?</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text>
                            Unsubscribing from this newsletter "{content.name}" means that you will no longer recieve
                            emails from "{content.name}" to your subscriptions email "{content.subscriptionEmail}" and your forwarding
                            email "{content.forwardingEmail}"
                        </Text>
                    </ModalBody>

                    <ModalFooter>
                        <Button variant='ghost' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button variantColor='purple'>Yes, unsubscribe</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
        <Menu justifyContent='flex-end'>
            <MenuButton
                px={1}
                py={1}
                height='25%'
                width='55%'
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
                    <Icon name='edit' />
                    &nbsp;&nbsp;Modify Subscription
                </MenuItem>
            </MenuList>
        </Menu>
    </Grid>
    <Box display='flex' justifyContent='center'>
        <Button onClick={toggleShow(content.id-1)}>
            <Icon name='chevron-down'/>
        </Button>
    </Box>
    <Collapse mt={4} isOpen={show[content.id-1]} >
        {content.contents.map((item) => 
        <Grid templateColumns='28% 28% 28% 16%' key={item.id}>
            <Box height='135px' textAlign='left' alignItems='top'>
                <Text> {item.title}</Text>
            </Box>
            <Box textAlign='left'>
                <Heading as='h3' size='md'>Latest Activity</Heading>
                <Text>{item.activity}</Text>
            </Box>
            <Box textAlign='left'>
                <Heading as='h3' size='md'>Date Sent</Heading>
                <Text>{item.date}</Text>
            </Box>
            <Box justifyContent='center'>
                <Button variant='link'>
                    View Newsletter
                </Button>
            </Box>
        </Grid>
        )}
    </Collapse>
    </>
    );


    return(
        <div>
            <Box bg='#a8a6b9' w='95%'>
                {newsletters}
            </Box>
        </div>
    );
}