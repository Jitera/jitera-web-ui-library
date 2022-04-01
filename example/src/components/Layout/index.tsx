import React from 'react'

const Layout: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, style, ...props }) => (
  <div style={{ padding: '30px', ...style }} {...props}>
    {children}
  </div>
)

export default Layout
