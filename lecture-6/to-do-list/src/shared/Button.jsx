function Button({ color = "blue", button, ...props }) {
  let classes = "px-4 py-2 rounded-xl text-white";
  if (color === "blue") {
    classes += " bg-blue-500  hover:bg-blue-400";
  } else {
    classes += " bg-red-500 hover:bg-red-400";
  }
  return (
    <>
      <button {...props} className={classes}>
        {button}
      </button>
    </>
  );
}
export default Button;
