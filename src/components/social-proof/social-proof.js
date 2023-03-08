const content = [
  {
    id: 1,
    description:
      "Hismar a dépassé toutes nos attentes. Le savoir-faire sur notre cuisine bois sur mesure est vraiment époustouflant et nous ne pourrions pas être plus heureux avec le produit final. L'équipe était professionnelle et ponctuelle tout au long du processus.",
    nom: "Amine et Amal Berrada",
  },
  {
    id: 2,
    description:
      "Nous cherchions une entreprise de menuiserie de luxe pour nous aider à concevoir et à rénover notre maison, et nous ne pourrions pas être plus heureux avec le résultat. Hismar a livré un produit magnifique et de haute qualité qui a dépassé nos attentes. L'équipe était également très professionnelle et ponctuelle.",
    nom: "Michael et Lisa Dupont",
  },
  {
    id: 3,
    description:
      "Nous avions besoin d'un travail de menuiserie bois sur mesure pour notre hôtel, Hismar était la solution idéale pour nous. L'équipe était très professionnelle et le produit final a dépassé nos attentes. Nous recommandons fortement Hismar pour tout travail de menuiserie.",
    nom: "Directeur Hotel 5 stars",
  },
];

const SocialProof = () => (
  <section className="container px-4 py-5" id="social-proofs">
    <h2 className="primary-color fs-1 pb-2 border-bottom">
      What Our Clients Are Saying
    </h2>
    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
      {content?.map((item) => (
        <div key={item.id} className="col-md-4">
          <div className="card social-proof">
            <div className="card-body ">
              <p className="card-text">{item.description}</p>
              <h5 className="card-title">{item.nom}</h5>
              {/* <p className="card-subtitle mb-2 text-muted">Client Satisfait</p> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default SocialProof;
