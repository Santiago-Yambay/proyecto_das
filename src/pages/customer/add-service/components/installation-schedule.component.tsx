import { ItemCalendar } from "./calendar/item-calendar";

export const InstallationSchedule = (props: any): JSX.Element => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="grid grid-cols-1 w-full max-w-sm text-center">
        <h1 className="font-bold text-black my-3">
          Please schedule the installation
        </h1>

        <div className="flex flex-col">
          <div className="bg-alternative font-bold rounded">
            <p className="py-4 text-white">NOVEMBER</p>
            <div className="grid grid-cols-7 text-white py-2 gap-1">
              <div className="text-gray-400">
                <p>MON</p>
                <p>5</p>
              </div>

              <div>
                <p>TUE</p>
                <p>6</p>
              </div>

              <div className="text-gray-400">
                <p>WED</p>
                <p>7</p>
              </div>

              <div className="text-gray-400">
                <p>THU</p>
                <p>8</p>
              </div>

              <div className="text-gray-400">
                <p>FRI</p>
                <p>9</p>
              </div>

              <div className="text-gray-400">
                <p>SAT</p>
                <p>10</p>
              </div>

              <div className="text-gray-400">
                <p>SUN</p>
                <p>11</p>
              </div>
            </div>
          </div>
          <div className="w-full grid grid-cols-5">
            {props.schedule.map((time: any, index: number) => (
              <ItemCalendar
                key={index}
                time={time}
                borderRight={(index + 1) % 5 === 0}
                onClick={props.onSelectTime}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
