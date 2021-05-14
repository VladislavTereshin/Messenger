import { createMuiTheme } from '@material-ui/core/styles';


export const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgb(29,161,242)',
      dark: 'rgb(26, 145, 218)',
      contrastText: '#FFF',
    },
    secondary: {
      main: 'rgb(29,161,242)',
      dark: 'rgb(26, 145, 218)',
      contrastText: '#FFF',
    },
    background: {
      default: '#fff',
    },
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 30,
        textTransform: 'none',
        fontSize: 16,
        height: 40,
        fontWeight: 700,
      },
      textPrimary: {
        paddingLeft: 20,
        paddingRight: 20,
      },
      outlinedPrimary: {
        borderColor: 'rgb(29, 161, 243)',
      },
    },
    MuiPaper: {
      root: {
        padding: 0,
      },
      elevation1: {
        boxShadow: 'none'
      },
      elevation24: {
        padding: 20,
      },
    },
    MuiIconButton: {
      root: {
        padding: 0,
      }
    },
    MuiGrid: {
      'spacing-xs-3': {

      },
      item: {
        
      },
    },
    MuiInputBase: {
      input: {
        marginTop: 20,
      }
    },
  }
});

