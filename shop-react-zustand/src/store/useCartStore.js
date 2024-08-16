import { create } from "zustand";

const useCartStore = create((set) => ({
  carts: [
    // {
    //   id: 1,
    //   productId: 2,
    //   quantity: 3,
    // },
    // {
    //   id: 2,
    //   productId: 10,
    //   quantity: 2,
    // },
  ],
  addCart: (cart) => {
    set((state) => ({
      carts: [...state.carts, cart],
    }));
  },
  removeCart: (id) => {
    set((state) => ({
      carts: state.carts.filter((cart) => cart.id !== id),
    }));
  },

  increaseQuantity: (id) => {
    set((state) => ({
      carts: state.carts.map((cart) =>
        cart.id === id ? { ...cart, quantity: cart.quantity + 1 } : cart
      ),
    }));
  },
  decreaseQuantity: (id) => {
    set((state) => ({
      carts: state.carts.map((cart) =>
        cart.id === id ? { ...cart, quantity: cart.quantity - 1 } : { ...cart }
      ),
    }));
  },
}));

export default useCartStore;
