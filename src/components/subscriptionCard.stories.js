import React from 'react'
import { action } from '@storybook/addon-actions'
import SubscriptionCard from './subscriptionCard'

export default{
    component: SubscriptionCard,
    title: 'Subscription Card'
};

export const Default = () => <SubscriptionCard 
                                newsletterName='Ask Leo' 
                                likedNumber="4" 
                                savedNumber='6'
                                elements={3}
                                titles={['Title 1', 'Title 2', 'Title 3']}
                                dates={['June 9th, 2020 10:37AM', 'June 8th, 2020 10:37AM', 'June 7th, 2020 10:37AM']}
                                activity={['Sent by source', 'Read by me', 'Sent by source']}
                             />;