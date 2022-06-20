import React, { PropsWithChildren, useState } from "react";
import { Header } from "./header.component";
import { NavigationMenu } from "../menu/navigation-menu.component";

export const Layout = (props: PropsWithChildren<any>) => {
  const [showMenu, setShowMenu] = useState(false);
  const clickMenuHandler = () => {
    setShowMenu(!showMenu);
  }

  return (
    <>
      <Header onClickMenu={clickMenuHandler} />
      <div className="flex">
        <NavigationMenu visible={showMenu} />
        {props.children}
      </div>
    </>
  );
};
