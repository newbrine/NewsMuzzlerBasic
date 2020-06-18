import { configure, addDecorator } from '@storybook/react';
import customTheme from './../src/theme';
import React from 'react';
import { ThemeProvider } from '@chakra-ui/core'

function loadStories() {
    configure(require.context('../src/components', true, /\.stories\.js$/), module);
}

addDecorator((story) => (
  <ThemeProvider theme={customTheme}>
    {story()}
  </ThemeProvider>
))

configure(loadStories, module);

//addDecorator(storyFn => <Center>{storyFn()}</Center>);