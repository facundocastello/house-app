export const colors = {
  font: '#13293D',
  background: '#EAEBED',
  containersBackground: '#1B98E0',
  cardsBackground: '#FFFFFF',
  borders: '#247BA0',
  primary: '#197bff',
  secondary: '#6c757c',
  success: '#37a745',
  danger: '#dc3545',
  warning: '#fbc109',
  info: '#31a2b8',
};

export const sizes = {};

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}
export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};