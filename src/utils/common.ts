import { CSSProperties } from 'styled-components'

// TODO: Better implementation
export const isStyleObject = (object: Record<string, unknown> | CSSProperties | string) =>
  typeof object === 'object'

export const getClasses = (...classes: (Record<string, unknown> | CSSProperties | string)[]) =>
  classes.filter((c) => !isStyleObject(c)).join(' ')
