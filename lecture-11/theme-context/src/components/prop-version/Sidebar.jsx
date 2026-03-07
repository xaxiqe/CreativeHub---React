import ThemeButton from "./ThemeButton";

function Sidebar({ theme, toggleTheme }) {
  return (
    <div>
      <h2
        className={`flex justify-center mt-10 text-2xl ${theme === "light" ? "text-black" : "text-white"}`}
      >
        Sidebar
      </h2>
      <ThemeButton theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}
export default Sidebar;
