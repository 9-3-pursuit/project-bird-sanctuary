import BirdInfo from "./BirdInfo";
import birdData from "./data/birds";
function App() {
  const birdCollection = birdData.map((bird) => {
    return <BirdInfo {...bird} key={bird.id} />;
  });
  console.log(birdCollection);
  return (
    <>
      <section className="birds">{birdCollection}</section>
    </>
  );
}

export default App;
