import { FormattedMessage } from "react-intl";
import { useSelector } from "react-redux";

import { CustomerCard } from "./customer-card.component";
import { accountsSelector } from "@state/redux/lines/lines.selector";
import { Category } from "@models/category.model";

type CustomerListProps = {
  data: any[];
  filterBy: string;
  categories: Category[];
  onSelectLine: (line: any, account: any) => void;
};

export const CustomerList = (props: CustomerListProps): JSX.Element => {
  const accounts: any[] = useSelector(accountsSelector);

  const getAccount = (accountId: number): any => {
    return accounts.find((account: any) => account.id === accountId);
  };

  return (
    <div>
      <p>
        {props.data.length} <FormattedMessage id="label.action.resultFor" />{" "}
        <strong>{props.filterBy}</strong>
      </p>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5">
        {props.data.map((item: any) => (
          <div key={item.id}>
            <CustomerCard
              line={item}
              categories={props.categories}
              account={getAccount(item.accountId)}
              onClick={props.onSelectLine}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
