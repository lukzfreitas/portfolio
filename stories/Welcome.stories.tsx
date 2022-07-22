import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Welcome from '../src/patterns/Welcome';

export default {
  title: 'Example/Welcome',
  component: Welcome,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Welcome>;

const Template: ComponentStory<typeof Welcome> = (args) => <Welcome {...args} />;

export const WelcomeTemplate = Template.bind({});

WelcomeTemplate.args = {
    title: 'Hello world'
}

