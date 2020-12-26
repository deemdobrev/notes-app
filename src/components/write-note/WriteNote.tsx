import { Button, TextField, Typography } from '@material-ui/core';
import Markdown from 'markdown-to-jsx';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ROUTE_NOTES } from '../../constants/routes.constants';
import { useCurrentNote } from '../../hooks/use-current-note';
import { useNoteStore } from '../../stores/note-store';
import { useStyles } from './WriteNote.styles';

export const WriteNote: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const currentNote = useCurrentNote();
  const { createNote, updateNote } = useNoteStore();
  const [title, setTitle] = useState(currentNote?.title || '');
  const [text, setText] = useState(currentNote?.text || '');

  useEffect(() => {
    setTitle(currentNote?.title || '');
    setText(currentNote?.text || '');
  }, [currentNote]);

  const handleDiscard = () => {
    history.push(ROUTE_NOTES);
  };

  const handleSave = () => {
    const save = async () => {
      if (currentNote) {
        await updateNote(currentNote.id, title || 'Note', text);
      } else {
        await createNote(title || 'Note', text);
      }

      history.push(ROUTE_NOTES);
    };

    save();
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div className={classes.root}>
      <div className={classes.form}>
        <TextField
          className={classes.textField}
          value={title}
          onChange={handleTitleChange}
          placeholder="Title"
          variant="outlined"
          classes={{
            root: classes.inputRoot,
          }}
          InputProps={{
            className: classes.inputField,
            spellCheck: 'false',
          }}
        />
        <TextField
          className={classes.textField}
          value={text}
          onChange={handleTextChange}
          placeholder="Write some text…"
          variant="outlined"
          multiline
          rows={25}
          classes={{
            root: classes.inputRoot,
          }}
          InputProps={{
            className: classes.inputField,
            spellCheck: 'false',
          }}
        />
        <div className={classes.buttons}>
          <Button
            className={classes.discard}
            onClick={handleDiscard}
            variant="outlined"
            disableRipple
          >
            Discard
          </Button>
          <Button
            className={classes.save}
            onClick={handleSave}
            variant="outlined"
            disableRipple
          >
            Save
          </Button>
        </div>
      </div>
      <div className={classes.preview}>
        <div className={classes.previewHeader}>
          <Typography className={classes.title} variant="h4">
            {title}
          </Typography>
        </div>
        <Markdown className={classes.markdown}>{text}</Markdown>
      </div>
    </div>
  );
};
