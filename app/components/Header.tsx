"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const links = [
  ["Nosotros", "#nosotros"],
  ["Valores", "#valores"],
  ["Servicios", "#servicios"],
  ["Cómo trabajamos", "#como-trabajamos"],
  ["Noticias", "#noticias"],
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="site-header">
      <a className="site-header__logo" href="#inicio" aria-label="Ir al inicio">
        <Logo />
      </a>

      <nav className="desktop-nav" aria-label="Navegación principal">
        {links.map(([label, href]) => (
          <a key={href} href={href}>{label}</a>
        ))}
      </nav>

      <a className="header-contact" href="#contacto">Contáctanos</a>

      <button
        className="menu-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
      </button>

      <div id="mobile-navigation" className={`mobile-menu ${open ? "is-open" : ""}`}>
        <div className="mobile-menu__top">
          <Logo />
          <button type="button" aria-label="Cerrar menú" onClick={() => setOpen(false)}>×</button>
        </div>
        <nav aria-label="Navegación móvil">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a className="button button--light" href="#contacto" onClick={() => setOpen(false)}>Contáctanos</a>
        </nav>
      </div>
    </header>
  );
}
