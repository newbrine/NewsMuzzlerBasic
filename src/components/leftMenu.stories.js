import React from 'react'
import { action } from '@storybook/addon-actions'
import LeftMenu from './leftMenu'

export default{
    component: LeftMenu,
    title: 'Left Menu',
    excludeStories: /.*Data$/
};

export const taskData = {
    id: '1',
    title: 'Left Menu',
    state: 'TASK_INBOX',
    updatedAt: new Date(2020, 6, 5, 9, 30),
  };
  
  export const actionsData = {
    onPinTask: action('onPinTask'),
    onArchiveTask: action('onArchiveTask'),
  };
  
  export const Default = () => <LeftMenu task={{ ...taskData }} {...actionsData} />;
  
  export const Pinned = () => <LeftMenu task={{ ...taskData, state: 'TASK_PINNED' }} {...actionsData} />;
  
  export const Archived = () => (
    <LeftMenu task={{ ...taskData, state: 'TASK_ARCHIVED' }} {...actionsData} />
  );