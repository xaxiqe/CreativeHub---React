import Faq from "./Faq";
const questions = [
  {
    id: 1,
    question: "What is Magnolia Bakery most famous for?",
    answer:
      "While we love all our treats, we are world-renowned for our legendary Banana Pudding and our classic, hand-frosted vanilla and chocolate cupcakes.",
  },
  {
    id: 2,
    question: "Do you offer nationwide shipping?",
    answer:
      "Yes! We ship our famous banana pudding, cookies, and cakes across the country so you can enjoy a taste of NYC from anywhere.",
  },
  {
    id: 3,
    question: "Are there gluten-free or vegan options available?",
    answer:
      "We do offer select flourless chocolate cakes and gluten-free cupcake options in our bakeries daily, though our kitchens handle wheat and dairy.",
  },
  {
    id: 4,
    question: "Can I place a custom order for a special event?",
    answer:
      "Absolutely. From tiered wedding cakes to custom edible image cupcakes, our events team can help make your celebration extra sweet.",
  },
  {
    id: 5,
    question: "How should I store my banana pudding?",
    answer:
      "Our banana pudding is best enjoyed cold and should be kept refrigerated. For the best texture, we recommend eating it within 48 hours of purchase.",
  },
  {
    id: 6,
    question: "Do you offer baking classes?",
    answer:
      "We do! We host icing workshops where you can learn our signature 'Magnolia Swirl' and other professional decorating techniques.",
  },
];

function Faqs() {
  return (
    <>
      <h1 className="contaier text-center text-blue-700 text-6xl mt-5 mb-10">
        Most Asked Questions
      </h1>

      <div className="container mx-auto">
        <ul className="space-y-3">
          {questions.map((quest) => (
            <Faq key={quest.id} quest={quest} />
          ))}
        </ul>
      </div>
    </>
  );
}
export default Faqs;
