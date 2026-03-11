export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      const product = action.payload;
      const alreadyInCart = state.find((item) => item.id === product.id);

      if (alreadyInCart) {
        return state.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...state, { ...product, qty: 1 }];
    }

    case "REMOVE_ONE": {
      const productId = action.payload;
      const existingItem = state.find(item => item.id === productId);
      
      if (existingItem.qty === 1) {
        return state.filter(item => item.id !== productId);
      }
      return state.map(item => 
        item.id === productId ? { ...item, qty: item.qty - 1 } : item
      );
    }

    case "DELETE_ITEM":
      return state.filter((item) => item.id !== action.payload);

    default:
      return state;
  }
};