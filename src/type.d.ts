interface IUser {
  _id: string;
  role: string;
  email: string;
  name: string;
  orders: Order[];
}

interface Order {
  _id: string;
  total: number;
  createdAt: Date;
  deliveryAddress: Address;
  billingAddress: Address;
  products: Product[];
}

interface Address {
  _id: string;
  city: string;
  street: string;
  houseNumber: string;
  postalCode: string;
}

interface Product {
  _id: string;
  quantity: number;
}

type UserState = {
  user: IUser
};

type UserAction = {
  type: string;
  user: IUser
};

type DispatchType = (args: UserAction) => UserAction;
