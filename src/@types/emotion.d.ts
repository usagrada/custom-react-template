import '@emotion/react';
import '@material-ui/core/styles/createTheme';
import { MyTheme, MyThemeOptions } from './theme';

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Theme extends MyTheme {}
}

declare module '@material-ui/core/styles/createTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Theme extends MyTheme {}

  // allow configuration using `createTheme`
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface ThemeOptions extends MyThemeOptions {}
}
