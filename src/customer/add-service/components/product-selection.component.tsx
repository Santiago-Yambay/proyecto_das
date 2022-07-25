import { ProductCard } from "./products";
import Carousel from "react-elastic-carousel";
import { CategoryType } from "@models/category.model";

export const ProductSelection = (props: any): JSX.Element => {
  const breakPoints = [
    { width: 576, itemsToShow: 1 },
    { width: 640, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 992, itemsToShow: 4 }
  ];

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex flex-col my-2">
        <h1 className="text-center">{props.category.description}</h1>
        <p className="py-4 text-black">
          <strong>
            {props.category.name}
            {props.category.id === CategoryType.Plan ? "es" : "s"}{" "}
            disponibles
          </strong>
        </p>
        <Carousel
          className="my-3 h-full flex flex-col"
          isRTL={false}
          pagination={false}
          breakPoints={breakPoints}
        >
          {props.data.map((product: any, index: number) => {
            return (
              <ProductCard
                key={index}
                product={product}
                showRadio={true}
                onChange={props.onChange}
              />
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};
