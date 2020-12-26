import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2),
      overflowY: 'auto',
      width: '100%',
    },
    title: {
      fontWeight: 500,
    },
    markdown: {
      fontSize: 16,
    },
  })
);
