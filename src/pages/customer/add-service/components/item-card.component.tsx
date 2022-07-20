import { FunctionComponent } from "react";

export interface Item {
  id: number;
  type: string;
  title: string;
  description?: string;
  icon?: string;
}

type ItemCardProps = {
  item: Item;
  isChecked: boolean;
  onChange: (item: Item) => void;
};

export const ItemCard: FunctionComponent<ItemCardProps> = ({
  item,
  isChecked,
  onChange,
}): JSX.Element => {
  const onChangeHandler = () => {
    onChange(item);
  }

  return (
    <div className="w-full border-2 border-gray-100 p-3 rounded-lg">
      <div className="flex justify-between relative">
        <h1 className="font-bold">{item.title}</h1>

        <input
          type="radio"
          id={`${item.type}-${item.id}`}
          name={item.type}
          value={item.id.toString()}
          checked={isChecked}
          className="absolute w-6 h-6 top-0 right-0"
          onChange={onChangeHandler}
        />
      </div>
      {item.description && <p>{item.description}</p>}
      {item.icon && (
        <img src={`/assets/img/${item.icon}`} className="h-10 mx-1" />
      )}
    </div>
  );
};
