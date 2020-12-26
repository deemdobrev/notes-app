import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      height: 90,
      justifyContent: 'center',
      padding: theme.spacing(2),
    },
    selected: {
      backgroundColor: theme.palette.action.hover,
    },
    description: {
      display: 'flex',
    },
    timestamp: {
      marginRight: theme.spacing(1),
      width: '10ch',
    },
    text: {
      width: '30ch',
    },
  })
);
