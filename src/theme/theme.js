import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for LeoVegas Movie App.
const theme = createMuiTheme({
  palette: {
    primary: {
        light: 'rgba(255,148,25,0.85)',
        main: '#ff9419d9',
        dark: '',
        contrastText: "#FFFFFF"
    }
  }
});

export default theme;