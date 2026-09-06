"use client";

import Image from "next/image";
import { useState } from "react";

type Stage = "starting" | "operating" | "growing";

const stages: Record<Stage, {
  tab: string;
  title: string;
  intro: string;
  description: string;
  image: string;
  services: { label: string; icon: string }[];
}> = {
  starting: {
    tab: "Al empezar",
    title: "Estás por formalizar tu negocio",
    intro: "¿Estás por formalizar tu negocio y quieres hacerlo bien desde el inicio? Cuéntanos en qué etapa estás y te orientamos sin compromiso.",
    description: "Las decisiones de arranque definen cómo nace tu empresa. Te ayudamos a estructurarlas bien desde el primer día.",
    image: "/assets/photos/desktop-cs-foto59.webp",
    services: [
      { label: "Constitución de SAC, SRL o E.I.R.L. — Corporativo y Societario.", icon: "/assets/figma/desktop-vector1.svg" },
      { label: "Búsqueda y registro de marca — Propiedad Intelectual.", icon: "/assets/figma/desktop-capa1.svg" },
      { label: "Licencia de funcionamiento + ITSE — Administrativo.", icon: "/assets/figma/desktop-capa2.svg" },
      { label: "Régimen MYPE Tributario (RMT), RG o RER — Tributario.", icon: "/assets/figma/desktop-capa3.svg" },
      { label: "Kit contractual básico — Civil y Contratos.", icon: "/assets/figma/desktop-group2068.svg" },
      { label: "Preguntar por otros servicios — Todas las áreas.", icon: "/assets/figma/desktop-capa4.svg" },
    ],
  },
  operating: {
    tab: "Operando",
    title: "Tu empresa ya está en marcha",
    intro: "¿Tu empresa ya opera y quieres ordenar contratos, planillas o cumplimiento? Te ayudamos a identificar qué resolver primero.",
    description: "Construye tu empresa día a día sin sobresaltos. Te acompañamos para que tu operación esté ordenada y protegida.",
    image: "/assets/photos/desktop-cs-foto62.webp",
    services: [
      { label: "Contratos de trabajo, RIT y REMYPE — Laboral.", icon: "/assets/figma/desktop-group2068.svg" },
      { label: "Tercerización e intermediación laboral — Laboral.", icon: "/assets/figma/desktop-capa1.svg" },
      { label: "Cumplimiento de datos personales — Protección de Datos.", icon: "/assets/figma/desktop-capa2.svg" },
      { label: "Defensa ante SUNAFIL, SUNAT o municipio — Administrativo.", icon: "/assets/figma/desktop-capa3.svg" },
      { label: "Representación en protección al consumidor — Administrativo.", icon: "/assets/figma/desktop-vector1.svg" },
      { label: "Preguntar por otros servicios — Todas las áreas.", icon: "/assets/figma/desktop-capa4.svg" },
    ],
  },
  growing: {
    tab: "Creciendo",
    title: "Estás escalando o sumando socios",
    intro: "¿Estás por sumar un socio, abrir una nueva línea o reorganizar tu empresa? Conversemos sobre la mejor forma de estructurarlo.",
    description: "Que crezca tu empresa, no tus problemas. Te acompañamos en las decisiones estructurales que marcan la siguiente etapa.",
    image: "/assets/photos/desktop-cs-foto64.webp",
    services: [
      { label: "Convenios de accionistas (pactos de socios) — Corporativo y Societario.", icon: "/assets/figma/desktop-vector1.svg" },
      { label: "Aumento y reducción de capital — Corporativo y Societario.", icon: "/assets/figma/desktop-capa1.svg" },
      { label: "Licencias y contratos de distribución — Civil y Contratos.", icon: "/assets/figma/desktop-capa2.svg" },
      { label: "Licencia y cesión de derechos marcarios — Propiedad Intelectual.", icon: "/assets/figma/desktop-group2068.svg" },
      { label: "Reorganizaciones societarias — Corporativo y Societario.", icon: "/assets/figma/desktop-capa3.svg" },
      { label: "Preguntar por otros servicios — Todas las áreas.", icon: "/assets/figma/desktop-capa4.svg" },
    ],
  },
};

export function Services() {
  const [active, setActive] = useState<Stage>("starting");
  const stage = stages[active];

  return (
    <section className="services section section--dark" id="servicios">
      <div className="services__pattern" aria-hidden="true">
        <img src="/assets/figma/desktop-group14.svg" alt="" />
      </div>
      <div className="container services__content">
        <span className="eyebrow eyebrow--light">Servicios</span>
        <h2>Cobertura legal completa para <em>tu empresa</em></h2>

        <div className="services__intro">
          <div>
            <p className="services__kicker">Mi empresa está...</p>
            <div className="service-tabs" role="tablist" aria-label="Etapa de la empresa">
              {(Object.keys(stages) as Stage[]).map((key) => (
                <button
                  key={key}
                  type="button"
                  role="tab"
                  aria-selected={active === key}
                  className={active === key ? "is-active" : ""}
                  onClick={() => setActive(key)}
                >
                  {stages[key].tab}<span aria-hidden="true">+</span>
                </button>
              ))}
            </div>
          </div>
          <div className="services__lead">
            <h3>{stage.title}</h3>
            <p>{stage.intro}</p>
          </div>
        </div>

        <div className="services__visual">
          <div className="services__photo">
            <Image src={stage.image} alt="Personas trabajando en su empresa" fill sizes="(max-width: 760px) 100vw, 50vw" />
          </div>
          <div className="services__summary">
            <p>{stage.description}</p>
            <a className="button button--light" href="#contacto">Conversemos por WhatsApp</a>
          </div>
        </div>

        <div className="service-grid">
          {stage.services.map((service) => (
            <article className="service-card" key={service.label}>
              <img src={service.icon} alt="" width="29" height="25" />
              <p>{service.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
