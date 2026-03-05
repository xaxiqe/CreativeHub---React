import cn from "../../utils/cn";
import { useState } from "react";

const MAX_CHARS = 100;
function FavoriteItems({
  image,
  info,
  price,
  discountPrice,
  button,
  outOfStock,
  description,
  sizeClass = "w-full h-64",
}) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const favoriteItem = () => {
    setIsFavorite(!isFavorite);
  };

  const increase = () => {
    setQuantity(quantity + 1);
  };
  const decrease = () => {
    setQuantity(quantity > 1 ? quantity - 1 : quantity);
  };
  const [isReadMore, setIsReadMore] = useState(false);
  const readMore = () => {
    setIsReadMore(!isReadMore);
  };

  const totalPrice = (quantity * price).toFixed(2);

  return (
    <article className="w-full max-w-sm py-8">
      <img
        src={image}
        alt={info}
        className={`object-cover rounded-2xl mx-auto ${sizeClass}`}
      />

      <div className="flex justify-between mt-3">
        <p className="text-xl font-semibold text-center">{info}</p>
        <button className="text-4xl cursor-pointer" onClick={favoriteItem}>
          {isFavorite ? "♥️" : "🤍"}
        </button>
        <span className="text-2xl cursor-pointer" onClick={decrease}>
          ➖
        </span>
        <span className="text-xl font-bold  text-center">{quantity}</span>
        <span className="text-2xl cursor-pointer" onClick={increase}>
          ➕
        </span>
        <div className="flex gap-4">
          <span
            className={cn("text-2xl text-violet-500 font-bold", {
              "line-through": discountPrice,
            })}
          >
            {totalPrice}$
          </span>
          {discountPrice && (
            <span className="text-2xl text-violet-700 font-bold  ">
              {discountPrice}$
            </span>
          )}
        </div>
      </div>

      <p className="mt-3 mb-2 text-2xl text-gray-600 whitespace-normal ">
        {isReadMore
          ? description
          : `${description.slice(0, MAX_CHARS)}${description.length > MAX_CHARS ? "..." : ""}`}
        {description.length > MAX_CHARS && (
          <button onClick={readMore} className="text-2xl text-violet-500">
            Read {isReadMore ? "less" : "more"}
          </button>
        )}
      </p>

      <button
        disabled={outOfStock}
        className={cn(
          "px-6 py-3 rounded-xl font-semibold transition",
          outOfStock
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-violet-500 text-white hover:bg-violet-700",
        )}
      >
        {outOfStock ? "Out of Stock" : "Order Now"}
      </button>
    </article>
  );
}

export default FavoriteItems;
