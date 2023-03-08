const content = [
  {
    id: 1,
    title: "Quels types de services de menuiserie Hismar propose-t-il?",
    description:
      "Hismar se spécialise dans les services de menuiserie bois sur mesure. Nous offrons également des services de conception et d'ingénierie pour garantir que la meilleure combinaison d'espèces de bois est utilisée pour chaque projet en fonction des propriétés mécaniques du bois.",
  },
  {
    id: 2,
    title: "Depuis combien de temps Hismar est-il en affaires?",
    description: "Hismar est en affaires depuis plus de 55 ans.",
  },
  {
    id: 3,
    title:
      "Comment Hismar s'assure-t-il que le produit final est de haute qualité?",
    description:
      "Hismar utilise des technologies avancées, un savoir faire de 55 ans, une expertise en ingénierie et s'engage dans la discipline, la ponctualité et l'honnêteté pour s'assurer que le produit final est de haute qualité. Nous travaillons également en étroite collaboration avec nos clients pour comprendre leurs besoins et préférences spécifiques et adapter nos produits en conséquence.",
  },
  {
    id: 4,
    title: "Combien de temps Hismar prend pour terminer un projet?",
    description:
      "Le temps qu'il faut à Hismar pour terminer un projet peut varier en fonction de la complexité du projet. Nous vous fournirons une date d'achèvement estimée lors du processus de consultation.",
  },
  {
    id: 5,
    title: "Hismar offre-t-il des garanties sur ses produits?",
    description:
      "Oui, Hismar se tient derrière la qualité de ses produits et offre une garantie sur tous ses produits.",
  },
  {
    id: 6,
    title: "Comment puis-je planifier une consultation avec Hismar?",
    description:
      "Vous pouvez planifier une consultation avec Hismar en nous contactant via notre téléphone, site web, ou par courrier électronique.",
  },
];

const Faq = () => (
  <section className="container px-4 py-5" id="faq">
    <h3 className="primary-color fs-1 pb-2 border-bottom">FAQ</h3>
    <p className="primary-color fs-6 pb-2">Questions fréquemment posées</p>
    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
      {content?.map((item) => (
        <div key={item.id} className="col-md-6 col-lg-4 mb-4">
          <h6 className="primary-color mb-3">
            {/* <i className="far fa-paper-plane text-primary pe-2"></i> */}
            {item?.title}
          </h6>
          <p>
            {/* <strong>
              <u>Absolutely!</u>
            </strong>{" "} */}
            {item?.description}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default Faq;
