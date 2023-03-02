
import './navbar.css';
import CardWidget from '../CardWidget';
import logo from '../../assets/img/logo.png';

function NavBar() {
    return(
        <div className="navbar">
            <img className="logo" src={logo} alt="logo"/>
            <ul>
                <li>
                    <button className='button'>Maquinaria liviana</button>
                </li>
                <li>
                    <button className='button'>Maquinaria Medias</button>
                </li>
                <li>
                    <button className='button'>Maquinaria Pesadas</button>
                </li>
                <li>
                    <button className='button'>Maquinaria Varias</button>
                </li>
            </ul>
            <CardWidget/>
        </div>
    )

}

export default NavBar;