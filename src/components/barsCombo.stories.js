import React from "react";
import BarsCombo from "./barsCombo";
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';

export default {
    component: BarsCombo,
    title: 'BarsCombo',
};


//
// storiesOf('Params', module)
//     .addDecorator(StoryRouter())
//     .add('params', () => (
//         <BarsCombo/>
//     ));



export const menuCombo = () => <BarsCombo />;