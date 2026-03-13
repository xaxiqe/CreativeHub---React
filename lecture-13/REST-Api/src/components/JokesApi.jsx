import { useEffect, useState } from "react";

function JokesApi() {
  const [jokes, setJokes] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchJokes = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const res = await fetch("https://v2.jokeapi.dev/joke/Any");
    const data = await res.json();
    setJokes((prev) => [...prev, { ...data, id: Date.now() }]);
    setLoading(false);
  };

  useEffect(() => {
    fetchJokes();
  }, []);

  const toggleFavorites = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id],
    );
  };

  const favJokes = jokes.filter((joke) => favorites.includes(joke.id));

  return (
    <div>
      <h1 className="text-red-700 text-2xl text-center">Jokes Api</h1>
      {loading && (
        <p className="text-center mt-3 text-gray-500">Loading joke...</p>
      )}

      {jokes.map((joke) => {
        const isFavorite = favorites.includes(joke.id);

        return (
          <div
            key={joke.id}
            className="bg-gray-100 p-4 rounded-lg max-w-xl mx-auto mt-4"
          >
            {joke.type === "single" ? (
              <p>{joke.joke}</p>
            ) : (
              <>
                <p className="font-semibold">{joke.setup}</p>
                <p>{joke.delivery}</p>
              </>
            )}

            <div className="flex gap-3 mt-2">
              <button
                onClick={fetchJokes}
                className="px-4 py-2 bg-gray-700 text-white hover:bg-gray-700/75 rounded"
              >
                Add Joke
              </button>

              <button
                onClick={() => toggleFavorites(joke.id)}
                className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-700/75"
              >
                {isFavorite ? "♥️" : "🤍"}
              </button>
            </div>
          </div>
        );
      })}

      <p className="bg-gray-100 p-4 rounded-lg max-w-xl mx-auto mt-4">
        {favorites.length > 0
          ? `Favorites:${favorites.length}`
          : "Favorites is empty"}
      </p>
      <div className="bg-gray-100 p-4 rounded-lg max-w-xl mx-auto mt-4">
        {favJokes.map((fav) => (
          <div
            key={fav.id}
            className="bg-gray-100 p-4 border border-gray-800-600 rounded-lg max-w-xl mx-auto mt-4"
          >
            {fav.type === "single" ? (
              <p>{fav.joke}</p>
            ) : (
              <>
                <p className="font-semibold">{fav.setup}</p>
                <p>{fav.delivery}</p>
              </>
            )}
            <button
              className="px-4 py-2 mt-1 bg-red-500 text-white text-sm hover:bg-gray-700/75 rounded"
              onClick={() => toggleFavorites(fav.id)}
            >
              Remove Joke
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JokesApi;
