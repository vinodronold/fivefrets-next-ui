export const mobile = 768
export const tablet = 992
export const color = {
  primary: (o = 1) => `rgba(255,255,255,${o})`,
  secondary: (o = 0.5) => `rgba(251, 192, 45,${o})`,
  bg: (o = 0.8) => `rgba(0,0,0,${o})`
}
export const baseFont = '16px'
export const fontFamily = `Helvetica, Arial, sans-serif`
export const media = {
  mobile: `@media only screen and (max-width: ${mobile}px)`
}
