import Image from "next/image";

import Palais from "../../../images/palais-claudio-bravo.jpg";

const Projects = () => (
  <div class="px-4 pt-5 my-5 text-center" id="projects">
    <h1 class="primary-color display-4">Palace Claudio Bravo</h1>
    <div class="col-lg-6 mx-auto">
      <p class="mb-4">
        Il était une fois, Hismar Menuiserie Plan a été approché par l'artiste
        renommé Claudio Bravo pour travailler sur un projet spécial: la
        rénovation de son palais au Maroc. Le palais, un magnifique exemple
        d'architecture marocaine traditionnelle, était tombé en dérepair et
        avait besoin d'une réfection complète.
      </p>
      <p>
        Claudio Bravo voulait restaurer le palais à sa gloire d'antan et y
        apporter également des touches modernes pour le rendre plus confortable
        et fonctionnel. Il cherchait une entreprise de menuiserie de luxe qui
        pourrait livrer des produits de haute qualité, bien conçus et dans les
        délais impartis, c'est alors qu'il a trouvé Hismar.
      </p>
      <p>
        L'équipe Hismar, dirigée par notre fondateur Kacem Ben bouazza, a
        travaillé en étroite collaboration avec Claudio Bravo et son équipe
        d'architectes et d'ingénieurs pour concevoir et construire des armoires
        sur mesure, des meubles et des moulures qui compléteraient
        l'architecture traditionnelle du palais tout en y apportant une
        fonctionnalité moderne.
      </p>
      <p>
        L'équipe a utilisé son expertise pour s'assurer que la meilleure
        combinaison d'espèces de bois était utilisée pour chaque projet en
        fonction des propriétés mécaniques du bois. Ils étaient également
        engagés dans la discipline, la ponctualité et l'honnêteté, ce qui
        garantissait que le projet était terminé dans les délais impartis et aux
        plus hauts standards de qualité et de luxe.
      </p>
      <p>
        Le résultat était tout simplement époustouflant. Le palace a été
        transformé en une œuvre d'art éblouissante qui fusionnait parfaitement
        l'architecture traditionnelle marocaine avec la fonctionnalité moderne.
        Claudio Bravo était ravi du produit final et heureux d'avoir Hismar
        comme partenaire dans ce projet.
      </p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
        {/* <button type="button" class="btn btn-primary btn-lg px-4 me-sm-3">
          Primary button
        </button> */}
        <button type="button" class="btn btn-outline-secondary btn-lg px-4">
          Prenez votre rendez vous
        </button>
      </div>
    </div>
    <div class="overflow-hidden" style={{ maxHeight: "50vh" }}>
      <div class="container px-5">
        {/* <img
          src="bootstrap-docs.png"
          class="img-fluid border rounded-3 shadow-lg mb-4"
          alt="Example image"
          width="700"
          height="500"
          loading="lazy"
        /> */}
        <Image
          src={Palais}
          class="img-fluid border rounded-3 shadow-lg mb-4"
          alt="Example image"
          width="700"
          height="500"
          loading="lazy"
        />
      </div>
    </div>
  </div>
);

export default Projects;
