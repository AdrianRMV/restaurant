import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ActionTypes, CartType } from '../types/types';

const INITIAL_STATE = {
    products: [],
    totalItems: 0,
    totalPrice: 0,
};

export const useCartStore = create(
    persist<CartType & ActionTypes>(
        (set, get) => ({
            products: INITIAL_STATE.products,
            totalItems: INITIAL_STATE.totalItems,
            totalPrice: INITIAL_STATE.totalPrice,
            addToCart(item) {
                // Obtiene los productos que ya estan en el carrito con el metodo de get()
                const products = get().products;

                // "productInState" nos sirve para primero buscar dentro de los productos que ya tenemos en el carrito lo siguiente:
                // se encuentra el id del item nuevo en los productos ya seleccionados en el carrito?, y si ese find regresa un objeto en este caso un objeto tipo Producto quiere decir que esta condicion se cumplio.
                const productInState = products.find(
                    (product) => product.id === item.id
                );

                if (productInState) {
                    // "updatedProducts" nos dara el producto que se desea actualizar, con la condicion de buscar el id de todos los productos y encontrar el id del producto que seleccionamos anteriormente "productInState"
                    const updatedProducts = products.map((product) =>
                        product.id === productInState.id
                            ? {
                                  // si la condicion se cumple retornara un objeto con todo lo que tiene el item y los campos necesitados a actualizar en este caso, quantity y price
                                  ...item,
                                  quantity: item.quantity + product.quantity,
                                  price: item.price + product.price,
                              }
                            : //   Si no es asi solo regresa el item nuevo
                              item
                    );
                    set((state) => ({
                        products: updatedProducts,
                        totalItems: state.totalItems + item.quantity,
                        totalPrice: state.totalPrice + item.price,
                    }));
                } else {
                    set((state) => ({
                        products: [...state.products, item],
                        totalItems: state.totalItems + item.quantity,
                        totalPrice: state.totalPrice + item.price,
                    }));
                }
            },
            removeFromCart(item) {
                set((state) => ({
                    products: state.products.filter(
                        (product) => product.id !== item.id
                    ),
                    totalItems: state.totalItems - item.quantity,
                    totalPrice: state.totalPrice - item.price,
                }));
            },
        }),
        { name: 'cart', skipHydration: true }
    )
);
