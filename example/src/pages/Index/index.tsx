import React from 'react'
import { Link } from 'react-router-dom'

import Layout from '@/components/Layout'
import { COMPONENTS } from '@/constants/components'

const Index: React.FC = () => {
  return (
    <Layout>
      <ul>
        {Object.entries(COMPONENTS).map(([componentName]) => (
          <li key={componentName}>
            <Link to={`/${componentName}`}>{componentName}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default Index
