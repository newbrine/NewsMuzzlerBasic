import React from 'react'
import { Image, Heading, BlockLink, BackgroundImage, Box, Text, Flex } from 'pcln-design-system'
import '../leftMenu.css'

export default function LeftMenu({ task: { id, title, state }, onArchiveTask, onPinTask }){
    return(
        <div className='left-menu'>
            <div className='header'>
                <Image src={'./images/NewsMuzzlerAppIcon.png'} />
                <Heading m={2}>
                    NewsMuzzler
                </Heading>
            </div>
            <BlockLink href='https://www.priceline.com' target='_blank'>
                <Box className='item' p={4}>
                    <Image src={'./images/ChannelsIcon.png'} />
                    <Heading m={3}>
                        Channels
                    </Heading>
                </Box>
            </BlockLink>
            <BlockLink href='https://www.google.com' target='_blank'>
                <Box className='item' p={4}>
                    <Image src={'./images/ContentIcon.png'} />
                    <Heading m={3}>
                        Content
                    </Heading>
                </Box>
            </BlockLink>
            <BlockLink href='https://www.amazon.com' target='_blank'>
                <Box className='item' p={4}>
                    <Image src={'./images/SubscriptionIcon.png'} />
                    <Heading m={3}>
                        Subscriptions
                    </Heading>
                </Box>
            </BlockLink>
            <BlockLink href='https://www.twitter.com' target='_blank'>
                <Box className='item' p={4}>
                    <Image src={'./images/StatisticsIcon.png'} />
                    <Heading m={3}>
                        Statistics
                </Heading>
                </Box>
            </BlockLink>
        </div>
    )
}