import PrimaryCard from "../../shared/components/app-primary-card";

const TestPage = () => {
  const CardItem = {
    header: <>test header</>,
    content: <>test header</>,
    footer: <>test footer</>,
  };

  return (
    <>
      <h1>CECI EST LA PAGE TEST</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
        laboriosam ipsa accusantium soluta quisquam asperiores totam officiis
        deleniti doloremque! Sint sapiente sed quasi eos dolores voluptas
        asperiores optio ab delectus.
      </p>

      <h2>Ceci est un titre</h2>
      <p>
        <PrimaryCard CardItem={CardItem} />
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut,
        blanditiis molestias delectus earum tempore quam incidunt maxime minus
        praesentium quidem facere magnam perspiciatis aspernatur illum culpa
        autem! In, sequi eos!
      </p>
    </>
  );
};

export default TestPage;
