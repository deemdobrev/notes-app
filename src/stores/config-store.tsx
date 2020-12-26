import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import React, { createContext, PropsWithChildren, useContext } from 'react';
import {
  COLOR_DARK_PINK,
  COLOR_MAIN_PINK,
} from '../constants/colors.constants';
import { CONFIG_DARK_MODE } from '../constants/config.constants';
import { useLocalStorage } from '../hooks/use-local-storage';

interface ConfigStore {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const ConfigStoreContext = createContext<ConfigStore | null>(null);

export const ConfigStoreProvider: React.FC<PropsWithChildren<unknown>> = ({
  children,
}: PropsWithChildren<unknown>) => {
  const [darkMode, setDarkMode] = useLocalStorage(CONFIG_DARK_MODE, true);

  const theme = createMuiTheme({
    overrides: {
      MuiCssBaseline: {
        '@global': {
          a: {
            color: darkMode ? COLOR_MAIN_PINK : COLOR_DARK_PINK,
          },
        },
      },
    },
    palette: {
      type: darkMode ? 'dark' : 'light',
    },
  });

  const store: ConfigStore = {
    darkMode,
    setDarkMode,
  };

  return (
    <ConfigStoreContext.Provider value={store}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ConfigStoreContext.Provider>
  );
};

export const useConfigStore = (): ConfigStore => {
  const store = useContext(ConfigStoreContext);

  if (store === null) {
    throw new Error('useConfigStore must be used within ConfigStoreProvider');
  }

  return store;
};
