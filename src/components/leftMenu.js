import React from 'react'
import{ ThemeProvider, Button } from '@chakra-ui/core'
import styled from '@emotion/styled'

export default function LeftMenu({ task: { id, title, state }, onArchiveTask, onPinTask }){
    return(
        <ThemeProvider>
            <div>
                <Button variantColor="green">Button</Button>
            </div>
        </ThemeProvider>
    )
}