import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Hero from "@/components/hero/hero";
import Benefits from "@/components/benefits/benefits";
import Services from "@/components/services/services";
import SocialProof from "@/components/social-proof/social-proof";
import Projects from "@/components/projects/projects";
import Faq from "@/components/faq/faq";
import Contact from "@/components/contact/contact";
import FounderNote from "@/components/founder-note/founder-note";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Hismar Menuiserie Bois: Luxueusement sur mesure depuis 1968.
        </title>
        <meta
          name="description"
          content="Hismar Menuiserie est une entreprise de menuiserie bois sur mesure. Nous
              fournissons des produits et services de menuiserie de haute
              qualité à nos clients en utilisant notre expertise et une équipe de
              professionnels dédiés à la discipline, la ponctualité et
              l'honnêteté dans tout ce que nous faisons. Notre objectif est
              celui de maintenir notre réputation en tant que partenaire
              commercial fiable et digne de confiance."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* <Navbar /> */}
        <Hero />
        <Benefits />
        <Services />
        <SocialProof />
        <Projects />
        <Faq />
        <FounderNote />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
