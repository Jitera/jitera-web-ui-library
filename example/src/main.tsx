import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './index.css'

import Index from '@/pages/Index'
import { COMPONENTS } from './constants/components'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        {Object.entries(COMPONENTS).map(([componentName, Component]) => (
          <Route
            key={componentName}
            path={`/${componentName}`}
            element={<Component key={componentName} />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
