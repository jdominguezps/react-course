/**
 * This function calculates total price of a new order
 * @param {Array} products cartProduct: Array of Objects
 * @returns {Number} Total Price
 */
export const totalPrice2 = (products) => {
    let sum = 0;
    products.forEach(product => sum += product.price);
    return sum;
}
