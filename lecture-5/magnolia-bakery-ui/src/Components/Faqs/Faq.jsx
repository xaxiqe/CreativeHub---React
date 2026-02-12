import { useState } from "react";

function Faq({ quest }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li
      onClick={() => setIsOpen((o) => !o)}
      className=" border mx-auto cursor-pointer border-gray-300 rounded-xl pl-10 px-3 py-5"
    >
      <p className="text-3xl mx-auto text-gray-700">
        {isOpen ? "➖" : "➕"} {quest.question}
      </p>
      {isOpen && <p className="mt-3 text-lg">{quest.answer}</p>}
    </li>
  );
}
export default Faq;
