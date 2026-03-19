import ContextDemo from "./components/context-version/ContextDemo";
import PropDemo from "./components/prop-version/PropDemo";
import ZustandDemo from "./components/zustand-version/ZustandDemo";
import { ThemeProvider } from "./context/useThemeContext";

function App() {
  return (
    <div className="h-screen">
      <div className="h-1/2">
        <PropDemo />
      </div>

      <div className="h-1/2">
        <ThemeProvider>
          <ContextDemo />
        </ThemeProvider>
      </div>
      <div className="h-1/2">
        <ZustandDemo />
      </div>
    </div>
  );
}

export default App;
