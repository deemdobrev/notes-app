import { getUnixTime } from 'date-fns';
import Dexie from 'dexie';
import { Note, NoteFields } from '../types/note';

class NoteDB extends Dexie {
  notes: Dexie.Table<NoteFields, number>;

  constructor() {
    super('NoteDB');

    this.version(1).stores({
      notes: '++id, timestamp, title, text',
    });

    this.notes = this.table('notes');
  }

  list = async () => {
    return (await this.notes
      .orderBy('timestamp')
      .reverse()
      .toArray()) as Note[];
  };

  create = async (title: string, text: string) => {
    await this.notes.add({
      timestamp: getUnixTime(new Date()),
      title,
      text,
    });
  };

  update = async (id: number, title: string, text: string) => {
    await this.notes.update(id, {
      timestamp: getUnixTime(new Date()),
      title,
      text,
    });
  };

  remove = async (id: number) => {
    await this.notes.delete(id);
  };
}

export const noteDB = new NoteDB();
