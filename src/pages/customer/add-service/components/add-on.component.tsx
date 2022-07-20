import { FunctionComponent } from "react";
import { FormattedMessage } from "react-intl";

import { AddOnCard } from "./add-on-card.component";
import { ProductComponent as ProductComponent } from "../../customer-info/components/product.component";
import { ItemCard, Item } from "./item-card.component";
import { CategoryType } from "@models/category.model";
import { Line } from "@models/line.model";
import { Account } from "@models/account.model";
import { Product } from "@models/product.model";
import { RenewalType, Subscription } from "@models/subscription.model";

type AddOnProps = {
  line: Line;
  account: Account;
  product: Product;
  subscription: Subscription;
  onChangeRenewalType: (item: Item) => void;
};

export const AddOn: FunctionComponent<AddOnProps> = ({
  line,
  account,
  product,
  subscription,
  onChangeRenewalType
}): JSX.Element => {
  const packageOptions: Item[] = [
    {
      id: RenewalType.Once,
      type: "packageOption",
      title: "Única vez",
      description: "No existirá una renovación automática",
    },
    {
      id: RenewalType.Recurrent,
      type: "packageOption",
      title: "Recurrente",
      description: "Existirá una renovación automática cada 30 días",
    },
  ];

  const channelOptions: Item[] = [
    {
      id: 1,
      type: "channelOption",
      title: "HBO+",
      icon: "hbo.png",
    },
    {
      id: 2,
      type: "channelOption",
      title: "Netflix",
      icon: "netflix.png",
    },
    {
      id: 3,
      type: "channelOption",
      title: "Disney Plus",
      icon: "disney-plus.png",
    },
  ];

  const onChangePackageOption = (item: Item): void => {
    onChangeRenewalType(item);
  };

  const onChangeChannelOption = (item: Item): void => {
    console.log("Channel", item);
  };

  const pakageOptionChecked = (item: Item): boolean => {
    return subscription.renewalType === item.id;
  }

  return (
    <section className="box-border shadow-md rounded backdrop-blur-sm bg-white p-4">
      <div className="mb-3">
        <h1><FormattedMessage id="label.buy.continue" /></h1>
      </div>

      <div className="grid grid-cols-3">
        <div>
          <p>
            <strong className="text-lg"><FormattedMessage id="label.customer" /></strong>
          </p>
          <p>
            <strong><FormattedMessage id="label.global.name" />:</strong> {account.name}
          </p>
          <p>
            <strong><FormattedMessage id="label.global.lastname" />:</strong> {account.lastName}
          </p>
        </div>
        <div>
          <p>
            <strong className="text-lg"><FormattedMessage id="label.contact.phone" /></strong>
          </p>
          <p>{line.phone}</p>
        </div>
        <div>
          <p>
            <strong className="text-lg"><FormattedMessage id="label.contact.address" /></strong>
          </p>
          <p>{account.address}</p>
        </div>
      </div>

      <div className="mt-6">
        <h1><FormattedMessage id="label.product.oneSelected" />:</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-7 xl:grid-cols-10 my-2 gap-2">
        <div className="w-full sm:col-span-3">
          <ProductComponent product={product} className="h-40" showDescription={true} />
        </div>

        {product.aggregates.map((aggregate: any, index: number) => (
          <AddOnCard
            key={index}
            indexProduct={index}
            data={aggregate}
            showRadio={true}
          />
        ))}

        {product.categoryId === CategoryType.Paquete && (
          <>
            <div className="text-center self-center">
              <p className="text-7xl">+</p>
            </div>

            {channelOptions.map((item: Item) => (
              <div key={item.id} className="w-full flex items-center">
                <ItemCard
                  key={item.id}
                  item={item}
                  isChecked={true}
                  onChange={onChangeChannelOption}
                />
              </div>
            ))}
          </>
        )}
      </div>
      {product.categoryId === CategoryType.Paquete && (
        <div className="grid grid-cols-10 gap-3">
          {packageOptions.map((item: Item) => (
            <ItemCard
              key={item.id}
              item={item}
              isChecked={pakageOptionChecked(item)}
              onChange={onChangePackageOption}
            />
          ))}
        </div>
      )}
    </section>
  );
};
