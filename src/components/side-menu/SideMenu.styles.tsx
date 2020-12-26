import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      borderBottom: 0,
      borderLeft: 0,
      borderTop: 0,
      display: 'flex',
      flexDirection: 'column',
    },
    header: {
      display: 'flex',
      flexDirection: 'column',
      padding: theme.spacing(2),
    },
    titleContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: theme.spacing(1),
    },
    title: {
      color: 'inherit',
      fontWeight: 500,
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'none',
      },
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
    },
    adornment: {
      color: theme.palette.text.secondary,
      order: 1,
      '&:hover': {
        backgroundColor: 'inherit',
      },
    },
    noteList: {
      overflowY: 'auto',
      width: 360,
    },
  })
);
