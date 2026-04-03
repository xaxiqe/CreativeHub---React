import {
  useChess,
  useCreatePlayer,
  useDeletePlayer,
  ChessQueryKeys,
} from "./data/chess/chess.queries";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useQueryClient } from "@tanstack/react-query";

import { useState } from "react";

import { PAGE_SIZE } from "./data/chess/chess.api";

const schema = yup.object({
  name: yup.string().required(),
  rating: yup.number().required(),
  grade: yup.string().required(),
});

function App() {
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState("name");
  const [showForm, setShowForm] = useState(false);
  const { data, isPending } = useChess(page);
  const totalPages = data ? Math.max(1, Math.ceil(data.total / PAGE_SIZE)) : 1;

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const { mutate } = useCreatePlayer();
  const queryClient = useQueryClient();

  const onSubmit = (data) => {
    mutate(
      {
        name: data.name,
        rating: Number(data.rating),
        grade: data.grade,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: ["chess"],
          });
          setShowForm(false);
          alert("New player has been created");
        },
        onError: (err) => {
          console.log(err);
        },
      },
    );
  };
  const { mutate: deleteMutate } = useDeletePlayer();

  const handleDelete = (id) => {
    deleteMutate(id, {
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: ["chess"],
        });
      },
      onError: (err) => {
        console.log(err);
      },
    });
  };

  if (isPending) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Chess Players
        </h1>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-700">Sort By:</h2>

          <div className="flex gap-2">
            <button
              onClick={() => setSortBy("name")}
              className={`px-3 py-1 rounded ${
                sortBy === "name"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              Name
            </button>

            <button
              onClick={() => setSortBy("rating")}
              className={`px-3 py-1 rounded ${
                sortBy === "rating"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              Rating
            </button>
          </div>
        </div>

        <ol className="space-y-3 mb-8">
          {data.items.map((item, index) => (
            <li
              key={item.sys.id}
              className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded-md shadow-sm"
            >
              <span className="font-semi-bold ">
                {index + 1}. {item.fields.name}
              </span>
              <span className="text-sm text-gray-600">
                Grade: {item.fields.grade}
              </span>
              <span className="text-sm text-gray-600">
                Rating: {item.fields.rating}
              </span>
              <button className="text-sm text-blue-500 hover:text-blue-700">
                Edit
              </button>
              <button
                className="text-sm text-red-500 hover:text-red-700"
                onClick={() => handleDelete(item.sys.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ol>
        <div className="flex items-center justify-center gap-4 mb-8">
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
          >
            Previous
          </button>

          <span className="font-medium">Page {page}</span>

          <button
            onClick={() => setPage((prev) => prev + 1)}
            disabled={page === totalPages}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>

        <button
          onClick={() => setShowForm((prev) => !prev)}
          className="mb-4 px-4 py-2 bg-green-500 text-white rounded"
        >
          {showForm ? "Close Form" : "Add New Player"}
        </button>

        {showForm && (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                {...register("name")}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Rating</label>
              <input
                type="number"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                {...register("rating")}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Grade</label>
              <input
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                {...register("grade")}
              />
            </div>

            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
            >
              Add a Player
            </button>
          </form>
        )}
      </div>
    </>
  );
}

export default App;
