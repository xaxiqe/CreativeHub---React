import { useEffect, useState } from "react";

function JokesApi() {
  const [jokes, setJokes] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const fetchJokes = async () => {
    const res = await fetch("https://v2.jokeapi.dev/joke/Any");
    const data = await res.json();
    setJokes((prev) => [...prev, data]);
  };

  useEffect(() => {
    fetchJokes();
  }, []);

  const toggleFavorites = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id],
    );
  };

  return (
    <div>
      <h1 className="text-red-700 text-2xl text-center">Jokes Api</h1>

      {jokes.map((joke, index) => {
        const isFavorite = favorites.includes(index);

        return (
          <div
            key={index}
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
                onClick={() => toggleFavorites(index)}
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
    </div>
  );
}

export default JokesApi;
