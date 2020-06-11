import React from 'react'
import { action } from '@storybook/addon-actions'
import SubscriptionCard from './subscriptionCard'

export default{
    component: SubscriptionCard,
    title: 'Subscription Card'
};

export const Default = () => <SubscriptionCard likedNumber="4" savedNumber='6'/>;