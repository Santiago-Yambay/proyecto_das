import { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import { Main } from "@components/layout/main.component";
import { AddServiceNav } from "./components/add-service-nav.component";
import { currentLineSelector } from "@state/redux/lines/lines.selector";
import { AvailabilityAddress } from "./components/availability-address.component";
import { NotificationsUtil } from "@utils/notification.util";
import { currentAccountSelector } from "@state/redux/lines/lines.selector";
import { Address } from "@models/address.model";
import allActions from "@state/redux/actions";
import { addressSelector } from '@state/redux/lines/lines.selector';

export const AvailabilityCheck: FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const router = useHistory();
  const addresss = useSelector(addressSelector);
  const line = useSelector(currentLineSelector);
  const account = useSelector(currentAccountSelector);

  const defaultValues = addresss || { street: account.address };

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<Address>({
    defaultValues
  });

  const onBackHandler = () => {
    router.goBack();
  };

  const onNextHandler = () => {
    if (isValid()) {
      dispatch(allActions.linesActions.setAddress(getValues()));
      router.push(`add-on`);
    } else {
      NotificationsUtil.clearAllQueue();
      NotificationsUtil.showWarning("Service not available for that address");
    }
  };

  const isValid = (): boolean => {
    const { postCode } = getValues();
    return postCode === '123';
  };

  return (
    <Main
      navigation={
        <AddServiceNav
          line={line}
          lblBack="Back"
          lblNext="Validate"
          onClickBack={onBackHandler}
          onClickNext={handleSubmit(onNextHandler)}
          totalSteps={6}
          currentStep={3}
          total={0}
        />
      }
    >
      <section className="box-border shadow-md rounded backdrop-blur-sm bg-white p-4">
        <h2>Check Availability</h2>
        <AvailabilityAddress register={register} errors={errors} />
      </section>
    </Main>
  );
};
