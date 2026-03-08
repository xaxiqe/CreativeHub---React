import { useThemeContext } from "../../context/useThemeContext";
import ContextThemeButton from "./ContextThemeButton";

function ContextSidebar() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <div>
      <h2
        className={`flex justify-center mt-10 text-2xl ${theme === "light" ? "text-black" : "text-white"}`}
      >
        Sidebar Context
      </h2>
      <ContextThemeButton theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}
export default ContextSidebar;
