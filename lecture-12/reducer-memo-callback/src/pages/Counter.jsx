import { useReducer } from "react";

function Count() {
  const reducer = (state, action) => {
    if (action.type == "Increment") {
      return {
        count: state.count + 1,
      };
    }
    if (action.type == "Decrement") {
      return {
        count: state.count ? state.count - 1 : state.count,
      };
    }
    if (action.type === "Reset") {
      return {
        count: 0,
      };
    }
    return state;
  };

  const [state, dispatch] = useReducer(reducer, {
    count: 0,
  });

  return (
    <div className="flex gap-3 container mx-auto justify-center">
      <button
        className="py-2 px-4 rounded-sm text-black bg-gray-200 border-gray-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
        onClick={() => {
          dispatch({
            type: "Increment",
          });
        }}
        disabled={state.count >= 10}
      >
        Increment
      </button>
      <span className="text-2xl font-bold px-4">{state.count}</span>
      <button
        className="py-2 px-4 rounded-sm text-vlack bg-gray-200 border-gray-600"
        onClick={() => {
          dispatch({
            type: "Decrement",
          });
        }}
      >
        Decrement
      </button>

      <button
        className="py-2 px-4 rounded-sm text-black bg-amber-200 border-gray-300"
        onClick={() => {
          dispatch({
            type: "Reset",
          });
        }}
      >
        Reset
      </button>
    </div>
  );
}
export default Count;
