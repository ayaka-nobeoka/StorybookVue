import Button from './index.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Button',
  tags: ['autodocs'], // オプション：Storybook Docs 自動生成用タグ
}

export default meta

type Story = StoryObj<typeof Button>

export const Secondary: Story = {}
