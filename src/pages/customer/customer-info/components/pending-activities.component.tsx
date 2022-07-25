import { FormattedMessage } from "react-intl";

import { Order } from "./order.component";
import { NotFoundData } from '@components/layout/no-found-data.component';

export const PendingActivities = ({ orders }: any) => {
  return (
    <div className="mt-4">
      <p className="mb-4">
        <strong>
          <FormattedMessage id="label.activity.pendingActivities" />
        </strong>
      </p>

      <div className="w-full p-4 border-r border-gray-300 rounded-lg shadow-lg my-3">
        <strong className="inline-block mb-2">
          <FormattedMessage id="label.activity.importantActivities" />
        </strong>

        <div className="h-40 overflow-y-auto">
          {orders? 
            orders.map((order: any, index: number) => (
              <Order key={index} order={order} />
            ))
            : <NotFoundData>No has pending activities</NotFoundData>
          }
        </div>
      </div>
    </div>
  );
};
