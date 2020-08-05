import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/LogoEtequiano.png';
import Button from '../Button';
import './Menu.css';

/*Criando component para o menu da aplicação, que irá aparecer no topo de cada página*/
function Menu(){

    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="Logo da Etequianoflix"/>
            </Link>
            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo Vídeo
            </Button>
        </nav>
    );
}
export default Menu;