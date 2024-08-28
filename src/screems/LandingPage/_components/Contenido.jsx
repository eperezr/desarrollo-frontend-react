import Titulo from "./Titulo";

const Contenido = () => {
  return (
    <section className="contenido">
      <Titulo title="Temas Cubiertos" />
      <ul>
        <li>Componentes funcionales y de clase</li>
        <li>Use de <span>React hooks</span> como useState y useEffect</li>
        <li>Creación de <span>custom hooks</span> como useForm</li>
        <li>Gestión de variables de estado con <span>useState</span></li>
        <li>Gestión de estado global con <span>Redux</span></li>
        <li>Integración de <span>Redux</span> con <span>React</span></li>
        <li>Manejo de <span>Formularios</span> en <span>React</span></li>
        <li>Publicando nuestra <span>Página</span> con <span>GitHub Pages</span></li>
      </ul>
    </section>
  );
};

export default Contenido;