import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { JiteraConfigProvider } from '@jitera/jitera-web-ui-library'

import '@jitera/jitera-web-ui-library/dist/style.css'

import './index.css'

import Index from '@/pages/Index'
import { COMPONENTS } from './constants/components'

ReactDOM.render(
  <React.StrictMode>
    <JiteraConfigProvider>
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
    </JiteraConfigProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
