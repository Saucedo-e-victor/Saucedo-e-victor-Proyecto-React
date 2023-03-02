
import './navbar.css';
import CardWidget from '../CardWidget';

function NavBar() {
    return(
        <div className="navbar">
            <img className="logo" src='./src/components/NavBar/deposito.png' alt="logo"/>
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