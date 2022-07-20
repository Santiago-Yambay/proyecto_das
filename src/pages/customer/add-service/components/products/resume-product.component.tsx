import { Aggregate } from "@models/product.model";
import { FunctionComponent } from "react";

type ResumeProductProps = {
  aggreate: Aggregate;
};

export const ResumeProduct: FunctionComponent<ResumeProductProps> = ({
  aggreate,
}: ResumeProductProps) => {
  return (
    <article className="p-2 mt-2 bg-alternative filter drop-shadow text-white rounded-lg w-full">
      <h4 className="mb-1">{aggreate.description}</h4>

      <div className="w-full grid grid-cols-5 gap-2">
        {aggreate.apps.map((app: string, index: number) => (
          <img key={index} src={`/assets/img/${app}.png`} className="h-10 mx-1" />
        ))}
      </div>
    </article>
  );
};
