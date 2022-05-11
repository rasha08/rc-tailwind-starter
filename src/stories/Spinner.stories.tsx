import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {Spinner} from '../common/components/Spinner/Spinner'

export default {
    label: 'Spinner',
    component: Spinner,
}

const Template: ComponentStory<typeof Spinner> = (args) => <Spinner {...args} />

export const SpinnerDefault = Template.bind({});

SpinnerDefault.args = {
    fullscreen: false,
    size: 'sm',
}