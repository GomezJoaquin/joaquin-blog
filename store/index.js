export const state = () => ({
  darkMode: false,
});

export const mutations = {
  toggleDarkMode(state) {
    state.darkMode = !state.darkMode;
  },
};
