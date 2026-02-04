function Card({ active }) {
  const base = "p-4 rounded-lg border transition";

  const state = active
    ? "bg-blue-600 text-white border-blue-700"
    : "bg-white text-black border-gray-200";
  return (
    <div className={`${base} ${state}`}>
      <h2 className="text-lg font-semibold">Card Title</h2>
      <p className="mt-2 text-sm opacity-90">This card changes style</p>
    </div>
  );
}
export default Card;
