import { matchPath, useLocation } from 'react-router-dom';
import { ROUTES_WITH_CURRENT_NOTE } from '../constants/routes.constants';
import { useNoteStore } from '../stores/note-store';
import { Note } from '../types/note';
import { PathParams } from '../types/path-params';

export const useCurrentNote = (): Note | undefined => {
  const { pathname } = useLocation();
  const { notes, notesById } = useNoteStore();

  const match = matchPath<PathParams>(pathname, {
    path: ROUTES_WITH_CURRENT_NOTE,
  });

  if (!match) {
    return undefined;
  }

  const matchId = match.params.id;

  return matchId ? notesById[Number(matchId)] : notes[0];
};
