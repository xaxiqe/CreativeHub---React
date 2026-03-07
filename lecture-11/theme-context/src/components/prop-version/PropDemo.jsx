import { useState } from "react";
import Layout from "./Layout";
function PropDemo() {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }
  return (
    <div
      className={` ${
        theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"
      }`}
    >
      <h2
        className={`flex justify-center mt-5 text-2xl ${theme === "light" ? "text-black" : "text-white"}`}
      >
        Prop Demo
      </h2>
      <Layout theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}
export default PropDemo;
