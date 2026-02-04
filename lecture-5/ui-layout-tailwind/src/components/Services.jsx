import ServiceCard from "./ServiceCard";

function Services() {
  return (
    <div className="max-w-7xl flex justify-center bg-gray-500/20 mx-auto p-6">
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
