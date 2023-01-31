const content = [
  {
    id: 1,
    title: "Menuiserie",
    description:
      "Nous nous spécialisons dans les travaux de menuiserie sur mesure pour les projets résidentiels et commerciaux. Notre équipe d'artisans qualifiés possède une grande expérience dans la création de meubles sur mesure, de placards et de boiseries.",
  },
  {
    id: 2,
    title: "Revêtements de sol en bois",
    description:
      "Nous proposons une grande variété d'options de revêtements de sol en bois, notamment en bois massif, en bois stratifié et en stratifié. Notre équipe peut vous aider à choisir le revêtement de sol parfait pour votre projet et à le poser selon les normes les plus élevées.",
  },
  {
    id: 3,
    title: "Finitions",
    description:
      "Nous proposons une gamme de services de finition, notamment de teinture, de peinture et de polissage. Notre équipe a les compétences et l'expérience pour obtenir la finition parfaite pour tout projet, qu'il s'agisse d'une esthétique traditionnelle ou moderne.",
  },
  {
    id: 4,
    title: "Gestion de projet",
    description:
      "L'équipe expérimentée de gestionnaires de projet de Hismar s'assure que chaque projet est achevé dans les délais et dans le budget imparti.",
  },
];

const Services = () => (
  <section class="container px-4 py-5" id="services">
    <h2 class="primary-color fs-1 pb-2 border-bottom">Nos Services</h2>

    <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
      {content?.map((item) => (
        <div class="service col">
          <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3"></div>
          {/* <img src="carpentry-icon.svg" alt="Carpentry" /> */}
          <h3 className="primary-color fs-2 mk-color-primary">{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Services;
