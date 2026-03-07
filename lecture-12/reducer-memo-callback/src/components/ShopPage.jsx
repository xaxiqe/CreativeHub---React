import { useReducer, useState } from "react";
import Products from "./Products";
import ShoppingCart from "./ShoppingCart";

function ShopPage() {
  const reducer = (state, action) => {
    if (action.type === "AddToCart") {
      const alreadyInCart = state.item.find(
        (idx) => idx.id === action.payload.id,
      );
      if (alreadyInCart) {
        return {
          ...state,
          item: state.item.map((idx) => {
            if (idx.id === action.payload.id) {
              return {
                ...idx,
                quantity: idx.quantity + 1,
              };
            }
            return idx;
          }),
        };
      }
      return {
        ...state,
        item: [...state.item, { ...action.payload, quantity: 1 }],
      };
    }
    if (action.type === "RemoveItem") {
      return {
        ...state,
        item: state.item.filter((idx) => idx.id !== action.payload),
      };
    }
    if (action.type === "IncrementQuantity") {
      return {
        ...state,
        item: state.item.map((idx) => {
          if (idx.id === action.payload) {
            return {
              ...idx,
              quantity: idx.quantity + 1,
            };
          }
          return idx;
        }),
      };
    }
    if (action.type === "DecrementQuantity") {
      return {
        ...state,
        item: state.item.map((idx) => {
          if (idx.id === action.payload) {
            return {
              ...idx,
              quantity: idx.quantity > 1 ? idx.quantity - 1 : idx.quantity,
            };
          }
          return idx;
        }),
      };
    }
    return state;
  };
  const [state, dispatch] = useReducer(reducer, {
    item: [],
  });

  return (
    <>
      <ShoppingCart cart={state.item} dispatch={dispatch} />
      <Products dispatch={dispatch} />
    </>
  );
}

export default ShopPage;
