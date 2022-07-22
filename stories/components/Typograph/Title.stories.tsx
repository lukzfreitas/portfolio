import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Title from '../../../src/components/Typography/Title';

export default {
  title: 'Example/Title',
  component: Title,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const WelcomeTemplate = Template.bind({});

WelcomeTemplate.args = {
    text: 'Turn your ideas into a success.'
}

