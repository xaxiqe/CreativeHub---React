import ServiceCard from "./ServiceCard";

function Services() {
  return (
    <div className="container mx-auto flex justify-center mt-10 py-10 rounded-xl bg-gray-500/20 p-6">
      <ServiceCard
        className="text-lg mt-2 "
        title="Conslulting"
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas consequuntur, sapiente veniam veritatis cupiditate inventore a esse itaque harum? "
      />
      <ServiceCard
        className="text-lg mt-2"
        title="Developing"
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas consequuntur, sapiente veniam veritatis cupiditate inventore a esse itaque harum? "
      />
      <ServiceCard
        className="text-lg mt-2"
        title="Designing"
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas consequuntur, sapiente veniam veritatis cupiditate inventore a esse itaque harum? "
      />
      <ServiceCard
        className="text-lg mt-2"
        title="Analysis"
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas consequuntur, sapiente veniam veritatis cupiditate inventore a esse itaque harum? "
      />
    </div>
  );
}

export default Services;
