import Image from "next/image";
import { Header } from "./components/Header";
import { HeroCarousel } from "./components/HeroCarousel";
import { Logo } from "./components/Logo";
import { Services } from "./components/Services";

const values = [
  {
    title: "Claridad",
    text: "Hablamos en lenguaje simple. Sin tecnicismos, para que el cliente entienda y decida con confianza.",
    icon: "/assets/figma/desktop-ypo-thf.svg",
  },
  {
    title: "Compromiso",
    text: "Nos involucramos con el éxito de cada cliente. Su crecimiento es también el nuestro.",
    icon: "/assets/figma/desktop-group29.svg",
  },
  {
    title: "Accesibilidad",
    text: "Hacemos el servicio legal alcanzable para quien está creciendo — en trato, en precio y en claridad.",
    icon: "/assets/figma/desktop-group2056.svg",
  },
];

const beliefs = [
  {
    title: "Creemos en el esfuerzo que hay detrás de cada negocio.",
    text: "En las horas, las decisiones, la inversión y el sacrificio. No es fácil convertir lo frágil en robusto, pero hacemos lo posible para que todos los detalles estén previstos.",
    image: "/assets/photos/desktop-cs-foto54.webp",
  },
  {
    title: "Creemos en la planificación y la estrategia porque marcan un destino.",
    text: "Para hacer empresa, el camino casi nunca es recto pero debe ser derecho. Los obstáculos y barreras se hacen visibles cuando el análisis los anticipa.",
    image: "/assets/photos/desktop-cs-foto55.webp",
  },
  {
    title: "Creemos que prevenir da tranquilidad para avanzar.",
    text: "Por eso, nos comprometemos a darte acompañamiento legal desde el inicio para que tu foco esté en hacer que tu empresa nunca se detenga.",
    image: "/assets/photos/desktop-cs-foto56.webp",
  },
];

const process = [
  { title: "Diagnóstico", text: "Reunión o formulario inicial.", image: "/assets/photos/desktop-cs-foto61.webp" },
  { title: "Propuesta", text: "Alcance, entregables, plazo y honorario cerrado, por escrito.", image: "/assets/photos/desktop-cs-foto62.webp" },
  { title: "Ejecución", text: "Avances comunicados por hitos.", image: "/assets/photos/desktop-cs-foto63.webp" },
  { title: "Seguimiento", text: "Seguimos disponibles después de la entrega.", image: "/assets/photos/desktop-cs-foto64.webp" },
];

const articles = [
  { category: "Laboral", image: "/assets/photos/desktop-cs-foto56.webp" },
  { category: "MYPES", image: "/assets/photos/desktop-cs-foto59.webp" },
  { category: "Corporativo", image: "/assets/photos/desktop-cs-foto54.webp" },
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="inicio">
        <HeroCarousel />
        <img className="hero__overlay" src="/assets/figma/desktop-vector.svg" alt="" />
        <Header />
        <div className="container hero__content">
          <h1>Asesoría legal para empresas<br />que <em>no se detienen</em></h1>
          <p>Acompañamos a emprendedores y empresas en crecimiento con un enfoque preventivo, estratégico y orientado a resultados — desde el inicio y en cada etapa.</p>
          <a className="button button--primary" href="#contacto">Agenda consulta</a>
        </div>
      </section>

      <section className="about section" id="nosotros">
        <div className="container">
          <div className="section-heading section-heading--center">
            <span className="eyebrow">Nosotros</span>
            <h2>Un equipo completo con <em>alcance completo</em></h2>
          </div>
          <div className="about__grid">
            <div className="about__image image-frame">
              <Image src="/assets/photos/desktop-cs-foto52.webp" alt="Equipo profesional trabajando en conjunto" fill sizes="(max-width: 760px) 100vw, 50vw" />
            </div>
            <article className="purpose-card">
              <div className="purpose-card__pattern" aria-hidden="true">
                <img src="/assets/figma/desktop-group5.svg" alt="" />
                <img src="/assets/figma/desktop-group6.svg" alt="" />
              </div>
              <span className="eyebrow">Propósito</span>
              <p>Comprometerse con el esfuerzo detrás de cada negocio para que nunca se detenga.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="values section" id="valores">
        <img className="values__shape values__shape--a" src="/assets/figma/desktop-group27.svg" alt="" />
        <img className="values__shape values__shape--b" src="/assets/figma/desktop-group28.svg" alt="" />
        <div className="container values__content">
          <div className="section-heading section-heading--center">
            <span className="eyebrow">Valores de marca</span>
            <h2>Escuchamos, pensamos de forma independiente, <em>asesoramos y actuamos</em></h2>
          </div>
          <div className="values__grid">
            {values.map((value) => (
              <article className="value-card" key={value.title}>
                <img src={value.icon} alt="" width="39" height="39" />
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="beliefs section" id="manifiesto">
        <div className="container">
          <div className="section-heading section-heading--center">
            <span className="eyebrow">Manifiesto</span>
            <h2>Lo que <em>creemos</em></h2>
          </div>
          <div className="beliefs__grid">
            {beliefs.map((belief, index) => (
              <article className={`belief-card belief-card--${index + 1}`} key={belief.title}>
                <div className="belief-card__copy">
                  <h3>{belief.title}</h3>
                  <p>{belief.text}</p>
                </div>
                <div className="belief-card__image">
                  <Image src={belief.image} alt="Emprendedores construyendo y haciendo crecer sus negocios" fill sizes="(max-width: 760px) 100vw, 40vw" />
                </div>
              </article>
            ))}
          </div>
          <blockquote>— Carnero Schabauer Abogados & Asociados, Lima, Perú</blockquote>
        </div>
      </section>

      <Services />

      <section className="process-section section" id="como-trabajamos">
        <div className="container">
          <div className="process-section__heading">
            <div>
              <span className="eyebrow">Cómo trabajamos</span>
              <h2>Prevención antes<br />que <em>reacción</em></h2>
            </div>
            <a className="button button--outline" href="#contacto">Agenda una consulta</a>
          </div>
          <div className="process-grid">
            {process.map((item, index) => (
              <article className="process-card" key={item.title}>
                <div className="process-card__image">
                  <Image src={item.image} alt="" fill sizes="(max-width: 760px) 82vw, 22vw" />
                </div>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="news section section--dark" id="noticias">
        <div className="container">
          <span className="eyebrow eyebrow--light">Noticias</span>
          <h2>Nuestros últimos artículos y<br /><em>noticias de interés</em></h2>
          <div className="news-grid">
            {articles.map((article) => (
              <article className="article-card" key={article.category}>
                <div className="article-card__image">
                  <Image src={article.image} alt="" fill sizes="(max-width: 760px) 82vw, 30vw" />
                </div>
                <div className="article-card__body">
                  <span>{article.category}</span>
                  <h3>Título de la noticia...</h3>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.</p>
                  <a href="#contacto">Leer más <span aria-hidden="true">→</span></a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact section" id="contacto">
        <div className="container contact__grid">
          <div className="contact__intro">
            <Logo tone="brand" />
            <span className="eyebrow">Contáctanos</span>
            <h2>¿Listo para coordinar una <em>primera reunión?</em></h2>
            <p>Cuéntanos en qué etapa está tu empresa y qué necesitas resolver. Evaluamos tu situación y te proponemos una solución concreta.</p>
            <div className="contact__actions">
              <a className="button button--primary" href="#contacto">Escríbenos por WhatsApp</a>
              <a className="button button--outline" href="mailto:correo@carneroschabauer.pe">Envíanos un correo</a>
            </div>
          </div>
          <address className="contact__details">
            <div><span>01</span><p>Nuestro número<strong>[Número de contacto]</strong></p></div>
            <div><span>02</span><p>Nuestro email<strong>correo@carneroschabauer.pe</strong></p></div>
            <div><span>03</span><p>Nuestra dirección<strong>Lima, Perú</strong></p></div>
          </address>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer__nav">
          <Logo tone="brand" />
          <nav aria-label="Navegación del pie">
            <a href="#nosotros">Nosotros</a>
            <a href="#valores">Valores</a>
            <a href="#servicios">Servicios</a>
            <a href="#como-trabajamos">Cómo trabajamos</a>
            <a href="#noticias">Noticias</a>
          </nav>
        </div>
        <div className="container footer__bottom">
          <p>© 2026 Carnero Schabauer Abogados & Asociados. Todos los derechos reservados</p>
          <div className="social-links" aria-label="Redes sociales">
            <a href="#contacto" aria-label="LinkedIn"><img src="/assets/figma/desktop-rah-oq4.svg" alt="" /></a>
            <a href="#contacto" aria-label="Instagram"><img src="/assets/figma/desktop-eg-t7-xy.svg" alt="" /></a>
            <a href="#contacto" aria-label="Facebook"><img src="/assets/figma/desktop-group31.svg" alt="" /></a>
          </div>
        </div>
      </footer>
    </main>
  );
}
