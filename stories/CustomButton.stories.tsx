import React from 'react'
import { Meta, Story } from '@storybook/react'
import CustomButton from '../rango/CustomButton/CustomButton'
import CButton from '../rango/interfaces/customButton.interface'

const meta: Meta = {
  title: 'Custom Button',
  component: CustomButton,
}

export default meta
export const Default = () => <CustomButton>Click Me</CustomButton>
