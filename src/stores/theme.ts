import { types, flow } from 'mobx-state-tree';

import { theme, ThemeType } from '../theme';

const themeStore = types
  .model('theme', {
    mode: types.optional(types.enumeration('themeMode', ['light', 'dark']), 'light'),
  })
  .views((self) => ({
    get theme() {
      return theme?.[self.mode] || theme.light;
    },
  }))
  .actions((self) => {
    // eslint-disable-next-line require-yield
    const toggleMode = flow(function* toggleMode() {
      self.mode = self.mode === 'light' ? 'dark' : 'light';
    });

    return {
      toggleMode,
    };
  });

const themeStores = { theme: types.optional(themeStore, {}) };

export default themeStores;
