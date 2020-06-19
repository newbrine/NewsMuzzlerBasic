import React from "react";
import { Box, Stack, Flex, Button, Collapse, Image, Input, Textarea} from "@chakra-ui/core";
import "../stylesheets/channelsMain.css";

function EmailData() {

    const [show1, setShow1] = React.useState(false);
    const handleToggle1 = () => setShow1(!show1);

    const [show2, setShow2] = React.useState(false);
    const handleToggle2 = () => setShow2(!show2);

    const [show3, setShow3] = React.useState(false);
    const handleToggle3 = () => setShow3(!show3);

    const [createEmail, setCreate] = React.useState(false);
    const createToggle = () => setCreate(!createEmail);

    const buttons = [
        {id:1, buttonName: "Business", buttonState: false},
        {id:2, buttonName: "Events", buttonState: false},
        {id:3, buttonName: "Social", buttonState: false},
        {id:4, buttonName: "Tech", buttonState: false},
        {id:5, buttonName: "Travel", buttonState: false}
    ];
    const [buttonStatus, setStatus] = React.useState(buttons);
    const updateStatus = index => e => {
        let newArr = [...buttonStatus]; // copying the old datas array
        newArr[index] = {id:index, buttonName: newArr[index].buttonName, buttonState: !newArr[index].buttonState};// replace new value with whatever we want to change it to
        setStatus(newArr);
    };
    const buttonsToggle = buttonStatus.map((button, index) =>(
        <Box key={button.id} pr="20px">
            <Button key={button.id} size= "xs" onClick={updateStatus(index)} backgroundColor={button.buttonState? "#6E61BF": "Solid #F2F2F2"} _hover={{ bg: "#6E61BF", color: "#FFFFFF" }} className={button.buttonState? "channelsMain-Btn channelsMain-xsBtnTxt": "createEmail-btns"}>{button.buttonName} √</Button>
        </Box>)
    );

    const contents = [
        {id:1, emailTitle: "Work email", subscribeEmail: "cal980@newsmuzzler.com", forwardEmail: "iosifweir@gmail.com",
            categoryDescrip: "Email for newsletters related to my job in marketing. Want to stay updated on the " +
                "latest and most relevant news in the market.", totalSubscrip: "6", businessSubscrip:"4",
            eventsSubscrip:"4", socialSubscrip:"4", handleToggle: handleToggle1, show: show1},

        {id:2, emailTitle: "Leisure email", subscribeEmail: "cal980@newsmuzzler.com", forwardEmail: "iosifweir@gmail.com",
            categoryDescrip: "Email for newsletters related to my job in marketing. Want to stay updated on the " +
                "latest and most relevant news in the market.", totalSubscrip: "8", businessSubscrip:"4",
            eventsSubscrip:"4", socialSubscrip:"5", handleToggle: handleToggle2, show: show2},

        {id:3, emailTitle: "Other email", subscribeEmail: "cal980@newsmuzzler.com", forwardEmail: "iosifweir@gmail.com",
            categoryDescrip: "Email for newsletters related to my job in marketing. Want to stay updated on the " +
                "latest and most relevant news in the market.", totalSubscrip: "8", businessSubscrip:"4",
            eventsSubscrip:"4", socialSubscrip:"6", handleToggle: handleToggle3, show: show3},
    ];

        const stackBoxes = contents.map((content) =>

            <Box key={content.id} position="relative" d="flex" border="1px solid rgba(168, 166, 185, 0.5)" borderRadius="6px" background="#E8E8E8" className={"channelsMain-row"}>
                <Box className={"channelsMain-col-3"}>
                    <Box pt={content.show? "35px": "7px"} className={"channelsMain-header"}>
                        {content.emailTitle}
                    </Box>
                    <Collapse mt={4} isOpen={content.show}>
                        <Box className={"channelsMain-text"}>
                            <strong>Subscribe email:</strong>
                            <Box>
                                {content.subscribeEmail}
                            </Box>
                        </Box>

                        <Box h={"16px"}/>

                        <Box className={"channelsMain-text"}>
                            <strong>Forward email:</strong>
                            <Box>
                                {content.forwardEmail}
                            </Box>
                        </Box>
                    </Collapse>
                </Box>

                <Box className={"channelsMain-col-5"}>
                    <Flex className={"channelsMain-col-10"} flexDirection={"row"} justifyContent={"center"} alignItems={"center"}>
                        <Box className={"channelsMain-header channelsMain-col-4"}>
                            &emsp;Categories:
                        </Box>
                        <Box>
                            <Button mr="15px" size= "xs" backgroundColor="#6E61BF" _hover={{ bg: "#F2F2F2", color: "#595959" }} className={"channelsMain-Btn channelsMain-xsBtnTxt"}>Business √</Button>
                        </Box>
                        <Box>
                            <Button mr="15px" size= "xs" backgroundColor="#6E61BF" _hover={{ bg: "#F2F2F2", color: "#595959" }} className={"channelsMain-Btn channelsMain-xsBtnTxt"}>Events √</Button>
                        </Box>
                        <Box>
                            <Button mr="15px" size= "xs" backgroundColor="#6E61BF" _hover={{ bg: "#F2F2F2", color: "#595959" }} className={"channelsMain-Btn channelsMain-xsBtnTxt"}>Social √</Button>
                        </Box>
                    </Flex>
                    <Collapse mt={4} isOpen={content.show} >
                        <Box paddingLeft="36px" paddingRight="50px" className={"channelsMain-text"}>
                            <strong>Description:&nbsp;</strong>{content.categoryDescrip}
                        </Box>
                    </Collapse>

                </Box>
                <Box className={"channelsMain-col-4"}>
                    <Flex className={"channelsMain-col-6"} flexDirection={"row"} justifyContent={"start"} alignItems={"center"}>
                        <Box pl="6px" className={"channelsMain-header"}>
                            Total Subscriptions:&nbsp;
                        </Box>
                        <Box className={"channelsMain-headerNumber"}>
                            {content.totalSubscrip}
                        </Box>
                    </Flex>

                    <Collapse mt={4} isOpen={content.show} >
                        <Flex className={"channelsMain-col-7"} flexDirection={"row"} justifyContent={"start"} alignItems={"center"}>
                            <Box pl="8px" className={"channelsMain-subHeader"}>
                                Business Subscriptions:&nbsp;
                            </Box>
                            <Box className={"channelsMain-number"}>
                                {content.businessSubscrip}
                            </Box>
                        </Flex>
                        <Flex pl="8px" className={"channelsMain-col-7"} flexDirection={"row"} justifyContent={"start"} alignItems={"center"}>
                            <Box className={"channelsMain-subHeader"}>
                                Events Subscriptions:&nbsp;
                            </Box>
                            <Box className={"channelsMain-number"}>
                                {content.eventsSubscrip}
                            </Box>
                        </Flex>
                        <Flex pl="8px" className={"channelsMain-col-7"} flexDirection={"row"} justifyContent={"start"} alignItems={"center"}>
                            <Box  className={"channelsMain-subHeader"}>
                                Social Subscriptions:&nbsp;
                            </Box>
                            <Box className={"channelsMain-number"}>
                                {content.socialSubscrip}
                            </Box>
                        </Flex>
                    </Collapse>
                </Box>

                <Box paddingTop="10px" margin="0 auto">
                    <Button _hover={{border:"1px solid rgba(168, 166, 185, 0.5)", borderRadius:"5px"}} size="25px" backgroundColor="#E8E8E8" onClick={content.handleToggle}>
                        <Box size="15px" textAlign="center">
                            <Image src= {content.show? "https://img.icons8.com/metro/2x/collapse-arrow.png": "https://img.icons8.com/metro/72/expand-arrow.png"}></Image>
                        </Box>
                    </Button>
                </Box>

                <Button position = "absolute" backgroundColor="#E8E8E8" className={"ellipsis-right"}>
                    <Image size="15px" src="https://image.flaticon.com/icons/svg/512/512222.svg"></Image>
                </Button>
            </Box>
            );

        return(

                    <Box backgroundColor={"#F2F2F2"}>
                        <Box paddingLeft="20px">
                            <Box paddingTop="40px" paddingBottom="40px">
                                <Button height="40px" backgroundColor="#6E61BF" _hover={{ bg: "#F2F2F2", color: "#595959" }} className={"channelsMain-Btn channelsMain-lgBtnTxt"} onClick={createToggle}>
                                    + Create new email
                                </Button>
                            </Box>
                            <Stack paddingRight = "60px" spacing={2} >

                                <Collapse isOpen={createEmail}>
                                    <Box border="1px solid rgba(168, 166, 185, 0.5)" borderRadius="6px" background="#F5F5F5" className={"channelsMain-row"} pb="40px">
                                        <Box pl= "0px" className={"channelsMain-col-4"}>
                                            <Stack spacing={4} pr="20px">
                                                <Box>
                                                    <Box className={"channelsMain-subHeader"}>
                                                        Email Label
                                                    </Box>

                                                    <Input borderRadius="5px"  placeholder="email label" />
                                                </Box>

                                                <Box>
                                                    <Box className={"channelsMain-subHeader"}>
                                                        Subscribe Email
                                                    </Box>
                                                    <Input borderRadius="5px"  placeholder="real email" />
                                                </Box>

                                                <Box>
                                                    <Box className={"channelsMain-subHeader"}>
                                                        Forwarding Email
                                                    </Box>
                                                    <Input borderRadius="5px"  placeholder="er098p@newsmuzzler.com" />
                                                </Box>
                                            </Stack>

                                        </Box>

                                        <Box className={"channelsMain-col-5"}>
                                            <Stack spacing={4} pl="15px">
                                                <Box className={"channelsMain-subHeader"}>
                                                    Select Category
                                                </Box>
                                                <Box background="#FFFFFF" borderRadius="5px">
                                                    <Box pl="15px" pt="10px" pb="10px" className={"createEmail-placeHolder"}>
                                                        <Collapse isOpen={!buttonStatus[0].buttonState & !buttonStatus[1].buttonState & !buttonStatus[2].buttonState & !buttonStatus[3].buttonState & !buttonStatus[4].buttonState}>
                                                            select category
                                                        </Collapse>
                                                        <Stack isInline>
                                                            {buttonStatus.map(button =>
                                                                <Collapse key={button.id} isOpen={button.buttonState}>
                                                                    <Button key={button.id} size="xs" backgroundColor="#6E61BF"
                                                                            className={"channelsMain-Btn channelsMain-xsBtnTxt"}>{button.buttonName} √</Button>
                                                                </Collapse>)
                                                            }
                                                        </Stack>
                                                    </Box>
                                                </Box>

                                                <Box stroke="Solid rgba(168, 166, 185, 0.5)" fill="Solid #FFFFFF" borderWidth="1px" borderRadius="5px" backgroundColor="#FFFFFF">
                                                    <Box pl="15px" pt="15px">
                                                        Existing Categories
                                                    </Box>
                                                    <Flex pl="15px" pt="15px" pb = "15px" Direction={"row"} justifyContent={"flex-start"} alignItems={"center"}>
                                                        {buttonsToggle}
                                                    </Flex>

                                                </Box>
                                            </Stack>

                                        </Box>

                                        <Box className={"channelsMain-col-3"} pl="50px" pr="50px" height="220px">
                                            <Box className={"channelsMain-subHeader"}>
                                                 Description (Optional)
                                            </Box>

                                            <Textarea style={{height: 200}} matInput placeholder="real email" rows="15" cols="15" />

                                        </Box>

                                    </Box>
                                </Collapse>

                                {stackBoxes}

                            </Stack>
                        </Box>
                    </Box>
        );
    }

    export default class ChannelsMain extends React.Component {
        render() {
            return (
                <EmailData  />
            );
        }
}
  