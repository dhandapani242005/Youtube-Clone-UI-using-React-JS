import Cards from "./Cards";
import cardData from "./Data/Cards_data";
import Navbar from "./Navbar";
  export default function App() {

  return (
    <>
    <div className = "Nav_bar">
      <Navbar />
    </div>
      <div className="card-container">
        {cardData.map((card, index) => (
          <Cards
            key={index}
            image={card.image}
            title={card.title}
            subtitle={card.subtitle}
          />
        ))}
      </div>
      
    </>
  );
}
