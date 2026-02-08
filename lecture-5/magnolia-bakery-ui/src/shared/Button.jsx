function Button({ btn, align = "text-center" }) {
  return (
    <div className={`${align} mb-8`}>
      <a
        className="text-violet-950 leading-wide text-2xl bg-violet-400 rounded-xl p-4 hover:bg-violet-600 hover:text-white inline-block mt-4"
        href="#"
      >
        {btn}
      </a>
    </div>
  );
}
export default Button;
