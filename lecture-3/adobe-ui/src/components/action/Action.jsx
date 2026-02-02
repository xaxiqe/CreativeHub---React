import CallToAction from "./CallToAction";
import "./action.css";
function Action() {
  const dataAction = [
    {
      id: 1,
      text: "* Creative Cloud for individuals offer available for new subscribers.",
      link: "See terms",
    },
    {
      id: 2,
      text: "*** Student offer available for new subscribers. Requires a 12-month commitment.",
      link: "Learn more",
    },
    {
      id: 3,
      text: "*** Creative Cloud for teams offer available for new subscribers. Requires a 12-month commitment",
      link: "See terms",
    },
  ];

  return (
    <section className="action-card">
      {dataAction.map((data) => (
        <CallToAction key={data.id} text={data.text} link={data.link} />
      ))}
    </section>
  );
}
export default Action;
