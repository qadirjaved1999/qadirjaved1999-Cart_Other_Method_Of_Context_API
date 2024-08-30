import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./Contexts/Theme";
import ThemeButton from "./Components/ThemeButton";
import Cart from "./Components/Cart";

function App() {
  const [themeMode, setthemeMode] = useState("light");
  console.log(themeMode)

  const lightTheme =  () => {
    setthemeMode("light")
  }
  const darkTheme =  () => {
    setthemeMode("dark")
  }

  //  Actall change in theme
   useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark");
    document.querySelector('html').classList.add(themeMode);

   },[themeMode])


  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
           <ThemeButton />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Cart />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
