import { getStoreCart } from "../utilities/fakedb";

export const productsCartLoader = async () => {
  // get producst///
  const productsData = await fetch("products.json");
  const products = await productsData.json();

  // get cart //
  const savedCart = getStoreCart();
  // console.log(savedCart)
  const initialCart = [];
  for (const id in savedCart) {
    const addedProducts = products.find((product) => product.id === id);
    // console.log(id,addedProducts)
    if (addedProducts) {
      const quantity = savedCart[id];
      // console.log(id,quantity)
      addedProducts.quantity = quantity;
      initialCart.push(addedProducts);
    }
  }

  return { products:products , initialCart:initialCart };
};
