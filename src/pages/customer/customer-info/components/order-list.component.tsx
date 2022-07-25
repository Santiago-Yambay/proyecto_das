import { Order } from "./order.component";

export const OrderList = ({ data }: any) => (
  <div className="max-h-20 overflow-auto pr-2">
    {data && (
      data.map((order: any, index: number) => (
        <Order key={index} order={order} />
      ))
    )}
  </div>
);
