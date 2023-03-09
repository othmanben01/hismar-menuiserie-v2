import Image from "next/image";
import LivingRoomMajestic1Image from "../../../images/living-room-majestic-1.jpeg";
import Logo from "../../../images/logo.png";
import content from "../../content/hero";
const Hero = () => (
  <section className="container col-xxl-8 px-4 py-5 ">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-lg-6">
        <Image
          src={LivingRoomMajestic1Image}
          className="d-block mx-lg-auto img-fluid"
          alt="Bootstrap Themes"
        />
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 lh-1 mb-3">{content.aida.attention}</h1>
        <p className="lead text-justify">{content.aida.interest}</p>
        <p className="lead text-justify">{content.aida.desir}</p>
        <p className="lead text-justify">{content.aida.action}</p>
        <div
          className="d-grid gap-2 d-md-flex justify-content-md-start"
          style={{ width: "100%" }}
        >
          <a
            type="button"
            href="tel:+212662177069"
            className="primary-background rounded-0 border-0 btn btn-primary btn-lg px-4 me-md-2 mk-bg-primary luxury-color border-0 no-border-radius "
            style={{ width: "100%" }}
          >
            {content.aida.cta}
            <p className="fs-6">06 62 17 70 69</p>
          </a>
          {/* <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button> */}
        </div>
      </div>
    </div>
  </section>
);

export default Hero;

// const content = {
//   title: "Menuiserie bois sur mesure depuis 1968.",
//   description:
//     "Depuis notre création en 1968, hismar à pu dévolopper une approche révolutionaire de la menuiserie. Vous pouvez conpter sur la qualité supérieur Du Maroc jusqu'au congo, nous avons",
//   cta: "Faites le premier pas vers votre projet de rêve",
// };

// const content = {
//   title: "Libérez la beauté et la durabilité du bois avec Hismar",
//   description:
//     "Chez Hismar Menuiserie, nous nous engageons à fournir des produits de menuiserie de luxe de haute qualité adaptés à vos besoins spécifiques. Notre équipe de professionnels utilise une technologie de pointe, une expertise en ingénierie et un engagement envers la discipline, la ponctualité et l'honnêteté pour créer des travaux de menuiserie uniques qui dureront toute une vie. Contactez-nous dès aujourd'hui pour planifier une consultation et découvrir la différence avec Hismar.",
//   cta: "Appelez-nous dès aujourd'hui",
// };
