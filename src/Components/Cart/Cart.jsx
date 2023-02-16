import { useContext } from "react";
import { ModeContext } from "../../data/modeContext";
import { ListOfCartItems, ListOfBonuses } from "./Lists";
import "./Cart.css";

export default function Cart({ cart: { total, list } }) {
  const currentMode = useContext(ModeContext);

  const DISCOUNT = list.length >= 3 ? 0.1 : 0;

  return (
    <section className={`Cart section border-black ${currentMode}`}>
      <h3>Cart</h3>
      <h5>Discount: {DISCOUNT * 100}%</h5>
      <h4>Total: ${total - total * DISCOUNT} </h4>
      <ListOfCartItems list={list} />
      {total > 100 ? (
        <h6>Your donation has qualified you for the following bonuses:</h6>
      ) : (
        <h6>Make a donation to qualify for a bonus</h6>
      )}
      <ListOfBonuses total={total} />
    </section>
  );
}
