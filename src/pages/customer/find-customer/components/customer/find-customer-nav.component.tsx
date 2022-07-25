import { useForm } from "react-hook-form";
import { FormattedMessage } from "react-intl";

import { Button } from "@components/button/button.component";
import { useHistory } from "react-router";

export const FindCustomerNav = (props: any) => {
  const router = useHistory();
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: props.filters,
  });

  const onChangeTypeSearch = (event: any) => {
    props.onChangeTypeSearch(event);
    cleanForm();
  };

  const onAddNewHandler = () => {
    router.push('/customer/new-customer');
  }

  const cleanForm = () => {
    setValue("user", "");
    setValue("phone", "");
  };

  return (
    <>
      <div className="z-20 absolute hidden md:block md:col-span-2 lg:col-span-1">
        <Button classes="-mx-24" onClick={onAddNewHandler}>
          <div className="flex justify-between items-center">
            <span className="icon-home mr-8"></span>
            <span>
              + <FormattedMessage id="label.action.addNew" />
            </span>
          </div>
        </Button>
      </div>
      <div className="grid items-center grid-cols-1 sm:grid-cols-12 md:ml-20 gap-4">
        <div className="sm:col-span-3 lg:col-span-2 2xl:col-span-1 h-8">
          <p>
            Lugar
          </p>
        </div>

        <div className="sm:col-span-9 xl:col-span-6">
          <form onSubmit={handleSubmit(props.onSubmit)}>
            <div className="grid items-center grid-cols-1 sm:grid-cols-6 gap-3">
              <div className="md:col-span-1">
                <select
                  className="w-full bg-transparent text-primary outline-none"
                  onChange={onChangeTypeSearch}
                  value={props.searchType}
                >
                  <option value="user">Ciudad</option>
                  <option value="phone">Provincia</option>
                </select>
              </div>

              {props.searchType === "user" && (
                <div className="sm:col-span-2">
                  <input
                    {...register("user")}
                    className="w-full bg-transparent border-b border-gray-300 outline-none"
                    type="text"
                    autoComplete="off"
                    placeholder="Ciudad"
                  />
                </div>
              )}

              {props.searchType === "phone" && (
                <div className="sm:col-span-2">
                  <input
                    {...register("phone")}
                    className="w-full bg-transparent border-b border-gray-300 outline-none"
                    type="text"
                    autoComplete="off"
                    placeholder="Provincia"
                  />
                </div>
              )}

              <div className="flex flex-row-reverse sm:flex-row sm:col-span-1">
                <button type="submit" className="flex">
                  <span className="icon-seacrh text-white bg-primary rounded-full p-2"></span>
                </button>
              </div>
            </div>
          </form>
        </div>

      </div>
    </>
  );
};
