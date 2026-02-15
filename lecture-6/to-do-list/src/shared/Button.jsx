function Button({ color = "blue", button, onClick }) {
  let classes = "px-4 py-2 rounded-xl text-white";
  if (color === "blue") {
    classes += " bg-blue-500  hover:bg-blue-400";
  } else if (color === "gray") {
    classes += " bg-gray-500 hover:bg-gray-400";
  } else {
    classes += " bg-red-500 hover:bg-red-400";
  }
  return (
    <>
      <button onClick={onClick} className={classes}>
        {button}
      </button>
    </>
  );
}
export default Button;
