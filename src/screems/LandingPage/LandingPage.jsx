import Contenido from './_components/Contenido';
import Introduccion from './_components/Introduccion';
import NameTitulo from './_components/NameTitulo.jsx';
import Adicional from './_components/Adicional.jsx';
import piePagina from './_components/piePagina.jsx';

const LandingPage = () => {
    return(
        <div className="landing">
            <NameTitulo />
            <Introduccion />
            <Contenido />
            <Adicional />
            <piePagina />
        </div>
    );
};

export default LandingPage