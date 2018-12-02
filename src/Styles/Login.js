import createMuiTheme from '@material-ui/core/styles/createMuiTheme';


export const styles = theme => ({
    main: {
      width: 'auto',
      display: 'block', // Fix IE 11 issue.
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
        width: 400,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    paper: {
      marginTop: theme.spacing.unit * 3,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
      margin: theme.spacing.unit,
      backgroundColor: '#EF6C00',
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing.unit,
    },
    submit: {
      marginTop: theme.spacing.unit * 1,
    },
    root: {
      width: '100%',
      maxWidth: '360px',
      backgroundColor: theme.palette.background.paper,
    },
    button2:{
       marginTop: theme.spacing.unit * -1,
    },
    button3:{
       marginTop: theme.spacing.unit * 1,
    },
    linea:{
      marginTop: theme.spacing.unit * -1,
    },
    linknav:{
      marginLeft: theme.spacing.unit * 3,
    },
  });

  export const button1 = createMuiTheme({
    typography: {
      useNextVariants: true,
    },
    palette:
    {primary:{
      main: '#EF6C00',
    }}
  });
  export const button2 = createMuiTheme({
    typography: {
      useNextVariants: true,
    },
    palette:
    {primary:{
      main: '#283593',
    }}
  });

  export const button3 = createMuiTheme({
    typography: {
      useNextVariants: true,
    },
    palette:
    {primary:{
      main: '#C62828',
    }}
  });
