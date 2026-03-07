import { useReducer, useState } from "react";
import Products from "./Products";
import ShoppingCard from "./ShoppingCart";

function ShopPage() {
  const reducer = (state, action) => {
    if (action.type === "AddToCart") {
      return {
        item: [...state.item, action.payload],
      };
    }
    if (action.type === "RemoveItem") {
      return {
        item: state.item.filter((i) => i.id !== action.payload),
      };
    }

    return state;
  };
  const [state, dispatch] = useReducer(reducer, {
    item: [],
  });

  return (
    <>
      <ShoppingCard cart={state.item} dispatch={dispatch} />
      <Products dispatch={dispatch} />
    </>
  );
}
export default ShopPage;
