import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';

import { Main } from "@components/layout/main.component";
import { NewCustomerNav } from "./components/new-customer-nav.component";
import { CustomerForm } from "./components/customer-form.component";
import { AccountService } from "@adapters/rest/account.service";
import { LineService } from "@adapters/rest/line.service";
import { Gender } from "@models/account.model";
import { currentTelefonySelector } from "@state/redux/telefony/telefony.selectors";
import allActions from '@state/redux/actions';

type CustomerForm = {
  name: string;
  lastName: string;
  user: string;
  address: string;
  gender: string;
  card: string;
  bank: string;
  accountNumber: string;
  dateExpiry: string;
  phone: string;
}


export const NewCustomer = () => {
  const router = useHistory();
  const dispatch = useDispatch();
  const telephony = useSelector(currentTelefonySelector);

  const { register, getValues, handleSubmit, formState: { errors } } = useForm<CustomerForm>({
    defaultValues: {
      gender: '',
      card: ''
    }
  });

  const onSaveHadler = async () => {
    const {
      name,
      lastName,
      user,
      address,
      gender,
      card,
      bank,
      accountNumber,
      dateExpiry,
      phone,
    } = getValues();

    const account = await AccountService.create({
      name,
      lastName,
      user,
      address,
      gender: gender as Gender,
      paymentMethod: {
        card,
        bank,
        accountNumber,
        dateExpiry,
      },
    });

    const line = await LineService.create({
      accountId: account.id,
      telephonyId: telephony.id,
      phone,
      balance: 0,
      subscriptions: [],
      user: account.user
    });

    dispatch(allActions.linesActions.setCurrentLine(line));
    dispatch(allActions.linesActions.setCurrentAccount(account));
    router.push(`/customer/${line.id}`);
  };

  const onBackHandler = () => {
    router.goBack();
  };

  return (
    <Main
      navigation={
        <NewCustomerNav onSave={handleSubmit(onSaveHadler)} onBack={onBackHandler} />
      }
    >
      <section className="box-border shadow-md rounded backdrop-blur-sm bg-white p-4">
        <CustomerForm register={register} errors={errors}/>
      </section>
    </Main>
  );
};
