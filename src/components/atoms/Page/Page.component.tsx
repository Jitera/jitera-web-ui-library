import React from 'react'

export interface JiteraPageProps extends React.HTMLAttributes<HTMLDivElement> {}

const JiteraPage = React.forwardRef<HTMLDivElement, JiteraPageProps>((props, ref) => {
  const { children, style, ...rest } = props
  return (
    <div
      {...rest}
      style={{ width: '100%', minHeight: '100vh', backgroundColor: '#fff', ...style }}
      ref={ref}
    >
      {children}
    </div>
  )
})

export { JiteraPage }
