import Logo from './_components/Logo.jsx';
import Description from "./_components/Description.jsx";
import OpenLink from '../components/OpenLink.jsx';
import Contador from './_components/Contador.jsx';

const Default = () => {
    return (
        <>
            <header className="App-header">
                <Contador />
                <Logo />
                <Description />
                <OpenLink
                    title="Learn React"
                    url="https://react.dev/"
                />
                <OpenLink
                    title="Mi proyecto react (Github)"
                    url="https://github.com/eperezr/desarrollo-frontend-react"
                />
            </header>
        </>
    );
};

export default Default;