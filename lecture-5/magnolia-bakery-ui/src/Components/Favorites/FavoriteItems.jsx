import cn from "../../utils/cn";
import { useState } from "react";
function FavoriteItems({
  image,
  info,
  price,
  discountPrice,
  button,
  outOfStock,
  sizeClass = "w-full h-64",
}) {
  const [isFavorite, setIsFavorite] = useState(false);
  const favoriteItem = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <article className="py-8">
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
        <span className="text-2xl cursor-pointer">➕</span>
        <span className="text-2xl cursor-pointer">➖</span>
        <div className="flex gap-4">
          <span
            className={cn("text-2xl text-violet-500 font-bold", {
              "line-through": discountPrice,
            })}
          >
            {price}$
          </span>
          {discountPrice && (
            <span className="text-2xl text-violet-700 font-bold  ">
              {discountPrice}$
            </span>
          )}
        </div>
      </div>
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
