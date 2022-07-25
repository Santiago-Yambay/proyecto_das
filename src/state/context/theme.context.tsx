import { createContext, useState, FunctionComponent, ReactNode } from 'react';

export type ThemeContextType = {
  theme: string;
  setTheme: (theme: string) => void;
}

type ThemeProviderProps = {
  children: ReactNode;
}

export const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

export const ThemeProvider: FunctionComponent<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState('default');

  const defaultContext = {
    theme, setTheme
  };

  return (
    <ThemeContext.Provider value={defaultContext}>
      { children }
    </ThemeContext.Provider>
  );

}

