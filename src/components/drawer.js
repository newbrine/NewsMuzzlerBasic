import React from 'react';
import {
    Drawer,
    DrawerHeader,
    DrawerContent,
    ThemeProvider,
    CSSReset,
    Box,
    Stack,
    Button,
    Image
  } from "@chakra-ui/core";

import "../stylesheets/leftDrawer.css";



export function DrawerExample() {

  return (
    <ThemeProvider>
      <CSSReset />

      <Drawer
        isOpen={true}
        placement="left"
        size={'xs'}
      >
        {/*<DrawerOverlay />*/}

        <DrawerContent backgroundColor="#2B2737">

         <Stack spacing={0}>

            <DrawerHeader>
              <div className={"leftMenu-row"}>
                <div className={"leftMenu-col-2"}>
                  <Box size="80px" paddingLeft="15px" paddingTop="10px">
                    <Image src="https://cdn.iconscout.com/icon/free/png-256/news-1445770-1224362.png" />
                  </Box>
                </div>
                <div className={"header leftMenu-col-2"}>
                  NewsMuzzler
                </div>
              </div>
            </DrawerHeader>

            <Button _hover={{background: "#534488", stroke: "#534488" }} backgroundColor="#2B2737" className={"btnTxt"} height="63px">
                <div className={"leftMenu-row-btn"} >
                  <Box size="20px">
                    <Image src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/dashboard-icon-18-256.png" />
                  </Box>
                  &nbsp;&nbsp; Dashboard
                </div>
            </Button>

            <Button _hover={{background: "#534488", stroke: "#534488" }} backgroundColor="#2B2737" className={"btnTxt"} height="63px">
                <div className={"leftMenu-row-btn"} >
                  <Box size="20px">
                    <Image src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/64/png/channel-mosaic-icon-18-64.png" />
                  </Box>
                  &nbsp;&nbsp; Channels
                </div>
            </Button>

            <Button _hover={{background: "#534488", stroke: "#534488" }} backgroundColor="#2B2737" className={"btnTxt"} height="63px">
                <div className={"leftMenu-row-btn"} >
                  <Box size="20px">
                    <Image src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/64/png/today-icon-18-64.png" />
                  </Box>
                  &nbsp;&nbsp; Content
                </div>
            </Button>

            <Button _hover={{background: "#534488", stroke: "#534488" }}  backgroundColor="#2B2737" className={"btnTxt"} height="63px">
                <div className={"leftMenu-row-btn"} >
                  <Box size="20px">
                    <Image src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/64/png/contacts-2-icon-18-64.png" />
                  </Box>
                  &nbsp;&nbsp; Subscriptions
                </div>
            </Button>

            <Button _hover={{background: "#534488", stroke: "#534488" }}  backgroundColor="#2B2737" className={"btnTxt"} height="63px">
                <div className={"leftMenu-row-btn"} >
                  <Box size="20px">
                    <Image src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/64/png/combo-icon-18-64.png" />
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
