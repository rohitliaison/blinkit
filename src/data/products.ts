export interface Product {
  id: number;
  name: string;
  price: number;
}

export const products: Product[] = [
  { id: 1, name: "Milk", price: 1.99 },
  { id: 2, name: "Bread", price: 2.49 },
  { id: 3, name: "Eggs", price: 3.99 },
];
