export function isWrap(wrap?: boolean | 'wrap-reverse' | 'wrap' | 'nowrap') {
  return (typeof wrap === 'string' && ['wrap', 'wrap-reverse'].includes(wrap)) || wrap === true
}
