import { useEffect, useRef, useState } from "react";

import {
  FaArrowRight,
  FaBriefcase,
  FaCode,
  FaDiscord,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMoon,
  FaSun,
  FaVolumeHigh,
  FaVolumeXmark,
} from "react-icons/fa6";

import { FaCss3Alt, FaJava } from "react-icons/fa";

import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiTailwindcss,
  SiPhp,
  SiLaravel,
  SiPython,
  SiDjango,
  SiMysql,
  SiGit,
  SiDocker,
  SiNextdotjs,
  SiPandas,
  SiStreamlit,
  SiNodedotjs,
  SiFigma,
} from "react-icons/si";

import { HiOutlineCpuChip, HiOutlineSparkles } from "react-icons/hi2";

import Timeline from "./Timeline";
import "./App.css";

const tecnologias = [
  {
    nombre: "React",
    categoria: "Interfaces web",
    Icono: SiReact,
    color: "#61DAFB",
  },
  {
    nombre: "JavaScript",
    categoria: "Lenguaje de programación",
    Icono: SiJavascript,
    color: "#F7DF1E",
  },
  {
    nombre: "TypeScript",
    categoria: "JavaScript tipado",
    Icono: SiTypescript,
    color: "#3178C6",
  },
  {
    nombre: "HTML5",
    categoria: "Estructura web",
    Icono: SiHtml5,
    color: "#E34F26",
  },
  {
    nombre: "CSS3",
    categoria: "Estilos y diseño",
    Icono: FaCss3Alt,
    color: "#1572B6",
  },
  {
    nombre: "Tailwind CSS",
    categoria: "Diseño de interfaces",
    Icono: SiTailwindcss,
    color: "#06B6D4",
  },
  {
    nombre: "Next.js",
    categoria: "Framework de React",
    Icono: SiNextdotjs,
    color: "currentColor",
  },
  {
    nombre: "PHP",
    categoria: "Lenguaje de servidor",
    Icono: SiPhp,
    color: "#777BB4",
  },
  {
    nombre: "Laravel",
    categoria: "Framework PHP",
    Icono: SiLaravel,
    color: "#FF2D20",
  },
  {
    nombre: "Python",
    categoria: "Programación · IA",
    Icono: SiPython,
    color: "#3776AB",
  },
  {
    nombre: "Django",
    categoria: "Framework Python",
    Icono: SiDjango,
    color: "#44B78B",
  },
  {
    nombre: "Node.js",
    categoria: "Entorno de ejecución JavaScript",
    Icono: SiNodedotjs,
    color: "#68A063",
  },
  {
    nombre: "Java",
    categoria: "Lenguaje de programación",
    Icono: FaJava,
    color: "#ED8B00",
  },
  {
    nombre: "MySQL",
    categoria: "Base de datos relacional",
    Icono: SiMysql,
    color: "#4479A1",
  },
  {
    nombre: "Git",
    categoria: "Control de versiones",
    Icono: SiGit,
    color: "#F05032",
  },
  {
    nombre: "GitHub",
    categoria: "Repositorios y colaboración",
    Icono: FaGithub,
    color: "#FFFFFF",
  },
  {
    nombre: "Docker",
    categoria: "Contenedores",
    Icono: SiDocker,
    color: "#2496ED",
  },
  {
    nombre: "Pandas",
    categoria: "Análisis de datos",
    Icono: SiPandas,
    color: "#9B8AFB",
  },
  {
    nombre: "Streamlit",
    categoria: "Visualización de datos",
    Icono: SiStreamlit,
    color: "#FF4B4B",
  },
  {
    nombre: "Figma",
    categoria: "Diseño de interfaces UI/UX",
    Icono: SiFigma,
    color: "#A259FF",
  },
];

const gruposTecnologias = [
  {
    titulo: "Frontend",
    numero: "01",
    descripcion: "Interfaces, diseño y experiencias web",
    nombres: [
      "React",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Next.js",
    ],
  },
  {
    titulo: "Backend",
    numero: "02",
    descripcion: "Lógica de negocio, servidores y aplicaciones",
    nombres: ["PHP", "Laravel", "Python", "Django", "Node.js", "Java"],
  },

  {
    titulo: "Bases de datos",
    numero: "03",
    descripcion: "Almacenamiento y gestión de información",
    nombres: ["MySQL"],
  },

  {
    titulo: "Herramientas ",
    numero: "04",
    descripcion: "Desarrollo, datos y visualización",
    nombres: [
      "Git",
      "GitHub",
      "Docker",
      "Pandas",
      "Streamlit",
      "Figma",
      "Lovable",
    ],
  },
];

const proyectos = [
  {
    numero: "01",
    nombre: "Clínica Ágape",
    subtitulo: "Sistema de gestión odontológica",
    descripcion:
      "Aplicación web para gestionar citas y usuarios, con espacios diferenciados para pacientes, odontólogos y administración.",
    tecnologias: ["React", "Laravel", "MySQL", "Sanctum"],
    Icono: FaBriefcase,
    clase: "proyecto-clinica",
  },
  {
    numero: "02",
    nombre: "Blockchain",
    subtitulo: "Desarrollo frontend · CGI España",
    descripcion:
      "Participación en un proyecto tecnológico con trabajo de frontend, maquetación e integración de documentación técnica.",
    tecnologias: ["HTML5", "CSS3", "JavaScript"],
    Icono: FaCode,
    clase: "proyecto-blockchain",
  },
  {
    numero: "03",
    nombre: "Lengua de Signos",
    subtitulo: "Tecnología y accesibilidad · CGI España",
    descripcion:
      "Colaboración en un proyecto de accesibilidad digital, integrando elementos visuales y trabajando en un equipo multidisciplinar.",
    tecnologias: ["JavaScript", "HTML5", "CSS3"],
    Icono: HiOutlineSparkles,
    clase: "proyecto-signos",
  },
  {
    numero: "04",
    nombre: "Predicción de costes médicos",
    subtitulo: "Análisis de datos y aprendizaje automático",
    descripcion:
      "Proyecto de análisis de datos para explorar variables, preparar conjuntos de datos y desarrollar modelos predictivos.",
    tecnologias: ["Python", "Pandas", "Machine Learning"],
    Icono: HiOutlineCpuChip,
    clase: "proyecto-ia",
  },
];

function App() {
  const [temaClaro, setTemaClaro] = useState(false);
  const [sonidoActivo, setSonidoActivo] = useState(false);
  const [menuAbierto, setMenuAbierto] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    document.documentElement.dataset.tema = temaClaro ? "claro" : "oscuro";
  }, [temaClaro]);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const alternarSonido = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (sonidoActivo) {
      audio.pause();
      setSonidoActivo(false);
      return;
    }

    try {
      audio.volume = 0.35;
      await audio.play();
      setSonidoActivo(true);
    } catch (error) {
      console.error("No se pudo reproducir el audio:", error);
      setSonidoActivo(false);
    }
  };

  const cerrarMenu = () => setMenuAbierto(false);

  return (
    <main className="portfolio" id="inicio">
      <audio
        ref={audioRef}
        src="/ambiente.mp3"
        loop
        preload="auto"
        onError={() =>
          console.error(
            "Comprueba que ambiente.mp3 esté dentro de la carpeta public.",
          )
        }
      />

      <div className="fondo-decorativo" aria-hidden="true">
        <div className="fondo-orbita orbita-uno" />
        <div className="fondo-orbita orbita-dos" />
        <div className="fondo-cuadricula" />
      </div>

      <header className="cabecera">
        <a className="marca" href="#inicio" onClick={cerrarMenu}>
          <span className="marca-simbolo">S.</span>
          <span className="marca-texto">STEPHANY MARTÍNEZ</span>
        </a>

        <nav
          className={`navegacion ${menuAbierto ? "navegacion-abierta" : ""}`}
          aria-label="Navegación principal"
        >
          <a href="#sobre-mi" onClick={cerrarMenu}>
            Sobre mí
          </a>
          <a href="#trayectoria" onClick={cerrarMenu}>
            Trayectoria
          </a>
          <a href="#tecnologias" onClick={cerrarMenu}>
            Tecnologías
          </a>
          <a href="#proyectos" onClick={cerrarMenu}>
            Proyectos
          </a>
          <a href="#contacto" onClick={cerrarMenu}>
            Contacto
          </a>
        </nav>

        <div className="controles-cabecera">
          <button
            className={`boton-icono boton-sonido ${
              sonidoActivo ? "sonido-activo" : ""
            }`}
            type="button"
            onClick={alternarSonido}
            aria-label={sonidoActivo ? "Silenciar sonido" : "Activar sonido"}
            aria-pressed={sonidoActivo}
            title={sonidoActivo ? "Silenciar sonido" : "Activar sonido"}
          >
            {sonidoActivo ? <FaVolumeHigh /> : <FaVolumeXmark />}
          </button>

          <button
            className="boton-icono"
            type="button"
            onClick={() => setTemaClaro((actual) => !actual)}
            aria-label={
              temaClaro ? "Activar tema oscuro" : "Activar tema claro"
            }
            title={temaClaro ? "Tema oscuro" : "Tema claro"}
          >
            {temaClaro ? <FaMoon /> : <FaSun />}
          </button>

          <button
            className="boton-menu"
            type="button"
            onClick={() => setMenuAbierto((actual) => !actual)}
            aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuAbierto}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <section className="hero seccion">
        <div className="hero-contenido">
          <div className="etiqueta-superior">
            <span className="indicador" />
            DESARROLLO WEB · TECNOLOGÍA · IA
          </div>

          <p className="hero-saludo">Construyendo soluciones digitales</p>

          <h1>
            Stephany
            <br />
            <span className="texto-destacado">Martínez</span>
          </h1>

          <h2 className="hero-titulo">
            Desarrolladora Web <span>Full Stack Junior</span>
          </h2>

          <p className="hero-descripcion">
            Transformo necesidades en soluciones digitales mediante código,
            pensamiento lógico y una visión centrada en las personas.
          </p>

          <div className="hero-acciones">
            <a className="boton-principal" href="#proyectos">
              Explorar proyectos <FaArrowRight />
            </a>
            <a className="boton-secundario" href="#contacto">
              Hablemos
            </a>
          </div>

          <div className="hero-datos">
            <div>
              <span className="dato-numero">01</span>
              <span className="dato-texto">Frontend</span>
            </div>
            <div>
              <span className="dato-numero">02</span>
              <span className="dato-texto">Backend</span>
            </div>
            <div>
              <span className="dato-numero">03</span>
              <span className="dato-texto">Inteligencia artificial</span>
            </div>
          </div>

          <div className="hero-sociales">
            <a
              href="https://github.com/martinez444"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/stephanymartinez444/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://discord.com/app"
              target="_blank"
              rel="noreferrer"
              aria-label="Discord: "
              title="Discord: "
            >
              <FaDiscord />
            </a>

            <span className="discord-usuario"></span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="orbita-foto orbita-foto-uno" />
          <div className="orbita-foto orbita-foto-dos" />

          <div className="visual-marco">
            <div className="visual-cabecera">
              <span>PORTFOLIO </span>
              <span className="visual-punto">● DISPONIBLE</span>
            </div>

            <div className="visual-foto">
              <img
                src="/mi-foto.jpg"
                alt="Retrato de Stephany Martínez"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />

              <div className="foto-respaldo">
                <span>S.</span>
                <small>FULL STACK DEVELOPER</small>
              </div>
            </div>

            <div className="visual-pie">
              <div>
                <span className="visual-label">ESPECIALIDAD</span>
                <strong>Programadora Web</strong>
              </div>
              <span className="visual-coordenadas"></span>
            </div>
          </div>

          {/* Tarjeta flotante: Full Stack */}
          <div className="flotante flotante-codigo">
            <FaCode />
            <span>Full Stack</span>
            <small>Frontend + Backend</small>
          </div>

          {/* Tarjeta flotante: Inteligencia Artificial */}
          <div className="flotante flotante-ia">
            <HiOutlineCpuChip />
            <span>Inteligencia Artificial</span>
            <small>IA · Machine Learning</small>
          </div>

          {/* Tarjeta flotante: Ciberseguridad */}
          <div className="flotante flotante-ciberseguridad">
            <HiOutlineSparkles />
            <span>Ciberseguridad</span>
            <small>Seguridad informática</small>
          </div>
        </div>
      </section>

      <section className="seccion sobre-mi" id="sobre-mi">
        <div className="encabezado-seccion">
          <span className="numero-seccion">01 / SOBRE MÍ</span>
          <h2>
            Tecnología con <span className="texto-destacado">propósito.</span>
          </h2>
        </div>

        <div className="sobre-mi-grid">
          <div className="sobre-mi-texto">
            <p className="texto-intro">
              Desarrollo aplicaciones web pensando tanto en cómo funcionan como
              en las personas que las utilizan.
            </p>

            <p>
              He finalizado el Ciclo Formativo de Grado Superior en Desarrollo
              de Aplicaciones Web y he participado en proyectos de desarrollo
              durante mis prácticas en CGI España.
            </p>

            <p>
              Trabajo con tecnologías frontend y backend, bases de datos y
              herramientas para el análisis de datos. También continúo ampliando
              mis conocimientos en inteligencia artificial y aprendizaje
              automático.
            </p>

            <p>
              Mi experiencia en atención al cliente y coordinación de equipos me
              ha ayudado a desarrollar la comunicación, la responsabilidad y la
              capacidad de comprender las necesidades de cada proyecto.
            </p>
          </div>

          <div className="principios-grid">
            <article className="principio-card">
              <span className="principio-numero">01</span>
              <FaCode className="principio-icono" />
              <h3>Código</h3>
              <p>Desarrollo estructurado, mantenible y funcional.</p>
            </article>

            <article className="principio-card">
              <span className="principio-numero">02</span>
              <HiOutlineCpuChip className="principio-icono" />
              <h3>Solución</h3>
              <p>Herramientas adaptadas a necesidades reales.</p>
            </article>

            <article className="principio-card">
              <span className="principio-numero">03</span>
              <HiOutlineSparkles className="principio-icono" />
              <h3>Aprendizaje</h3>
              <p>Curiosidad técnica y mejora continua.</p>
            </article>

            <article className="principio-card">
              <span className="principio-numero">04</span>
              <FaBriefcase className="principio-icono" />
              <h3>Personas</h3>
              <p>Colaboración, comunicación y orientación al usuario.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="seccion trayectoria" id="trayectoria">
        <div className="encabezado-seccion">
          <span className="numero-seccion">02 / TRAYECTORIA</span>
          <h2>
            Un camino de <span className="texto-destacado">evolución.</span>
          </h2>
          <p className="subtitulo-seccion">
            Formación, experiencia y proyectos que han contribuido a mi
            desarrollo profesional.
          </p>
        </div>

        <div className="timeline-contenedor">
          <Timeline />
        </div>
      </section>

      <section className="seccion tecnologias" id="tecnologias">
        <div className="encabezado-seccion">
          <span className="numero-seccion">03 / STACK TECNOLÓGICO</span>
          <h2>
            Herramientas para <span className="texto-destacado">crear.</span>
          </h2>
          <p className="subtitulo-seccion">
            Tecnologías con las que he trabajado en proyectos formativos y
            prácticos.
          </p>
        </div>

        <div className="tecnologias-resumen">
          <article className="resumen-stack">
            <span className="resumen-icono">
              <FaCode />
            </span>
            <div>
              <h3>Full Stack</h3>
              <p>Frontend + Backend</p>
            </div>
          </article>

          <article className="resumen-stack">
            <span className="resumen-icono">
              <HiOutlineCpuChip />
            </span>
            <div>
              <h3>Inteligencia Artificial</h3>
              <p>IA · Machine Learning</p>
            </div>
          </article>

          <article className="resumen-stack">
            <span className="resumen-icono">
              <HiOutlineSparkles />
            </span>
            <div>
              <h3>Ciberseguridad</h3>
              <p>Seguridad informática</p>
            </div>
          </article>
        </div>

        <div className="tecnologias-categorias">
          {gruposTecnologias.map((grupo) => (
            <section
              className="grupo-tecnologias"
              key={grupo.titulo}
              aria-label={grupo.titulo}
            >
              <div className="grupo-tecnologias-titulo">
                <div className="grupo-titulo-texto">
                  <span className="grupo-numero">{grupo.numero}</span>

                  <div>
                    <h3>{grupo.titulo}</h3>
                    <p>{grupo.descripcion}</p>
                  </div>
                </div>

                <span className="grupo-contador">
                  {String(grupo.nombres.length).padStart(2, "0")}
                </span>
              </div>

              <div className="tecnologias-grid">
                {tecnologias
                  .filter((tecnologia) =>
                    grupo.nombres.includes(tecnologia.nombre),
                  )
                  .map(({ nombre, categoria, Icono, color }) => (
                    <article className="tecnologia-card" key={nombre}>
                      <div
                        className="tecnologia-icono"
                        style={{ "--icono-color": color }}
                      >
                        <Icono aria-hidden="true" />
                      </div>

                      <div className="tecnologia-info">
                        <h4>{nombre}</h4>
                        <p>{categoria}</p>
                      </div>

                      <span className="tecnologia-punto" />
                    </article>
                  ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="seccion proyectos" id="proyectos">
        <div className="encabezado-seccion">
          <span className="numero-seccion">04 / PROYECTOS</span>
          <h2>
            Del concepto al <span className="texto-destacado">resultado.</span>
          </h2>
          <p className="subtitulo-seccion">
            Una selección de proyectos que refleja mi experiencia práctica y mi
            aprendizaje tecnológico.
          </p>
        </div>

        <div className="proyectos-grid">
          {proyectos.map((proyecto) => {
            const IconoProyecto = proyecto.Icono;

            return (
              <article
                className={`proyecto-card ${proyecto.clase}`}
                key={proyecto.numero}
              >
                <div className="proyecto-cabecera">
                  <span className="proyecto-numero">{proyecto.numero}</span>
                  <IconoProyecto className="proyecto-icono" />
                </div>

                <div className="proyecto-contenido">
                  <span className="proyecto-subtitulo">
                    {proyecto.subtitulo}
                  </span>
                  <h3>{proyecto.nombre}</h3>
                  <p>{proyecto.descripcion}</p>
                </div>

                <div className="proyecto-tecnologias">
                  {proyecto.tecnologias.map((tecnologia) => (
                    <span key={tecnologia}>{tecnologia}</span>
                  ))}
                </div>

                <span className="proyecto-enlace proyecto-enlace-texto">
                  Proyecto práctico <FaArrowRight />
                </span>
              </article>
            );
          })}
        </div>
      </section>

      <section className="seccion contacto" id="contacto">
        <div className="contacto-panel">
          <span className="numero-seccion">05 / CONTACTO</span>

          <div className="contacto-contenido">
            <div>
              <h2>
                ¿Creamos algo <span className="texto-destacado">juntos?</span>
              </h2>
              <p>
                Estoy interesada en oportunidades relacionadas con desarrollo
                web, programación y tecnología. Me motiva colaborar en equipos
                donde pueda aportar, aprender y seguir creciendo.
              </p>
            </div>

            <a
              className="boton-principal"
              href="https://www.linkedin.com/in/stephanymartinez444/"
              target="_blank"
              rel="noreferrer"
            >
              <FaEnvelope /> Contactar <FaArrowRight />
            </a>
          </div>

          <div className="contacto-redes">
            <a
              href="https://www.linkedin.com/in/stephanymartinez444/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/martinez444"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>
            <a
              href="https://discord.com/app"
              target="_blank"
              rel="noreferrer"
              title="Discord: anadearmas7535"
            >
              <FaDiscord />
              <span>Discord</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="pie-pagina">
        <a className="marca marca-pie" href="#inicio">
          <span className="marca-simbolo">S.</span>
          <span className="marca-texto">STEPHANY MARTÍNEZ</span>
        </a>

        <p>Desarrollo web · Tecnología · Aprendizaje continuo</p>

        <a href="#inicio" className="volver-arriba">
          Volver arriba ↑
        </a>
      </footer>
    </main>
  );
}

export default App;
