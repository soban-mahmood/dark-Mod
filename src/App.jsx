import { useEffect, useState } from "react";

import Theme from "./component/Theme";
import Card from "./component/Card";
import { ThemeProvider } from "./context/Usethem";

function App() {
  const [themeMod, setThemeMod] = useState(0);

  const darkMod = () => {
    setThemeMod("dark");
  };
  const lightMod = () => {
    setThemeMod("light");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeMod);
  }, [themeMod]);

  return (
    <ThemeProvider value={{ themeMod, darkMod, lightMod }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <Theme />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
