let content = [
  {
    id: 1,
    title: "55 ans, une expérience continentale",
    description:
      "Du Maroc jusqu'au Congo, nous avons eu l'honneur de travailler sur un ensemble de villas, de prestigieux palais, des immeubles et des projets d'envergure internationale",
  },
  {
    id: 2,
    title: "Une Qualité, et une touche hors pair",
    description:
      "Nous produisons des oeuvres de qualité supérieure et d'une touche exceptionnelle",
  },
  {
    id: 3,
    title: "Transparence",
    description:
      "Dans notre travail, nous somme guidé par nos valeurs ou la discipline, la ponctualité et l'honneteté regnent",
  },
  {
    id: 4,
    title: "Methodologie de Travail Avancé",
    description:
      "Nous combinant l'expertise du passé et l'avancée technologique et méthodologique du present Afin de bien vous servir.",
  },
  {
    id: 5,
    title: "Precision",
    description:
      "Avant l'execution, chaqu'un de nos projet passe par une étape d'analyse et de design, ou nous comptons sur la connaissance de nos ingénieurs afin d'analyser vos requirements et les contraintes pour approter, ensuite, une solution adaptée",
  },
];

content = [
  {
    id: 1,
    title: "Technologie avancée et expertise en ingénierie",
    description:
      "Nous utilisons une technologie avancée et une expertise en ingénierie pour nous assurer que la meilleure combinaison d'espèces de bois est utilisée pour chaque projet, en fonction des propriétés mécaniques du bois.",
  },
  {
    id: 1,
    title: "Produits de haute qualité et de luxe",
    description:
      "Notre équipe de professionnels est dédiée à la livraison de produits de haute qualité et bien conçus qui répondent aux besoins spécifiques de nos clients.",
  },
  {
    id: 3,
    title: "Engagement envers la discipline, la ponctualité et l'honnêteté",
    description:
      "Nous nous engageons à la discipline, à la ponctualité et à l'honnêteté dans tout ce que nous faisons, ce qui garantit que vous serez entièrement satisfait du produit final.",
  },
  {
    id: 4,
    title: "Respect des délais",
    description:
      "Nous comprenons que le temps est essentiel, c'est pourquoi nous nous engageons à livrer votre projet à temps, sans compromettre la qualité.",
  },
  {
    id: 5,
    title: "Expérience",
    description:
      "Avec plus de 55 ans d'expérience dans les affaires, nous avons l'expérience et l'expertise pour gérer tout projet de menuiserie, petit ou grand.",
  },
  {
    id: 6,
    title: "Personnalisation",
    description:
      "Nous travaillons en étroite collaboration avec nos clients pour comprendre leurs besoins et préférences spécifiques, et adapter nos produits en conséquence.",
  },
  {
    id: 7,
    title: "Réputation",
    description:
      "Nous avons une forte réputation de livrer des produits de luxe qui sont conçus pour durer, et une équipe de professionnels qui sont dédiés à fournir le meilleur service possible à nos clients.",
  },
];

const Benefits = () => (
  <div class="container px-4 py-5" id="benefits">
    <h2 class="primary-color fs-1 pb-2 border-bottom">
      Les avantages de choisir Hismar Menuiserie
    </h2>
    <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
      {content?.map((item) => (
        <div class="benefit col">
          <div class="benefit-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3"></div>
          <h3 class="primary-color fs-2 mk-color-primary ">{item?.title}</h3>
          <p>{item?.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Benefits;
