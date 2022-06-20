import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';

import { Logo } from '../logo/logo.component';
import { NotificationMenu } from '../menu/notification-menu.component';
import { currentTelefonySelector } from '@state/redux/telefony/telefony.selectors';
import { ProfileMenu } from '../menu/profile-menu.component';

export const Header = (props: any) => {
    const router = useHistory();
    const currentTelefony = useSelector(currentTelefonySelector);

    return (
        <header className="flex justify-between items-center px-2 md:px-7 py-2 shadow-md bg-headerbar">
          <div className="flex">
            <button
              className="w-9 h-9 mr-2 flex justify-center items-center rounded-full bg-primary text-white md:hidden"
              onClick={props.onClickMenu}
            >
              <span className="icon-menu"></span>
            </button>
            <button onClick={() => router.push("/")}>
              <Logo img={currentTelefony.logo} className="h-12" />
            </button>
          </div>
      
          <div className="flex text-headericons">
            <NotificationMenu />
            <ProfileMenu />
          </div>
        </header>
      );
}
