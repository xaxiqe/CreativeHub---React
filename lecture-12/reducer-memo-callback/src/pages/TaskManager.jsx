import { useReducer, useMemo, useState } from "react";
import cn from "../utils/cn";

function Card() {
  const styleButtons = (type) =>
    cn(
      "px-6 py-2 text-sm border border-gray-200 rounded-xl",
      filter === type && "font-bold underline",
    );

  const reducer = (state, action) => {
    if (action.type === "ChangeItem") {
      return {
        ...state,
        item: action.payload,
      };
    }
    if (action.type == "AddTo") {
      return {
        item: "",
        list: [...state.list, action.payload],
      };
    }
    if (action.type === "ToggleItem") {
      return {
        ...state,
        list: state.list.map((lis, index) => {
          if (index == action.payload) {
            return {
              ...lis,
              checked: !lis.checked,
            };
          }
          return lis;
        }),
      };
    }
    return state;
  };
  const [state, dispatch] = useReducer(reducer, {
    item: "",
    list: [],
  });

  const [filter, setFilter] = useState("all");
  const filteredItems = useMemo(() => {
    if (filter === "completed") return state.list.filter((t) => t.checked);
    if (filter === "incomplete") return state.list.filter((t) => !t.checked);
    return state.list;
  }, [filter, state.list]);
  return (
    <>
      <div className="flex justify-center gap-3">
        <input
          value={state.item}
          onChange={(e) => {
            dispatch({
              type: "ChangeItem",
              payload: e.target.value,
            });
          }}
          type="text"
          className="py-4 px-6 border rounded-xl border-gray-300 "
          placeholder="Add your task.."
        />
        <button
          className="py-2 px-6 rounded-sm text-black bg-gray-200 border-gray-300"
          onClick={() => {
            if (!state.item) return;
            dispatch({
              type: "AddTo",
              payload: {
                todo: state.item,
                checked: false,
              },
            });
          }}
        >
          Add
        </button>
        <br />
      </div>
      <div className="flex justify-center gap-3 my-4">
        <button
          onClick={() => setFilter("all")}
          className={styleButtons("all")}
        >
          {" "}
          All
        </button>
        <button
          onClick={() => setFilter("completed")}
          className={styleButtons("completed")}
        >
          {" "}
          Completed
        </button>
        <button
          onClick={() => setFilter("incomplete")}
          className={styleButtons("incomplete")}
        >
          {" "}
          Incomplete
        </button>
      </div>
      <ul className="text-center text-3xl mr-2">
        {filteredItems.map((lis, idx) => (
          <li key={idx}>
            <input
              className="w-5 h-5 mr-2 text-center"
              type="checkbox"
              checked={lis.checked}
              onChange={() =>
                dispatch({
                  type: "ToggleItem",
                  payload: idx,
                })
              }
            />
            {lis.todo}
          </li>
        ))}
      </ul>
    </>
  );
}
export default Card;
