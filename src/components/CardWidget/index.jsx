import './Cardwidger.css';
import carretilla from '../../assets/img/carretilla.png'


function CarWiget() {
    return(
        <div>
            <img className="carretilla" src={carretilla} alt="carro de compra"/>
        <strong>4</strong>
        </div>
        
    )
    
}

export default CarWiget;