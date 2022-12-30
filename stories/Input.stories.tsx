import React from 'react'
import { Meta, Story } from '@storybook/react'
import Input from '../rango/Input'
import { InputTypes } from '../rango/types'

const meta: Meta = {
  title: 'Input',
  component: Input,
}

export default meta
export const Default = () => <Input />
