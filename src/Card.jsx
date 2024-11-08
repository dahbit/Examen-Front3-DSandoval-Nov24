//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario
import './index.css';

function Card({ singer, song }) {
  return (
    <div className="Card">
      <p>Información ingresada:</p>
      <h2><strong>Tu cantante es:</strong> {singer}</h2>
      <h2><strong>Tu canción es:</strong> {song}</h2>
    </div>
  );
}

export default Card;



