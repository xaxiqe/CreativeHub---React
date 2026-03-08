import Sidebar from "./Sidebar";

function Layout({ theme, toggleTheme }) {
  return (
    <div
      className={` ${
        theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"
      }`}
    >
      <h1
        className={`flex justify-center mt-5 text-2xl ${theme === "light" ? "text-black" : "text-white"}`}
      >
        Theme toggle App Prop
      </h1>
      <Sidebar theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}
export default Layout;
