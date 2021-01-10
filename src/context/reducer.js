import NoImage from '../images/NoImageAvailable.png';

export default (state, action) => {
  switch (action.type) {
    case 'DELETE':
      return state.filter((item) => item.id !== action.id);
    case 'INCREASE':
      return state.map((item) => {
        return item.id === action.id
          ? {
              ...item,
              amount: item.amount + 1,
            }
          : { ...item };
      });
    case 'DECREASE':
      return state.map((item) => {
        return item.id === action.id
          ? {
              ...item,
              amount: item.amount - 1,
            }
          : { ...item };
      });

    case 'CLEARCART':
      return [];

    case 'ADDTOCART':
      const { id, title, price, Shipping, image } = action.id;
      const url = image === null ? NoImage : image.url;
      let newItem = { id, title, price, Shipping, image: url, amount: 1 };
      return [...state, newItem];

    default:
      return state;
  }
  return state;
};
