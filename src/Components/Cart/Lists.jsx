import { CartDispatchContext } from "../../data/modeContext";
import { useContext } from "react";
import CartItem from "./CartItem";
import bonusItems from "../../data/bonusItems";

function ListOfCartItems({ list }) {
  const dispatch = useContext(CartDispatchContext);

  function handleRemoveFromCart(e, amount) {
    const LIST_WITH_ITEMS_FILTERED = list.filter(
      ({ id }) => id !== e.target.parentNode.id
    );
    dispatch({
      type: "removed",
      listWithItemFiltered: LIST_WITH_ITEMS_FILTERED,
      amount: amount,
    });
  }

  return (
    <ol>
      {list.map((cartItemInfo) => {
        return <CartItem item={cartItemInfo} onClick={handleRemoveFromCart} />;
      })}
    </ol>
  );
}

function ListOfBonuses({ total }) {
  return (
    <ul>
      {total >= 100 && <li>{bonusItems[0]}</li>}
      {total >= 300 && <li>{bonusItems[1]}</li>}
      {total >= 500 && <li>{bonusItems[2]}</li>}
      {total >= 1000 && <li>{bonusItems[3]}</li>}
    </ul>
  );
}

export { ListOfCartItems, ListOfBonuses };
