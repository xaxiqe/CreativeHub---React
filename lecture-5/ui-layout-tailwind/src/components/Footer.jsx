import FooterCard from "./FooterCard";
function Footer() {
  return (
    <div className="max-w-7xl mt-3 flex justify-center gap-1 bg-gray-500/10 mx-auto items-center">
      <FooterCard
        className="text-xl"
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
