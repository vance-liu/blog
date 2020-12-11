import LightTheme from './light';
import DarkTheme from './dark';

export * from './light';
export * from './dark';

export const theme = {
  light: LightTheme,
  dark: DarkTheme,
};

export type ThemeType = keyof typeof theme;
