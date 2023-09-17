import { Link } from "react-router-dom";

const InterLineContent = ({id, name, img, category, description, price, stock}) => {
    return (
      <article className="interLine">
        <section className="interLineHeader">
        <header>
          <span>ya disponible</span>
          <h2>PIREXYA: TODOS SERAN UNO</h2>
          <p>
            Cada sobre de juego contiene 12 cartas de Magic, 1 carta de arte y 1
            ficha/tarjeta publicitaria o carta de "La lista" (una lista de
            cartas especiales de la historia de Magic y versiones mecánicamente
            idénticas de las cartas impresas originalmente en Secret Lair x
            Street Fighter con Magic -arte temático—1 en 25% de los paquetes).
          </p>
          <footer className="itemFooter">
            <Link to={`/item/${id}`} className="Option">
              Mas Info
            </Link>
          </footer>
        </header>
        </section>
        <picture>
          <img className="boostPack"
            src="https://images.ctfassets.net/s5n2t79q9icq/amf08c0iMV7dGqzNSIsav/ec12dd08d0d656883d71345002660bd2/vnduslzdufgbwi_566x250.png?fm=webp"
            alt={name}
          />
        </picture>
      </article>
    );
  };

  export default InterLineContent