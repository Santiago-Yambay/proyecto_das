import { FC } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';

type LoginCardProps = {
  errorMessage: string;
  onLogin: (user: any) => void;
};

export const LoginCard: FC<LoginCardProps> = ({ onLogin, errorMessage }): JSX.Element => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <section className="relative w-11/12 sm:w-4/5 md:w-3/5 lg:w-2/5 xl:w-2/6 2xl:w-1/4">
      <div className="absolute top-0 bottom-0 left-0 right-0 box-border shadow-md rounded backdrop-blur-sm ads-blur-form"></div>
      <div className="relative p-6 sm:p-10">
        <div className="flex justify-center mb-4">
          <img src="assets/img/amdocs.png" className="h-10" />
        </div>
        <form onSubmit={handleSubmit(onLogin)} className="text-white px-10" autoComplete="off">
          <div>
            <label className="mb-1">
              <strong className="block mb-2">Usuario:</strong>
              <input
                {...register("user", { required: "Ingrese un usuario" })}
                type="text"
                placeholder="user"
                autoComplete="off"
                className="w-full rounded-full outline-none bg-black-light px-4 py-1"
              ></input>
              <div className="h-3 text-primary pl-3">
                <ErrorMessage errors={errors} name="user" />
              </div>
            </label>
          </div>
          <div className="mt-4">
            <label className="mb-1">
              <strong className="block mb-2">Contraseña:</strong>
              <input
                {...register("password", { required: "Ingrese una contraseña" })}
                type="password"
                placeholder="password"
                autoComplete="off"
                className="w-full rounded-full outline-none bg-black-light px-4 py-1"
              ></input>
              <div className="h-3 text-primary pl-3">
                <ErrorMessage errors={errors} name="password" />
              </div>
            </label>
          </div>
          <div className="flex justify-center mt-4">
            <button className="p-1 px-14 text-white rounded-full bg-gradient-to-r from-primary via-alternative to-secondary hover:bg-gradient-to-l hover:from-secondary hover:via-alternative hover:to-primary">
              Login
            </button>
          </div>
          <div className="h-2 mt-5 text-center">
            <span className="text-primary">{errorMessage}</span>
          </div>
        </form>
      </div>
    </section>
  );
};
