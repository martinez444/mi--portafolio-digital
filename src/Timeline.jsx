const trayectoria = [
  {
    id: "daw",
    numero: "01",
    fecha: "FORMACIÓN",
    periodo: "Ciclo Formativo de Grado Superior",
    titulo: "Desarrollo de Aplicaciones Web",
    lugar: "IES Virgen de la Paloma · Madrid",
    descripcion:
      "Formación en desarrollo frontend y backend, bases de datos, programación y construcción de aplicaciones web.",
    etiquetas: ["Desarrollo web", "Bases de datos", "Programación"],
  },
  {
    id: "cgi",
    numero: "02",
    fecha: "PRÁCTICAS ",
    periodo: "Prácticas profesionales",
    titulo: "CGI España",
    lugar: "Madrid · Equipo de Propiedad Intelectual",
    descripcion:
      "Participación en proyectos de blockchain y lengua de signos, colaborando en interfaces, programación, documentación técnica e integración visual con equipos multidisciplinares.",
    etiquetas: ["Blockchain", "Frontend", "JavaScript", "Trabajo en equipo"],
  },
  {
    id: "telecomunicaciones",
    numero: "03",
    fecha: "EXPERIENCIA PROFESIONAL",
    periodo: "Atención al cliente y supervisión",
    titulo: "Yoigo / Vodafone",
    lugar: "Atención comercial · Gestión de equipo",
    descripcion:
      "Experiencia en atención al cliente, comunicación de soluciones, gestión de necesidades y apoyo en la coordinación de un equipo.",
    etiquetas: ["Comunicación", "Responsabilidad", "Resolución de problemas"],
  },
  {
    id: "inteligencia-artificial",
    numero: "04",
    fecha: "ACTUALIDAD",
    periodo: "Aprendizaje y proyectos prácticos",
    titulo: "IA, Python y análisis de datos",
    lugar: "Formación continua",
    descripcion:
      "Ampliación de conocimientos en Python, Pandas, aprendizaje automático y visualización de datos, aplicándolos a ejercicios y proyectos prácticos.",
    etiquetas: ["Python", "Pandas", "Machine Learning", "Datos"],
  },
];

function Timeline() {
  return (
    <div className="timeline">
      {trayectoria.map((item, index) => (
        <article className="timeline-item" key={item.id}>
          <div className="timeline-eje">
            <span className="timeline-punto">{item.numero}</span>

            {index !== trayectoria.length - 1 && (
              <span className="timeline-conector" />
            )}
          </div>

          <div className="timeline-contenedor">
            <div className="timeline-cabecera">
              <span className="timeline-fecha">{item.fecha}</span>

              <span className="timeline-periodo">{item.periodo}</span>
            </div>

            <div className="timeline-contenido">
              <h3>{item.titulo}</h3>

              <p className="timeline-lugar">
                <span className="timeline-lugar-icono" aria-hidden="true">
                  ↗
                </span>
                {item.lugar}
              </p>

              <p className="timeline-descripcion">{item.descripcion}</p>
            </div>

            <div className="timeline-etiquetas">
              {item.etiquetas.map((etiqueta) => (
                <span key={etiqueta}>{etiqueta}</span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export default Timeline;
