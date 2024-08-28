import Titulo from "./Titulo";

const Introduccion = () => {
  return (
    <section className="introduccion">
      <Titulo title="Introduccion" />
      <p>
        Este módulo se centra en el uso de <span>React</span>, incluyendo la creación de <span>componentes</span>, el manejo de <span>hooks</span> y el uso de <span>Redux</span>.
      </p>
    </section>
  );
};

export default Introduccion;