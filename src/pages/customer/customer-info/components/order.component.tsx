import { FormattedMessage } from 'react-intl';

import { useFormatDate } from '@hooks/use-format-date.hook';

export const Order = ({ order }: any) => (
  <div className="mb-3">
    <p className="text-xs">
      <FormattedMessage id="label.order.nro" /> {order.orderNumber ? order.orderNumber.value : ""} |
      {order.orderStatusId ? <FormattedMessage id={`catalog.order.orderStatusId.${order.orderStatusId.value}`} /> : ""}
    </p>
    <p className="text-xs">
      {order.createDt ? useFormatDate(order.createDt.value, 'MMMM dd - hh:mm bbb') : ""}
    </p>
  </div>
);
