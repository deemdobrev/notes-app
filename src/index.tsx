import { CssBaseline } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from './components/app/App';
import { ConfigStoreProvider } from './stores/config-store';
import { NoteStoreProvider } from './stores/note-store';

ReactDOM.render(
  <BrowserRouter>
    <ConfigStoreProvider>
      <NoteStoreProvider>
        <CssBaseline />
        <App />
      </NoteStoreProvider>
    </ConfigStoreProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
