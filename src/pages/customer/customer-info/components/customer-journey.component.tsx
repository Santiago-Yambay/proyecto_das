import { FunctionComponent } from "react";
import { FormattedMessage } from "react-intl";

import { Event } from "@models/event.model";
import { useFormatDate } from "@hooks/use-format-date.hook";
import { NotFoundData } from "@components/layout/no-found-data.component";

type CustomerJourneyProps = {
  events: Event[];
};

export const CustomerJourney: FunctionComponent<CustomerJourneyProps> = ({
  events,
}) => (
  <div className="rounded-lg h-full shadow-lg bg-white p-4">
    <p className="mb-3">
      <strong><FormattedMessage id="label.customer.customerJourney" /></strong>
    </p>
    {(Array.isArray(events) && events.length)? (
      <div className="flex items-center">
        <div>
          <button className="w-10 h-10 flex justify-center items-center border-solid border border-black rounded-full">
            <span className="icon-arrow-left"></span>
          </button>
        </div>
        <div
          className={`w-full h-32 mx-3 grid grid-cols-${events.length} gap-0`}
        >
          {events.map((event: Event, index: number) => (
            <div className="flex" key={index}>
              <div className="w-1 flex flex-col items-center">
                <div className="w-2 h-2 rounded-full bg-black"></div>
                <div className="w-px h-full bg-black"></div>
              </div>
              <div className="w-full flex flex-col justify-end">
                <div className="border-t border-dashed pl-2">
                  <p>{useFormatDate(event.date, "MMMM dd")}</p>
                  <p>{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <button className="w-10 h-10 flex justify-center items-center border-solid border border-black rounded-full">
            <span className="icon-arrow-right"></span>
          </button>
        </div>
      </div>
    ) : (
      <NotFoundData><FormattedMessage id="label.events.noHas" /></NotFoundData>
    )
  }
  </div>
);
