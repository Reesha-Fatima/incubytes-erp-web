export type TypeOrderResponse = {
  id: number;
  ref_no: string;
  payment_status: string;
  payment_method: string;
  delivery_method: string;
  order_status: string;
  sub_total: number;
  delivery_fees: number;
  gst: number;
  total: number;
  orderMenus: {
    title: string;
    description: string;
    quantity: number;
    price: number;
    currency: string;
    image: string;
  }[];
  user: {
    name: string;
    email: string;
    phone: string;
  };
};
