import "./App.css";
import Card from "./Card";

const monferno = {
  nome: "Monferno",
  imagemUrl:
    "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/391.png",
    Nº: "Nº 0391",
    descricao: "Fogo",
};

const jolteon = {
  nome: "Jolteon",
  imagemUrl:
    "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/135.png",
    Nº: "Nº 0135",
    descricao: "Eletrico",
};

const blastoise = {
  nome: "Blastoise",
  imagemUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png",
    Nº: "Nº 0009",
    descricao: "Água",
};

const gengar = {
  nome: "Gengar",
  imagemUrl:
    "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/094.png",
    Nº: "Nº 0094",
    descricao: "Fantasma",
};

const deoxys = {
  nome: "Deoxys",
  imagemUrl:
    "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/386.png",
    Nº: "Nº 0386",
    descricao: "Psíquico",
};

const lucario = {
  nome: "Lucario",
  imagemUrl:
    "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/448.png",
    Nº: "Nº 0448",
    descricao: "Lutador",
};

const buizel = {
  nome: "Buizel",
  imagemUrl:
    "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/418.png",
    Nº: "Nº 0418",
    descricao: "Água",
};

const scizor = {
  nome: "Scizor",
  imagemUrl:
    "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/212.png",
    Nº: "Nº 0212",
    descricao: "Aço",
};

const itens = [monferno, jolteon, blastoise, gengar, deoxys, lucario, buizel, scizor];

function App() {
  return (
    <>
      <h1>My Pokédex</h1>
      <div className="cards">
        {itens.map(function (item, index) {
          return <Card item={item} key={`card_${index}`} />;
        })}
      </div>
    </>
  );
}

export default App;
