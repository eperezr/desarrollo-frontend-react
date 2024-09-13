import Titulo from "./LandingPage/_components/Titulo";
import Welcome from "./LandingPage/_components/Welcome"
import Contenido from "./LandingPage/_components/Contenido";
import Recursos from "./LandingPage/_components/Recursos";

const LandingPage = () => {
    return (
        <div>
            <Titulo />
            <Welcome/>
            <Contenido/>
            <Recursos/>
        </div>
    )
}

export default LandingPage;