import FooterCard from "./FooterCard";
function Footer() {
  return (
    <div className="max-w-6xl mt-10 flex justify-center gap-4 mx-auto items-center">
      <FooterCard
        title="Latest News"
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas consequuntur, sapiente veniam veritatis cupiditate inventore a esse itaque harum? "
      />
      <FooterCard
        title="Relases"
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas consequuntur, sapiente veniam veritatis cupiditate inventore a esse itaque harum? "
      />
      <FooterCard
        title="Jobs"
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas consequuntur, sapiente veniam veritatis cupiditate inventore a esse itaque harum? "
      />
    </div>
  );
}
export default Footer;
