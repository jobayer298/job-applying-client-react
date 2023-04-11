import { getStoredCart } from "../../utils/fakeDB";

export const allJobsData = async () =>{
    const jobsData = await fetch("job-desc.json");
    const jobs = await jobsData.json()
    const savedCart = getStoredCart();

    let cartArray = [];
    for (const id in savedCart) {
      const findData = jobs.find((jb) => jb.id === id);
      if (findData) {
        const quantity = savedCart[id]
        findData.quantity = quantity;
        cart.push(findData);
      }
    }
    return { cartArray, jobs };
};

// import { getStoredCart } from "../utils/fakeDB";

// export const productsAndCartData = async () => {
//   const productsData = await fetch("products.json");
//   const products = await productsData.json();

//   const savedCart = getStoredCart();
//   const initialCart = [];
//   for (const id in savedCart) {
//     const foundProduct = products.find((product) => product.id === id);
//     if (foundProduct) {
//       const quantity = savedCart[id];
//       foundProduct.quantity = quantity;
//       initialCart.push(foundProduct);
//     }
//   }

//   return { products, initialCart };
// };