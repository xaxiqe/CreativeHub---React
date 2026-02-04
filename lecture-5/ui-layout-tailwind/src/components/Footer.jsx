import FooterCard from "./FooterCard";
function Footer() {
  return (
    <div className="container mt-10 flex justify-center gap-4 mx-auto items-center">
      <FooterCard
        className="text-xl "
        title="Latest News"
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas consequuntur, sapiente veniam veritatis cupiditate inventore a esse itaque harum? "
      />
      <FooterCard
        className="text-xl"
        title="Relases"
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas consequuntur, sapiente veniam veritatis cupiditate inventore a esse itaque harum? "
      />
      <FooterCard
        className="text-xl"
        title="Jobs"
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas consequuntur, sapiente veniam veritatis cupiditate inventore a esse itaque harum? "
      />
    </div>
  );
}
export default Footer;
