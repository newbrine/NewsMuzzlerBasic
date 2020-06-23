import React from "react";
import {Box, ThemeProvider, Flex, Collapse, Button, IconButton} from "@chakra-ui/core";
import LazyLoad from 'react-lazyload';
import ContentDetail from "./contentDetail";

function HorizontalContentCard(props) {
    const [show, setShow] = React.useState(false);

    const closeLeftMenu = () => {
        document.getElementById("leftMenu").style.width = "4%";
        document.getElementById("mainPage").style.width = "96%";
        var leftMenu = document.getElementById("leftMenu-root");
        var leftMenu_Descriptions = leftMenu.getElementsByClassName("leftMenu-description");
        var i;
        for (i = 0; i < leftMenu_Descriptions.length; i++) {
            console.log(i);
            leftMenu_Descriptions[i].style.color = "transparent";
        }
    }

    const closeOrOpenCard = () => setShow(!show);

    const handleClickHCard = () => {
        closeLeftMenu();
        closeOrOpenCard();
    }

    return(
        <ThemeProvider>
            <Flex
                as={'button'}
                textAlign={'left'}
                rounded="lg"
                overflow="hidden"
                background={'#FFFFFF'}
                boxShadow={'0px 1px 4px rgba(0, 0, 0, 0.16), 0px 0px 2px rgba(0, 0, 0, 0.08)'}
                borderRadius={'2px'}
                margin={'0% 2% 2% 2%'}
                height={'160px'}
                width="96%"
                onClick={handleClickHCard}
            >
                <LazyLoad>
                    <img src={props.imageUrl} alt={props.imageAlt} style={{width:'260px', height:'160px'}}/>
                </LazyLoad>

                <Box padding="2" paddingLeft={'4'} width="70%">
                    <Box
                        color={'#000000'}
                        marginTop="0"
                        fontWeight={'semibold'}
                        fontSize={'20px'}
                        lineHeight="28px"
                        isTruncated
                        letterSpacing={'1px'}
                    >
                        {props.title}
                    </Box>

                    <Box display="flex" alignItems="baseline">
                        <Box
                            color={'#595959'}
                            fontWeight="semibold"
                            letterSpacing="wide"
                            fontSize="16px"
                            lineHeight={'24px'}
                            textTransform="uppercase"
                        >
                            {props.subtitle}
                        </Box>
                    </Box>

                    <Box>
                        <Box as="span" color={'#8C8C8C'} fontSize="sm">
                            {props.publishedDate} &bull; {props.timeToRead} minute read
                        </Box>
                    </Box>

                    <Box display="flex" alignItems="center">
                        <Box as="span" color={'#595959'} fontSize="sm">
                            {props.contentPreview}
                        </Box>
                    </Box>
                </Box>
            </Flex>

            <Collapse mt={4} isOpen={show}>
                <ContentDetail />
                <IconButton aria-label={"triangle-up"} icon="triangle-up"
                            isRound={"true"}
                            position="fixed" bottom={"0"} right={"20%"}
                            backgroundColor={"rgba(52, 52, 52, 0.8)"}
                            onClick={closeOrOpenCard}
                />
            </Collapse>
        </ThemeProvider>
    )
}

export default class HorizontalCardMain extends React.Component {
    render() {
        return (
            <HorizontalContentCard {...this.props}/>
        )
    }
}

// export default class HorizontalContentCard extends React.Component {
//
//     closeLeftMenu = () => {
//         document.getElementById("leftMenu").style.width = "4%";
//         document.getElementById("mainPage").style.width = "96%";
//         var leftMenu = document.getElementById("leftMenu-root");
//         var leftMenu_Descriptions = leftMenu.getElementsByClassName("leftMenu-description");
//         var i;
//         for (i = 0; i < leftMenu_Descriptions.length; i++) {
//             console.log(i);
//             leftMenu_Descriptions[i].style.color = "transparent";
//         }
//     }
//
//     render() {
//         return (
//             <ThemeProvider>
//                 <Flex
//                     as={'button'}
//                     textAlign={'left'}
//                     rounded="lg"
//                     overflow="hidden"
//                     background={'#FFFFFF'}
//                     boxShadow={'0px 1px 4px rgba(0, 0, 0, 0.16), 0px 0px 2px rgba(0, 0, 0, 0.08)'}
//                     borderRadius={'2px'}
//                     margin={'0% 2% 2% 2%'}
//                     height={'160px'}
//                     width="96%"
//                     onClick={this.closeLeftMenu}
//                 >
//                     <LazyLoad>
//                         <img src={this.props.imageUrl} alt={this.props.imageAlt} style={{width:'260px', height:'160px'}}/>
//                     </LazyLoad>
//
//                     <Box padding="2" paddingLeft={'4'} width="70%">
//                         <Box
//                             color={'#000000'}
//                             marginTop="0"
//                             fontWeight={'semibold'}
//                             fontSize={'20px'}
//                             lineHeight="28px"
//                             isTruncated
//                             letterSpacing={'1px'}
//                         >
//                             {this.props.title}
//                         </Box>
//
//                         <Box display="flex" alignItems="baseline">
//                             <Box
//                                 color={'#595959'}
//                                 fontWeight="semibold"
//                                 letterSpacing="wide"
//                                 fontSize="16px"
//                                 lineHeight={'24px'}
//                                 textTransform="uppercase"
//                             >
//                                 {this.props.subtitle}
//                             </Box>
//                         </Box>
//
//                         <Box>
//                             <Box as="span" color={'#8C8C8C'} fontSize="sm">
//                                 {this.props.publishedDate} &bull; {this.props.timeToRead} minute read
//                             </Box>
//                         </Box>
//
//                         <Box display="flex" alignItems="center">
//                             <Box as="span" color={'#595959'} fontSize="sm">
//                                 {this.props.contentPreview}
//                             </Box>
//                         </Box>
//                     </Box>
//                 </Flex>
//
//                 <Collapse mt={4} isOpen={show}>
//                     Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
//                     terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
//                     labore wes anderson cred nesciunt sapiente ea proident.
//                 </Collapse>
//             </ThemeProvider>
//         );
//     }
// }
