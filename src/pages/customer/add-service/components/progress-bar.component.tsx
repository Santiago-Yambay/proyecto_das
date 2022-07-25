import { useEffect, useState } from "react";

export const ProgressBar = (props: any) => {
  const [elements, SetElements]: any = useState();
  const currentProgress = (index: number) => (
    <div key={index} className="bg-gray-600 px-4 py-1 mx-1 rounded"></div>
  );
  const missingProgress = (index: number) => (
    <div key={index} className="bg-gray-300 px-4 py-1 mx-1 rounded"></div>
  );

  useEffect(() => {
    drawElements();
  }, []);

  const drawElements = () => {
    let draw: Array<any> = [];

    for (let index = 1; index <= props.stepsNumber; index++) {
      if (index <= props.actualStep) {
        draw.push(currentProgress(index));
      } else {
        draw.push(missingProgress(index));
      }
    }

    SetElements(draw);
  };

  return <div className="flex">{elements}</div>;
};
