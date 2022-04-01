import React from 'react'
import { JiteraButton, JiteraForm, JiteraInput } from '@jitera/jitera-web-ui-library'

import Layout from '@/components/Layout'

const Button: React.FC = () => {
  return (
    <Layout>
      <JiteraForm
        onFinish={(value) => {
          console.log(value)
        }}
      >
        <JiteraInput formItem={true} formItemProps={{ label: 'Input', name: 'input' }} />
        <JiteraButton htmlType="submit">Submit</JiteraButton>
      </JiteraForm>
    </Layout>
  )
}

export default Button
