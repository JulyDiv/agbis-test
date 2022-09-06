export const totalPrice = (order) => order.price * order.count;

export const currency = (value) =>
  value.toLocaleString("ru-RU", {
    style: "currency",
    currency: "RUB",
  });
