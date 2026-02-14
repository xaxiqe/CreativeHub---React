function Button({ btn, onClick }) {
  return (
    <div>
      <button
        onClick={onClick}
        className="px-4 py-2 border cursor-pointer text-white bg-gray-400 rounded-xl text-lg hover:bg-gray-400/60 transition"
      >
        {btn}
      </button>
    </div>
  );
}
export default Button;
