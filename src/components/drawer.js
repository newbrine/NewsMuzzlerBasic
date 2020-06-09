import React from 'react';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from "@chakra-ui/core";
  import { useDisclosure } from "@chakra-ui/core";
  import { ThemeProvider, CSSReset, Box, Heading, Text} from '@chakra-ui/core';
  import { Stack} from "@chakra-ui/core";
  import { Button } from "@chakra-ui/core";
  import { Image } from "@chakra-ui/core";
  import "../styles/style.css";



export function DrawerExample() {

  return (
    <ThemeProvider>
      <CSSReset />

      <Drawer
        isOpen={true}
        placement="left"
        
      >
        <DrawerOverlay />

        <DrawerContent backgroundColor="#2B2737">

         <Stack spacing={0}>

            <DrawerHeader>
              <div className={"row"}>
                <div className={"col-2"}>
                  <Box size="80px" paddingLeft="15px" paddingTop="10px">
                    <Image src="https://cdn.iconscout.com/icon/free/png-256/news-1445770-1224362.png"></Image>
                  </Box>
                </div>
                <div className={"header col-2"}>
                  NewsMuzzler
                </div>
              </div>
            </DrawerHeader>

            <Button _hover={{background: "#534488", stroke: "#534488" }} backgroundColor="#2B2737" className={"btnTxt"} height="63px">
                <div className={"row-btn"} >
                  <Box size="20px">
                    <Image src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/dashboard-icon-18-256.png"></Image>
                  </Box>
                  &nbsp;&nbsp; Dashboard
                </div>
            </Button>

            <Button _hover={{background: "#534488", stroke: "#534488" }} backgroundColor="#2B2737" className={"btnTxt"} height="63px">
                <div className={"row-btn"} >
                  <Box size="20px">
                    <Image src="https://www.iconsdb.com/icons/preview/white/globe-xxl.png"></Image>
                  </Box>
                  &nbsp;&nbsp; Channels
                </div>
            </Button>

            <Button _hover={{background: "#534488", stroke: "#534488" }} backgroundColor="#2B2737" className={"btnTxt"} height="63px">
                <div className={"row-btn"} >
                  <Box size="20px">
                    <Image src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/64/png/today-icon-18-64.png"></Image>
                  </Box>
                  &nbsp;&nbsp; Content
                </div>
            </Button>

            <Button _hover={{background: "#534488", stroke: "#534488" }}  backgroundColor="#2B2737" className={"btnTxt"} height="63px">
                <div className={"row-btn"} >
                  <Box size="20px">
                    <Image src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/64/png/contacts-2-icon-18-64.png"></Image>
                  </Box>
                  &nbsp;&nbsp; Subscriptions
                </div>
            </Button>

            <Button _hover={{background: "#534488", stroke: "#534488" }}  backgroundColor="#2B2737" className={"btnTxt"} height="63px">
                <div className={"row-btn"} >
                  <Box size="20px">
                    <Image src="https://www.iconsdb.com/icons/preview/white/statistics-xxl.png"></Image>
                  </Box>
                  &nbsp;&nbsp; Statistics
                </div>
            </Button>

        </Stack>

        </DrawerContent>
      </Drawer>
    </ThemeProvider>
  
  );
}
