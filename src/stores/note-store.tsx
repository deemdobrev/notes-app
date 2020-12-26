import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';
import { noteDB } from '../database/note-db';
import { Note } from '../types/note';

interface NoteStore {
  notes: Note[];
  notesById: Record<number, Note>;
  createNote: (title: string, text: string) => Promise<void>;
  updateNote: (id: number, title: string, text: string) => Promise<void>;
  removeNote: (id: number) => Promise<void>;
}

const NoteStoreContext = createContext<NoteStore | null>(null);

export const NoteStoreProvider: React.FC<PropsWithChildren<unknown>> = ({
  children,
}: PropsWithChildren<unknown>) => {
  const [notes, setNotes] = useState<Note[]>([]);

  const refreshNotes = async () => {
    setNotes(await noteDB.list());
  };

  useEffect(() => {
    refreshNotes();
  }, []);

  const createNote = async (title: string, text: string) => {
    await noteDB.create(title, text);
    await refreshNotes();
  };

  const updateNote = async (id: number, title: string, text: string) => {
    await noteDB.update(id, title, text);
    await refreshNotes();
  };

  const removeNote = async (id: number) => {
    await noteDB.remove(id);
    await refreshNotes();
  };

  const notesById = notes.reduce(
    (acc, note) => ({ ...acc, [note.id]: note }),
    {}
  );

  const store: NoteStore = {
    notes,
    notesById,
    createNote,
    updateNote,
    removeNote,
  };

  return (
    <NoteStoreContext.Provider value={store}>
      {children}
    </NoteStoreContext.Provider>
  );
};

export const useNoteStore = (): NoteStore => {
  const store = useContext(NoteStoreContext);

  if (store === null) {
    throw new Error('useNoteStore must be used within NoteStoreProvider');
  }

  return store;
};
