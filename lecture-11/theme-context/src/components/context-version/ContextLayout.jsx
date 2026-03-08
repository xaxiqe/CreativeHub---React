import { useThemeContext } from "../../context/useThemeContext";
import ContextSidebar from "./ContextSidebar";

function ContextLayout() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <div
      className={` ${
        theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"
      }`}
    >
      <h1
        className={`flex justify-center mt-5 text-2xl ${theme === "light" ? "text-black" : "text-white"}`}
      >
        Theme toggle App Context
      </h1>
      <ContextSidebar theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}
export default ContextLayout;
