// TODO: Better implementation
export const isStyleObject = (object: Record<string, unknown> | string) =>
  typeof object === 'object'

export const getClasses = (...classes: (Record<string, unknown> | string)[]) =>
  classes.filter((c) => !isStyleObject(c)).join(' ')
