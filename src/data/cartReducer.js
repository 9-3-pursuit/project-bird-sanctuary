export const INITIAL_STATE = {
  list: [],
  total: 0,
};

export function cartReducer(cart, action) {
  const { type } = action;

  if (type === "added") {
    const { total, list } = cart;
    const { birdToAddToList, amount } = action;
    return {
      list: [...list, { ...birdToAddToList }],
      total: total + amount,
    };
  }
  if (type === "removed") {
    const { total } = cart;
    const { listWithItemFiltered, amount } = action;

    return {
      list: listWithItemFiltered,
      total: total - amount,
    };
  }
  if (type === "submitted") {
    return {
      list: [],
      total: 0,
    };
  }
}
