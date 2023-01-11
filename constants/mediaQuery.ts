export enum mqTypes {
  MOBILE = 'mobile',
  TABLET = 'tablet',
  LAPTOP = 'laptop',
  DESKTOP = 'desktop',
}

const breakpoints = {
  [mqTypes.MOBILE]: 576,
  [mqTypes.TABLET]: 768,
  [mqTypes.LAPTOP]: 992,
  [mqTypes.DESKTOP]: 1200,
}

const fn = (v: number) => {
  return `@media (min-width: ${v}px)`
}

const mq = Object.fromEntries(
  Object.entries(breakpoints).map(([k, v]) => [k, fn(v)]),
)

export default mq
