import {Box} from "@chakra-ui/core";
import React, {useReducer} from "react";

const initialState = (<Box> </Box>);
const reducer = (state, action) => {
    switch(action.type) {
        case 'dashboard':
            return (<Box>This is the dashboard!</Box>);
        case 'channels':
            return (<Box>This is the channels!</Box>);
        case 'content':
            return (<Box>This is the content!</Box>);
        case 'subscriptions':
            return (<Box>This is the subscriptions!</Box>);
        case 'statistics':
            return (<Box>This is the statistics!</Box>);
    }
};

export const getReducer = () => {
    return React.useReducer(reducer, initialState);
};