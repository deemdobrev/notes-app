export interface NoteFields {
  timestamp: number;
  title: string;
  text: string;
}

export interface Note extends NoteFields {
  id: number;
}
