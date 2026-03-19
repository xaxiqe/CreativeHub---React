import useThemeStore from "../../stores/useThemeStore";
function ZustandDemo() {
  const theme = useThemeStore((state) => state.value);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

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

      <div className="flex justify-center items-center mt-10">
        <button
          className={`px-6 py-3 text-3xl mb-3 rounded-xl ${theme === "light" ? "bg-gray-900 text-white" : "bg-white text-black"}`}
          onClick={toggleTheme}
        >
          Switch Theme to: {theme === "light" ? "dark" : "light"}
        </button>
      </div>
    </div>
  );
}
export default ZustandDemo;
