import React, { ReactNode, VFC } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core';
import { ThemeProvider } from '@emotion/react';
import { muiTheme, theme } from '../../view/theme/theme';

interface Props {
  children: ReactNode;
}

const CustomThemeProvider: VFC<Props> = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>
    </ThemeProvider>
  );
};

export default CustomThemeProvider;
