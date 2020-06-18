import React from 'react'
import { Box, Heading, Icon, Menu, MenuButton, MenuList, MenuItem, Text, Badge, Modal, ModalOverlay, ModalContent, 
    ModalFooter, ModalHeader, ModalBody, ModalCloseButton, Button, useDisclosure, Grid, Collapse } from '@chakra-ui/core'

export default function SubscriptionCard(props){
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [show, setShow] = React.useState(false);
    const handleToggle = () => setShow(!show);
    const newsletters = []

    for (let i = 0; i < props.elements; i++) {
        newsletters.push(<Grid templateColumns='28% 28% 28% 16%'>
                            <Box height='135px' textAlign='left' alignItems='top'>
                                    <Text> {props.titles[i]}</Text>
                            </Box>
                            <Box textAlign='left'>
                                <Heading as='h3' size='md'>Latest Activity</Heading>
                                <Text>{props.activity[i]}</Text>
                            </Box>
                            <Box textAlign='left'>
                                <Heading as='h3' size='md'>Date Sent</Heading>
                                <Text>{props.dates[i]}</Text>
                            </Box>
                            <Box justifyContent='center'>
                                <Button variant='link'>
                                    View Newsletter
                                </Button>
                            </Box>
                        </Grid>)
    }

    return(
        <div>
            <Box bg='white' w='95%'>
                <Grid templateColumns='28% 28% 28% 12% 4%'>
                    <Box height='135px' textAlign='left' alignItems='top'>
                        <Heading as='h3' size='md'> {props.newsletterName}</Heading>
                        <Text> {props.receivingEmail}</Text>
                    </Box>
                    <Box textAlign='left'>
                        <Heading as='h3' size='md'>Category</Heading>
                        <Badge variantColor='purple'>Category Type <Icon name='check' /></Badge>
                    </Box>
                    <Box textAlign='left'>
                        <Heading as='h3' size='md'>Statistics</Heading>
                        <Text># liked articles: {props.likedNumber}</Text>
                        <Text># saved articles: {props.savedNumber}</Text>
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
                                        Unsubscribing from this newsletter "newsletter-name" means that you will no longer recieve
                                        emails from "newsletter-name" to your subscriptions email "created-email" and your forwarding
                                        email "users-email"
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
                    <Button onClick={handleToggle}>
                        <Icon name='chevron-down'/>
                    </Button>
                </Box>
                <Collapse mt={4} isOpen={show} >
                    {newsletters}
                </Collapse>
            </Box>
        </div>
    )
}