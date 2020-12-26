import { Typography } from '@material-ui/core';
import Markdown from 'markdown-to-jsx';
import React from 'react';
import { useCurrentNote } from '../../hooks/use-current-note';
import { useStyles } from './ViewNote.styles';

export const ViewNote: React.FC = () => {
  const classes = useStyles();
  const currentNote = useCurrentNote();

  return currentNote ? (
    <div className={classes.root}>
      <Typography className={classes.title} variant="h4" gutterBottom>
        {currentNote.title}
      </Typography>
      <Markdown className={classes.markdown}>{currentNote.text}</Markdown>
    </div>
  ) : null;
};
