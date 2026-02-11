const questions = [
  {
    id: 1,
    question: "How does the service work?",
    answer:
      "You submit your request, we review it, and guide you through the process step by step.",
  },
  {
    id: 2,
    question: "How long does it take?",
    answer:
      "The process usually takes between a few days and a few weeks, depending on the case.",
  },
  {
    id: 3,
    question: "Is this service free?",
    answer:
      "Initial consultation is free. Fees may apply only if your case is successful.",
  },
];
// <li className="text-3xl font-bold  mx-50">
//         Ask about our secret recepies
//       </li>
//       <li className="text-3xl mx-50 max-w-full text-gray-500 mt-2">
//         AirHelp works on a “no win, no fee” basis. So if we don’t win the
//         case in court, we won’t charge you any fee for our services —
//         that’s part of AirHelp’s promise.
//       </li>
function Accordion() {
  return (
    <>
      <h1 className="text-left mx-50 text-blue-700 text-8xl mt-5">
        Most Asked Questions
      </h1>

      <div className="flex justify-between items-center bg-gray-100 border-b-gray-300">
        <div>
          <ul className="mt-3">
            {questions.map((quest) => (
              <li className="text-3xl font-bold px-12" key={quest.id}>
                {quest.question} <br />
                {quest.answer}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-8xl text-blue-500">+</p>
        </div>
      </div>
    </>
  );
}
export default Accordion;
