import {
  Divider,
  IconButton,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import ClearIcon from '@material-ui/icons/Clear';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import NoteAdd from '@material-ui/icons/NoteAdd';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  PATH_PARAM_ID,
  ROUTE_CREATE_NOTE,
  ROUTE_EDIT_NOTE,
  ROUTE_NOTES,
} from '../../constants/routes.constants';
import { useCurrentNote } from '../../hooks/use-current-note';
import { useConfigStore } from '../../stores/config-store';
import { useNoteStore } from '../../stores/note-store';
import { NoteListItem } from '../note-list-item/NoteListItem';
import { useStyles } from './SideMenu.styles';

export const SideMenu: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const currentNote = useCurrentNote();
  const { darkMode, setDarkMode } = useConfigStore();
  const { notes, removeNote } = useNoteStore();
  const [filter, setFilter] = useState('');

  const noteListItems = notes
    .filter((note) => note.title.toLowerCase().includes(filter.toLowerCase()))
    .map((note) => (
      <NoteListItem
        key={note.id}
        note={note}
        selected={note.id === currentNote?.id}
      />
    ));

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  const handleInputClear = () => {
    setFilter('');
  };

  const handleCreate = () => {
    handleInputClear();
    history.push(ROUTE_CREATE_NOTE);
  };

  const handleEdit = () => {
    if (currentNote) {
      handleInputClear();
      history.push(
        ROUTE_EDIT_NOTE.replace(PATH_PARAM_ID, currentNote.id.toString())
      );
    }
  };

  const handleRemove = () => {
    const remove = async () => {
      if (currentNote) {
        await removeNote(currentNote.id);
        handleInputClear();
        history.push(ROUTE_NOTES);
      }
    };

    remove();
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Paper className={classes.root} variant="outlined" square>
      <div className={classes.header}>
        <div className={classes.titleContainer}>
          <Typography
            className={classes.title}
            variant="h4"
            component={Link}
            to={ROUTE_NOTES}
          >
            Notes
          </Typography>
          <div>
            <IconButton onClick={toggleDarkMode} disableRipple>
              {darkMode ? <Brightness4Icon /> : <Brightness7Icon />}
            </IconButton>
            <IconButton
              onClick={handleRemove}
              disabled={!currentNote}
              disableRipple
            >
              <DeleteIcon />
            </IconButton>
            <IconButton
              onClick={handleEdit}
              disabled={!currentNote}
              disableRipple
            >
              <EditIcon />
            </IconButton>
            <IconButton onClick={handleCreate} disableRipple>
              <NoteAdd />
            </IconButton>
          </div>
        </div>
        <TextField
          value={filter}
          onChange={handleInputChange}
          placeholder="Search notes…"
          variant="outlined"
          classes={{
            root: classes.inputRoot,
          }}
          InputProps={{
            className: classes.inputField,
            spellCheck: 'false',
            startAdornment: filter && (
              <IconButton
                className={classes.adornment}
                onClick={handleInputClear}
                disableRipple
              >
                <ClearIcon />
              </IconButton>
            ),
          }}
        />
      </div>
      <Divider />
      <div className={classes.noteList}>{noteListItems}</div>
    </Paper>
  );
};
