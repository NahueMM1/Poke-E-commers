import ItemCount from "../itemCount/intemCount";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  return (
    <article className="cardItem">
      <header className="header">
        <h2 className="itemHeader">{name}</h2>
      </header>
      <picture>
        <img src={img} alt={name} className="itemImg" />
      </picture>
      <section>
        <p className="infoCat">Categoria: {category}</p>
        <p className="infoDesc">Descripcion: {description}</p>
        <p className="info">Valor: ${price}</p>
      </section>
      <footer className="contentComponent">
        <ItemCount
          initial={1}
          stock={stock}
          onAdd={(quantity) => console.log("Cantidad agregada", quantity)}
        />
      </footer>
    </article>
  );
};

export default ItemDetail;
