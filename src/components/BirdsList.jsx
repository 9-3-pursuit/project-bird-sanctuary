import birdData from "../data/birds";

import BirdCard from "./BirdCard";

function BirdsList({ setCartItems }) {
  return (
    <div className="cards">
      {birdData.map((data) => {
        return (
          <BirdCard data={data} key={data.id} setCartItems={setCartItems} />
        );
      })}
    </div>
  );
}
export default BirdsList;