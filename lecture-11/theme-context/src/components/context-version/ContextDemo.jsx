import ContextLayout from "./ContextLayout";
import { useThemeContext } from "../../context/useThemeContext";
function ContextDemo() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <div
      className={` ${
        theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"
      }`}
    >
      <h2
        className={`flex justify-center  text-2xl ${theme === "light" ? "text-black" : "text-white"}`}
      >
        Context Demo
      </h2>
      <ContextLayout theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}
export default ContextDemo;
