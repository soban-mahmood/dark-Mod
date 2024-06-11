import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  themeMod: "light",
  darkMod: () => {},
  lightMod: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
  return useContext(ThemeContext);
}
