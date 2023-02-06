const Footer = () => (
  <footer
    className="text-center text-lg-start bg-light text-muted"
    style={{ backgroundColor: "rgb(89, 39,0,0.85)" }}
  >
    <section className="p-2">
      <div className="container text-center text-md-start mt-5">
        <div className="row mt-3">
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Hismar Menuiserie</h6>
            <p style={{ textAlign: "justify" }}>
              Hismar Carpentry est une entreprise de menuiserie sur mesure
              Fournir des produits et services de menuiserie de haute qualité à
              nos clients en utilisant l'expertise et une équipe de
              professionnels dédiés à la discipline, la ponctualité et
              l'honnêteté dans tout ce que nous faisons. Maintenir notre
              réputation en tant que partenaire commercial fiable et digne de
              confiance
            </p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Nos Services</h6>
            <p>
              <a href="#services" className="text-reset">
                Menuiserie
              </a>
            </p>
            <p>
              <a href="#services" className="text-reset">
                Revêtements de sol en bois
              </a>
            </p>
            <p>
              <a href="#services" className="text-reset">
                Finitions
              </a>
            </p>
          </div>

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Liens utiles</h6>
            <p>
              <a href="#benefits" className="text-reset">
                Nos avantages
              </a>
            </p>
            <p>
              <a href="#services" className="text-reset">
                Nos services
              </a>
            </p>
            <p>
              <a href="#projects" className="text-reset">
                Nos projets
              </a>
            </p>
            <p>
              <a href="#faq" className="text-reset">
                Questions fréquemment posées
              </a>
            </p>
            <p>
              <a href="#contact" className="text-reset">
                Demander un devis
              </a>
            </p>
          </div>

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
            <p>48 Rue 10, Bd du Fouarat, Casablanca 20020</p>
            <p>othmanben.vp@gmail.com</p>
            <p>06 62 17 70 69</p>
          </div>
        </div>
      </div>
    </section>

    <div
      className="text-center p-4"
      style={{ backgroundColor: "rgba(89, 39, 0)", color: "white" }}
    >
      © 2023 Copyright: {"    "}
      <a
        className="text-reset fw-bold"
        style={{ color: "white" }}
        href="https://hismarmenuiserie.com/"
      >
        hismarmenuiserie.com
      </a>
    </div>
  </footer>
);

export default Footer;
