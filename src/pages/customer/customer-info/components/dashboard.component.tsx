import { FormattedMessage } from "react-intl";

export const Dashboard = () => {
  return (
    <div className="w-full">
      <p className="mb-4">
        <strong>
          <FormattedMessage id="label.dashboard" />{" "}
        </strong>{" "}
        <a className="underline ml-2 text-primary">
          <small><FormattedMessage id="label.action.moreDetails" /></small>
        </a>
      </p>

      <div className="relative h-36 bg-primary rounded-lg">
        <img
          src="/assets/img/mask.png"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 p-3 text-white">
          <div className="flex items-center">
            <strong>
              <FormattedMessage id="label.dashboard.outageInfo" />:
            </strong>
            <span className="inline-block w-4 h-4 ml-2 rounded-full bg-green-500"></span>
          </div>
          <small>
            <FormattedMessage id="label.dashboard.usage" />
          </small>
          <p>
            <strong className="text-5xl">150</strong>{" "}
            <strong className="text-3xl opacity-25">GB</strong>
          </p>
          <small>
            <FormattedMessage id="label.dashboard.average" />
          </small>
        </div>
      </div>
    </div>
  );
};
