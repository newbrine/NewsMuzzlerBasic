import React from 'react'
import Subscriptions from './subscriptions'

export default{
    component: Subscriptions,
    title: 'Subscriptions'
};

const recentNewsletters = [
    {id:1, title: 'How do I Back Up my Computer?', date: 'June 9th, 2020 10:37AM',
        activity: 'Sent by Source'},

    {id:2, title: 'How do I remove Malware?', date: 'June 8th, 2020 10:37AM',
        activity: 'Read by Me'},
];

const recentNewslettersTwo = [
    {id:1, title: 'Title 1', date: 'June 5th, 2020 10:37AM',
        activity: 'Sent by Source'},

    {id:2, title: 'Title 2', date: 'June 2th, 2020 10:37AM',
        activity: 'Read by Me'},
];

const newsletterInformation = [
    {id:1, name: 'Ask Leo', subscriptionEmail: 'cal980@newsmuzzler.com', forwardingEmail: 'iosifweir@gmail.com',
     savedNumber: '6', likedNumber: '4', contents: recentNewsletters},

    {id:2, name: 'Harvard Business Review', subscriptionEmail: 'cal980@newsmuzzler.com', forwardingEmail: 'iosifweir@gmail.com',
     savedNumber: '2', likedNumber: '7', recievingEmail: 'Work Email', contents: recentNewslettersTwo},
]

export const MainPage = () => <Subscriptions information={newsletterInformation}/>;