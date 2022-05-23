import { FC, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import allActions from "../../state/redux/actions";
import { currentOperator } from "@state/redux/operators/operator.selector";
import { Operator } from "@models/operator.model";

export const ProfileMenu = () => {
  const [urlImage, setUrlImage] = useState("");
  const dispatch = useDispatch();
  const router = useHistory();
  const operator = useSelector(currentOperator);
  const showMenu = useSelector((state: any) => state.user.showProfileMenu);

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * (99 - 0 + 1)) + 0;
    setUrlImage(
      `https://randomuser.me/api/portraits/${operator.gender}/${randomNumber}.jpg`
    );
  }, []);

  const onLogout = () => {
    dispatch(allActions.shoppingCartActions.cleanCart());
    dispatch(allActions.linesActions.removeCurrentLine());
    dispatch(allActions.linesActions.setLines(null));
    dispatch(allActions.customerActions.setFilters(null));
    dispatch(allActions.customerActions.setDoSearch(false));
    dispatch(allActions.productsActions.setCategories(null));
    router.push("/");
  };

  return (
    <div className="relative">
      <button
        onClick={() =>
          dispatch(allActions.userActions.setShowProfileMenu(!showMenu))
        }
        className="mx-3 flex items-center"
      >
        <img
          className="mb-1 rounded-full h-10 border-2 border-alternative"
          src={urlImage}
        />
        <p className="ml-3">{operator.name}</p>
      </button>

      <Menu operator={operator} show={showMenu} onLogout={onLogout} />
    </div>
  );
};

type MenuProps = {
  operator: Operator;
  show: boolean;
  onLogout: () => void;
};

const Menu: FC<MenuProps> = ({ operator, show, onLogout }): JSX.Element => {
  if (show) {
    return (
      <div className="flex flex-col justify-between p-4 absolute right-0 top-16 w-auto h-auto shadow-lg bg-white rounded z-50">
        <div className="w-full p-2 rounded flex flex-col items-start">
          <div className="flex flex-col items-start">
            <p className="mb-3 text-black">{operator.username}</p>
          </div>

          <button className="mt-4 text-primary font-bold" onClick={onLogout}>
            Sign out
          </button>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};
