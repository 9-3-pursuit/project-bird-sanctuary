import "../styles/BirdCard.css";

const BirdCard = ({ bird, handleAdoptClick }) => {
  return (
    <div className="card birdCard">
      <strong>{bird.name}</strong>
      <p>Price: ${bird.amount}</p>
      <img src={bird.img} alt={bird.name} />
      <br />
      <button onClick={() => handleAdoptClick(bird.id)}>Adopt</button>
    </div>
  );
};

export default BirdCard;
