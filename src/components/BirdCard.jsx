function BirdCard({ data, setCartItems }) {
  const addToCart = () => {
    setCartItems((prev) => [...prev, data]);
  };

  return (
    <div className="card">
      <h4>{data.name}</h4>
      <p>Price: {data.amount}</p>
      <img src={data.img} alt="" />
      <button onClick={addToCart}>Adopt</button>
    </div>
  );
}
export default BirdCard;
