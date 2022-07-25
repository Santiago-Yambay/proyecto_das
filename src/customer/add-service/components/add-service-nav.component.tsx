import { AddNewButton } from "@components/button/add-new-button.component";
import { ProgressBar } from "./progress-bar.component";
import { Button } from "@components/button/button.component";
import { Line } from "@models/line.model";

interface AddServiceNavProps {
  line?: Line;
  lblBack: JSX.Element | string;
  lblNext: JSX.Element | string;
  totalSteps: number;
  currentStep: number;
  total?: number;
  onClickNext: () => void;
  onClickBack: () => void;
  onAddToCart?: () => void;
}

export const AddServiceNav = (props: AddServiceNavProps) => {

  return (
    <>
      <AddNewButton />

      <div className="flex justify-between md:ml-20">
        <div className="grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 items-center">
          <button onClick={props.onClickBack}>
            <div className="flex items-center">
              <span className="icon-arrow-left mr-2"></span>
              {props.lblBack}
            </div>
          </button>

          <div>
            <ProgressBar
              stepsNumber={props.totalSteps}
              actualStep={props.currentStep}
            />
          </div>
        </div>

        <div>
          <Button classes="px-24" onClick={props.onClickNext}>
            {props.lblNext}
          </Button>
        </div>

        {props.onAddToCart && (
          <div>
            <Button classes="px-24" onClick={props.onAddToCart}>
              Add to cart
            </Button>
          </div>
        )}

        {props.total !== undefined && (
          <p>
            <strong>Total:</strong> ${" "}
            {props.total ? props.total.toFixed(2) : "0.00"}
          </p>
        )}
      </div>
    </>
  );
};
