import { FC } from "react";

import { DiscountCard } from "./discount-card.component";
import { Promotion } from "@models/telephony.model";

type DiscountSectionProps = {
  promotion: Promotion;
};

export const DiscountSection: FC<DiscountSectionProps> = ({ promotion }): JSX.Element => (
  <div className="p-2 flex justify-center">
    <div className="w-full lg:w-1/2 xl:w-1/3">
      <DiscountCard promotion={promotion} />
    </div>
  </div>
);
