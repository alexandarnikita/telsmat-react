import React from "react";
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'
import {
  createMuiTheme,
  ThemeProvider as MaterialUIThemeProvider,
} from '@material-ui/core/styles'

import theme from './theme'
import AppRouter from './router'

const App = () => {
  const muiTheme = createMuiTheme({
    ...theme,
    breakpoints: {
      values: {
        xs: 0,
        sm: 768,
        md: 992,
        lg: 1280,
        xl: 1440
      },
    },
  })
  return (
    <MaterialUIThemeProvider theme={muiTheme}>
      <StyledComponentsThemeProvider theme={muiTheme}>
        <AppRouter />
      </StyledComponentsThemeProvider>
    </MaterialUIThemeProvider>
  );
};

export default App;
