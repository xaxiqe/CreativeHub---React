import { useState, useEffect } from "react";

function ChuckApi() {
  const [joke, setJoke] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchJokes, setSearchJokes] = useState([]);

  const fetchJokes = async () => {
    try {
      const res = await fetch("https://api.chucknorris.io/jokes/random");
      const data = await res.json();
      setJoke(data);
    } catch (error) {
      console.error(error);
    }
  };

  const searchJoke = async () => {
    if (!searchTerm.trim()) return;
    const res = await fetch(
      `https://api.chucknorris.io/jokes/search?query=${searchTerm}`,
    );
    const data = await res.json();
    setSearchJokes(data.result);
    console.log("data", data);
  };

  useEffect(() => {
    fetchJokes();
  }, []);

  return (
    <>
      <h1 className="text-2xl text-red-600 text-center">Chuck Jokes</h1>
      <div className="max-w-6xl mx-auto text-center space-y-3 mt-5 ">
        <div className="flex justify-center gap-3 items-center">
          <h1 className="text-2xl text-blue-600">{joke?.value}</h1>
          <span className="b px-3 py-2 border border-blue-600 rounded text-black font-semibold">
            <b>Created at: </b> {joke?.created_at?.split(".")[0]}
          </span>
        </div>
        <p className="text-lg  text-gray-500">Joke ID: {joke?.id}</p>

        <button
          className="px-4 py-2 bg-blue-700 text-white hover:bg-blue-700/75 rounded"
          onClick={fetchJokes}
        >
          New Joke
        </button>
      </div>
      <div className="max-w-sm mx-auto text-center space-y-3 mt-5 ">
        <div className="flex justify-center gap-2">
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && searchJoke()}
            type="text"
            className="py-2 px-3 border border-gray-400 rounded"
            placeholder="search jokes"
          />
          <button
            className="px-4 py-2 bg-blue-700 text-white hover:bg-blue-700/75 rounded"
            onClick={searchJoke}
          >
            Search
          </button>
        </div>
        {searchJokes.length === 0 && (
          <p className="text-gray-500 ">No jokes found.</p>
        )}
        {searchJokes.slice(0, 5).map((joke) => (
          <div
            key={joke.id}
            className="border border-gray-300 rounded p-3 text-left bg-gray-50"
          >
            {joke.value}
          </div>
        ))}
      </div>
    </>
  );
}

export default ChuckApi;
