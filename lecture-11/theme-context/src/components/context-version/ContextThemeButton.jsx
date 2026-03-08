import { useThemeContext } from "../../context/useThemeContext";

function ContextThemeButton() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <div className="flex justify-center items-center mt-10">
      <button
        className={`px-6 py-3 text-3xl mb-3 rounded-xl ${theme === "light" ? "bg-gray-900 text-white" : "bg-white text-black"}`}
        onClick={toggleTheme}
      >
        Switch Theme to: {theme === "light" ? "dark" : "light"}
      </button>
    </div>
  );
}

export default ContextThemeButton;
