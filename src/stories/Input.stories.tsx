
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InputStyled as Input } from '../common/components/Input/input.styled';

export default {
    label: "Input Component",
    component: Input,
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const InputDefault = Template.bind({});

InputDefault.args = {
  invalid: false,
};


