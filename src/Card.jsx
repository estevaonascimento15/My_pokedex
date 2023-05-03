import "./Card.css";

function Card(props) {
  const item = props.item;

  return (
    <div className="card">
      <h2>{item.nome}</h2>
      <img width="200" src={item.imagemUrl} />
      <h3>{item.Nº}</h3>
      <p>{item.descricao}</p>
    </div>
  );
}

export default Card;
