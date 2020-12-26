import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      width: '100%',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      overflowY: 'auto',
      padding: theme.spacing(2),
      width: '50%',
    },
    textField: {
      marginBottom: theme.spacing(2),
    },
    inputRoot: {
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: theme.palette.divider,
        },
        '&:hover fieldset': {
          borderColor: theme.palette.text.secondary,
        },
        '&.Mui-focused fieldset': {
          borderColor: theme.palette.text.secondary,
          border: '1px solid',
        },
      },
    },
    inputField: {
      color: theme.palette.text.secondary,
      fontFamily: 'Roboto Mono',
    },
    buttons: {
      display: 'flex',
      justifyContent: 'center',
    },
    save: {
      marginLeft: theme.spacing(1),
      width: '50%',
    },
    discard: {
      marginRight: theme.spacing(1),
      width: '50%',
    },
    preview: {
      overflowY: 'auto',
      padding: theme.spacing(2),
      width: '50%',
    },
    previewHeader: {
      alignItems: 'center',
      display: 'flex',
      minHeight: theme.spacing(7),
      marginBottom: theme.spacing(2),
    },
    title: {
      fontWeight: 500,
    },
    markdown: {
      fontSize: 16,
    },
  })
);
