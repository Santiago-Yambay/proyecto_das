import { useState } from "react";
import ReactLoading from "react-loading";
import { FormattedMessage } from "react-intl";
import { useDispatch, useSelector } from "react-redux";

import { Main } from "@components/layout/main.component";
import { useHistory } from "react-router";
import { InstallationSchedule } from "./components/installation-schedule.component";
import { AddServiceNav } from "./components/add-service-nav.component";
import allActions from "@state/redux/actions";
import { scheduleSelector } from "@state/redux/add-service/add-service.selector";
import Swal from "sweetalert2";
import { NotificationsUtil } from '@utils/notification.util';

export const InstallationSchedulePage = () => {
  const dispatch = useDispatch();
  const router = useHistory();
  const [loading, setLoading] = useState(false);

  const schedule = useSelector(scheduleSelector);

  const goNext = async () => {
    let counter: number = 0;

    await schedule.forEach((element: any) => {
      if (element.state == 2) {
        counter++;
      }
    });

    if (counter >= 1) {
      router.push("order-confirmation");
    } else {
      Swal.fire({
        icon: "warning",
        title: "Select a time to continue!",
        confirmButtonColor: "#0085CA",
      });
    }
  };

  const goBack = () => {
    router.goBack();
  };

  const selectTime = (time: any) => {
    if (time.state !== 3) {
      dispatch(
        allActions.addServiceActions.updateSchedule({
          time,
          state: time.state === 2 ? 1 : 2,
        })
      );
    } else {
      NotificationsUtil.showWarning('There is no availability on the selected date');
    }
  };

  return (
    <Main
      className="amd__add-service-page__main"
      navigation={
        <AddServiceNav
          lblBack={<FormattedMessage id="label.add-customer.addOn" />}
          lblNext={<FormattedMessage id="label.add-customer.next" />}
          onClickBack={goBack}
          onClickNext={goNext}
          totalSteps={5}
          currentStep={3}
        />
      }
    >
      {loading && (
        <div className="h-full flex justify-center items-center">
          <ReactLoading type={"bars"} color={"#0085CA"} />
        </div>
      )}

      {!loading && (
        <InstallationSchedule onSelectTime={selectTime} schedule={schedule} />
      )}
    </Main>
  );
};
