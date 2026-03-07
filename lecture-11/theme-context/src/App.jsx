import ContextDemo from "./components/context-version/ContextDemo";
import PropDemo from "./components/prop-version/PropDemo";

function App() {
  return (
    <div className="h-screen">
      <div className="h-1/2">
        <PropDemo />
      </div>

      <div className="h-1/2">
        <ContextDemo />
      </div>
    </div>
  );
}

export default App;
