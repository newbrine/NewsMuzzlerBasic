import React from 'react'
import { action } from '@storybook/addon-actions'
import SubscriptionCard from './subscriptionCard'

export default{
    component: SubscriptionCard,
    title: 'Subscription Card'
};

const recentNewsletters = [
    {id:1, title: 'How do I Back Up my Computer?', date: 'June 9th, 2020 10:37AM',
        activity: 'Sent by Source'},

    {id:2, title: 'How do I remove Malware?', date: 'June 8th, 2020 10:37AM',
        activity: 'Read by Me'},
];

const newsletterInformation = [
    {id:1, name: 'Ask Leo', subscriptionEmail: 'cal980@newsmuzzler.com', forwardingEmail: 'iosifweir@gmail.com',
     savedNumber: '6', likedNumber: '4', contents: recentNewsletters, state: false},
]

export const Default = () => <SubscriptionCard information={newsletterInformation} />;