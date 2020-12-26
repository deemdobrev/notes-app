import { Divider, Typography } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  PATH_PARAM_ID,
  ROUTE_VIEW_NOTE,
} from '../../constants/routes.constants';
import { Note } from '../../types/note';
import { formatTimestamp } from '../../utils/formatters';
import { useStyles } from './NoteListItem.styles';

interface NoteListItemProps {
  note: Note;
  selected?: boolean;
}

export const NoteListItem: React.FC<NoteListItemProps> = ({
  note,
  selected,
}: NoteListItemProps) => {
  const classes = useStyles();
  const history = useHistory();

  const handleSelect = () => {
    history.push(ROUTE_VIEW_NOTE.replace(PATH_PARAM_ID, note.id.toString()));
  };

  const listItemClasses = [
    classes.root,
    ...(selected ? [classes.selected] : []),
  ].join(' ');

  return (
    <>
      <div className={listItemClasses} onClick={handleSelect}>
        <div>
          <Typography variant="h6" noWrap gutterBottom>
            {note.title}
          </Typography>
        </div>
        <div className={classes.description}>
          <Typography className={classes.timestamp} variant="body1" noWrap>
            {formatTimestamp(note.timestamp)}
          </Typography>
          <Typography
            className={classes.text}
            color="textSecondary"
            variant="body1"
            noWrap
          >
            {note.text}
          </Typography>
        </div>
      </div>
      <Divider />
    </>
  );
};
