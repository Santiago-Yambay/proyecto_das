import { FC } from "react";
import { useHistory } from 'react-router-dom';

import { ResumeDiscount } from "./resume-discount.component";
import { Button } from "@components/button/button.component";
import { Promotion, Discount } from "@models/telephony.model";
import { LineService } from "@adapters/rest";

type DiscountCardProps = {
  promotion: Promotion;
};

export const DiscountCard: FC<DiscountCardProps> = ({
  promotion,
}): JSX.Element => {
  const router = useHistory();
  
  const onAddNewHandler = async () => {
    const line = await LineService.getById(1);
    router.push(`/customer/${line.id}`);
  }

  return (
    <section className="relative text-white p-8 ">
      <div className="z-10 absolute top-0 left-0 w-20 h-20 flex items-center justify-center rounded-full bg-secondary">
        <strong>NUEVO</strong>
      </div>
      <div className="bg-alternative rounded-lg">
        <figure className="relative">
          <video autoPlay muted loop className="w-full h-60 object-cover object-top opacity-75 rounded-lg">
            <source src="assets/video/background.mp4" type="video/mp4" />
          </video>
          <div className="absolute text-center bottom-0 w-full bg-gradient-to-t from-alternative px-2">
            <h2>Bienvenido!!</h2>
            <strong className="text-secondary text-2xl">
              Nuevo sistema, nuevas ideas, nuevas experiencas
            </strong>
          </div>
        </figure>
        <div className="p-3">
          <p>Mira las propiedades</p>
          <p>Gestiona tus usuarios</p>
          <p>Gestiona tu cuenta</p>
          <p>Experimenta una nueva era</p>
        </div>
        <div className="flex justify-center items-center py-6">

          <Button>
            <span className="px-10" onClick={onAddNewHandler}>Ingresar</span>
          </Button>
        </div>
      </div>
    </section>
  );
};
