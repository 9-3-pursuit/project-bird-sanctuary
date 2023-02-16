import BirdCard from "./BirdCard";
import birdData from "../../data/birds";

export default function BirdSection() {
  return (
    <div className="bird-section">
      {birdData.map((bird) => (
        <BirdCard key={bird.id} bird={bird} />
      ))}
    </div>
  );
}
