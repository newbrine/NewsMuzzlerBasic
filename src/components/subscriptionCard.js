import React from 'react'
import { ThemeProvider, Box, Heading, SimpleGrid, Icon, Accordion, AccordionHeader, AccordionIcon, AccordionItem, AccordionPanel, Menu, 
    MenuButton, MenuList, MenuDivider, MenuItem, Text, Badge, Modal, ModalOverlay, ModalContent, ModalFooter, ModalHeader, ModalBody, 
    ModalCloseButton, Button, useDisclosure, Image } from '@chakra-ui/core'
import styled from '@emotion/styled'


export default function SubscriptionCard(props){
    const { isOpen, onOpen, onClose } = useDisclosure();
    return(
        <ThemeProvider>
            <div>
                <Accordion allowMultiple>
                <AccordionItem>
                        {({ isExpanded }) => (
                        <>
                            <AccordionHeader>
                                <SimpleGrid columns={4} spacing={10}>
                                    <Box width='300px' height='135px' textAlign='left' alignItems='top'>
                                        <Heading as='h3' size='md'> Newsletter Name</Heading>
                                        <Text> Optional email information.</Text>
                                    </Box>
                                    <Box width='300px' textAlign='left'>
                                        <Heading as='h3' size='md'>Category</Heading>
                                        <Badge variantColor='purple'>Category Type <Icon name='check' /></Badge>
                                    </Box>
                                    <Box width='300px' textAlign='left'>
                                        <Heading as='h3' size='md'>Statistics</Heading>
                                        <Text># liked articles: {props.likedNumber}</Text>
                                        <Text># saved articles: {props.savedNumber}</Text>
                                    </Box>
                                    <Box width='250px' justifyContent='center'>
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
                                </SimpleGrid>
                                <AccordionIcon />
                                &nbsp; &nbsp; &nbsp;
                                <Menu>
                                    <MenuButton
                                        px={1}
                                        py={1}
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
                            </AccordionHeader>
                            <AccordionPanel pb={4}>
                                <SimpleGrid columns={4} spacing={10}>
                                <Box width='300px' height='135px' textAlign='left' alignItems='top'>
                                        <Text> "Article Title Here"</Text>
                                    </Box>
                                    <Box width='300px' textAlign='left'>
                                        <Heading as='h3' size='md'>Latest Activity</Heading>
                                        <Text>Sent by source</Text>
                                    </Box>
                                    <Box width='300px' textAlign='left'>
                                        <Heading as='h3' size='md'>Date Sent</Heading>
                                        <Text>June 9th, 2020 10:37AM</Text>
                                    </Box>
                                    <Box width='300px' justifyContent='center'>
                                        <Button variant='link'>
                                            View Newsletter
                                        </Button>
                                    </Box>
                                </SimpleGrid>
                            </AccordionPanel>
                            <AccordionPanel pb={4}>
                                <SimpleGrid columns={4} spacing={10}>
                                <Box width='300px' height='135px' textAlign='left' alignItems='top'>
                                        <Text> "Article Title Here"</Text>
                                    </Box>
                                    <Box width='300px' textAlign='left'>
                                        <Heading as='h3' size='md'>Latest Activity</Heading>
                                        <Text>Sent by source</Text>
                                    </Box>
                                    <Box width='300px' textAlign='left'>
                                        <Heading as='h3' size='md'>Date Sent</Heading>
                                        <Text>June 9th, 2020 10:37AM</Text>
                                    </Box>
                                    <Box width='300px' justifyContent='center'>
                                        <Button variant='link'>
                                            View Newsletter
                                        </Button>
                                    </Box>
                                </SimpleGrid>
                            </AccordionPanel>
                            <AccordionPanel pb={4}>
                                <SimpleGrid columns={4} spacing={10}>
                                <Box width='300px' height='135px' textAlign='left' alignItems='top'>
                                        <Text> "Article Title Here"</Text>
                                    </Box>
                                    <Box width='300px' textAlign='left'>
                                        <Heading as='h3' size='md'>Latest Activity</Heading>
                                        <Text>Sent by source</Text>
                                    </Box>
                                    <Box width='300px' textAlign='left'>
                                        <Heading as='h3' size='md'>Date Sent</Heading>
                                        <Text>June 9th, 2020 10:37AM</Text>
                                    </Box>
                                    <Box width='300px' justifyContent='center'>
                                        <Button variant='link'>
                                            View Newsletter
                                        </Button>
                                    </Box>
                                </SimpleGrid>
                            </AccordionPanel>
                        </>
                        )}
                    </AccordionItem>
                </Accordion>
            </div>
        </ThemeProvider>
    )
}