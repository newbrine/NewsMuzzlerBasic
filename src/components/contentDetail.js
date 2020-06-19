import React from "react";
import {
    Avatar,
    Box,
    Flex,
    Heading,
    Icon,
    Image,
    Popover, PopoverArrow, PopoverBody, PopoverCloseButton,
    PopoverContent, PopoverHeader,
    PopoverTrigger,
    Stack,
    ThemeProvider,
    Button
} from "@chakra-ui/core";
import { AiOutlineSave, AiFillFacebook, AiFillLinkedin, AiFillTwitterSquare} from "react-icons/ai";
import "../stylesheets/contentDetailPage.css";

const contentDetailProps = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "card image",
    author: "Nicole Henley",
    authorImageUrl: "https://bit.ly/dan-abramov",
    title: "Exploring open source opportunities",
    subtitle: "Nicole Henley in Harvard Business Review",
    publishedDate: "May 22, 2020",
    timeToRead: "3",
    contentPreview: "Solutions for a new economy in the 21st century. Adoption and use of free and open source software in India has grown over the last...",
    content1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet ipsum aenean eu libero vestibulum mauris tellus. Mattis nam pellentesque vestibulum elit magnis iaculis. Orci, viverra nulla amet sem nec pulvinar cras. Euismod sit in dui elementum euismod tortor imperdiet. Vel massa a porta nisi turpis rhoncus euismod mi.",
    content2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis non suspendisse donec gravida. Aliquam lectus lectus quam in. Mattis quam bibendum amet, ut nunc. Viverra pellentesque est, enim fames varius viverra. Tellus nulla volutpat diam, volutpat phasellus justo nisl pharetra. Amet eu molestie pulvinar et. Congue elit aliquet lacus, at aliquam dui massa enim, dui. Gravida nulla et nunc, est ornare aliquam nunc sit in. Vestibulum vestibulum vitae.",
};

export default class ContentDetail extends React.Component {

    downloadTxtFile = () => {
        const element = document.createElement("a");
        const file = new Blob([
            "Title: " + contentDetailProps.title +"\n\n"+
            "Subtitle: " + contentDetailProps.subtitle +"\n\n"+
            "Author: " + contentDetailProps.author +"\n\n\n"+
            "Content: " + contentDetailProps.content1 +"\n"+ contentDetailProps.content2], {type: 'text/plain'});
        element.href = URL.createObjectURL(file);
        element.download = document.getElementById('myInput').value + ".txt";
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
    }

    render() {
        return (
            <ThemeProvider>
                <Stack
                    textAlign={'left'}
                    overflow="hidden"
                    margin={'-2% 9% 2% 4%'}
                    height={'100%'}
                >
                    <Heading as={'h3'} fontSize={'20px'} letterSpacing={'1px'} color={'#000000'}>
                        {contentDetailProps.title}
                    </Heading>

                    <Flex paddingTop={'1%'} paddingBottom={'1%'} height={'50px'} alignItems={'flex-start'} >
                        <Avatar
                            name={contentDetailProps.author}
                            src={contentDetailProps.authorImageUrl}
                            marginRight={'1%'}
                        />

                        <Box marginRight={'10%'} letterSpacing={'1px'}>
                            <Box color={'#595959'} fontSize={'16px'} paddingBottom={'4%'}>
                                {contentDetailProps.author}
                            </Box>
                            <Box as={'span'} color={'#8C8C8C'} fontSize="12px">
                                {contentDetailProps.publishedDate} &bull; {contentDetailProps.timeToRead} minute read
                            </Box>
                        </Box>

                        <Flex alignItems="center">
                            <Box>
                                <Popover placement="bottom">
                                    <PopoverTrigger>
                                        <Box className={'contentDetail-IconBox'}>
                                            <Box className={'contentDetail-Icon'} as={AiOutlineSave} />
                                        </Box>
                                    </PopoverTrigger>
                                    <PopoverContent zIndex={4}>
                                        <PopoverArrow />
                                        <PopoverCloseButton />
                                        <PopoverHeader className="PopoverHeader-custom">Save NewsLetter</PopoverHeader>
                                        <PopoverBody>
                                            <Stack width={"50%"} >
                                                <input id="myInput" />
                                                <Button onClick={this.downloadTxtFile} >Save</Button>
                                            </Stack>

                                        </PopoverBody>
                                    </PopoverContent>
                                </Popover>
                            </Box>

                            <Box >
                                <Popover>
                                    <PopoverTrigger>
                                        <Box className={'contentDetail-IconBox'}>
                                            <Icon className={'contentDetail-Icon'} name={'copy'} />
                                        </Box>
                                    </PopoverTrigger>
                                    <PopoverContent zIndex={4}>
                                        <PopoverArrow />
                                        <PopoverCloseButton />
                                        <PopoverBody>The content has been copied!</PopoverBody>
                                    </PopoverContent>
                                </Popover>
                            </Box>

                            <Box>
                                <Popover>
                                    <PopoverTrigger>
                                        <Box className={'contentDetail-IconBox'}>
                                            <Icon className={'contentDetail-Icon'} name={'email'} />
                                        </Box>
                                    </PopoverTrigger>
                                    <PopoverContent zIndex={4}>
                                        <PopoverArrow />
                                        <PopoverCloseButton />
                                        <PopoverHeader>Email</PopoverHeader>
                                        <PopoverBody>The content has been copied!</PopoverBody>
                                    </PopoverContent>
                                </Popover>
                            </Box>

                            <Box>
                                <Popover>
                                    <PopoverTrigger>
                                        <Box className={'contentDetail-IconBox'}>
                                            <Box className={'contentDetail-Icon'} as={AiFillFacebook} />
                                        </Box>
                                    </PopoverTrigger>
                                    <PopoverContent zIndex={4}>
                                        <PopoverArrow />
                                        <PopoverCloseButton />
                                        <PopoverHeader>Facebook</PopoverHeader>
                                        <PopoverBody>The content has been copied!</PopoverBody>
                                    </PopoverContent>
                                </Popover>
                            </Box>

                            <Box>
                                <Popover>
                                    <PopoverTrigger>
                                        <Box className={'contentDetail-IconBox'}>
                                            <Box className={'contentDetail-Icon'} as={AiFillLinkedin} />
                                        </Box>
                                    </PopoverTrigger>
                                    <PopoverContent zIndex={4}>
                                        <PopoverArrow />
                                        <PopoverCloseButton />
                                        <PopoverHeader>Facebook</PopoverHeader>
                                        <PopoverBody>The content has been copied!</PopoverBody>
                                    </PopoverContent>
                                </Popover>
                            </Box>

                            <Box>
                                <Popover>
                                    <PopoverTrigger>
                                        <Box className={'contentDetail-IconBox'}>
                                            <Box className={'contentDetail-Icon'} as={AiFillTwitterSquare} />
                                        </Box>
                                    </PopoverTrigger>
                                    <PopoverContent zIndex={4}>
                                        <PopoverArrow />
                                        <PopoverCloseButton />
                                        <PopoverHeader>Facebook</PopoverHeader>
                                        <PopoverBody>The content has been copied!</PopoverBody>
                                    </PopoverContent>
                                </Popover>
                            </Box>

                        </Flex>
                    </Flex>

                    <Stack className={"contentDetail-Body"} spacing={4}>
                        <Box>
                            {contentDetailProps.content1}
                        </Box>

                        <Box>
                            {contentDetailProps.content1}
                        </Box>

                        <Image
                            src={contentDetailProps.imageUrl}
                            alt={contentDetailProps.imageAlt}
                            width={'644px'}
                            height={'300px'}
                        />

                        <Box>
                            {contentDetailProps.content2}
                        </Box>

                        <Box>
                            {contentDetailProps.content2}
                        </Box>

                        <Box>
                            {contentDetailProps.content2}
                        </Box>
                    </Stack>

                </Stack>
            </ThemeProvider>
        );
    }
}