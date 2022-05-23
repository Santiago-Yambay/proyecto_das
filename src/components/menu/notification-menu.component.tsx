import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { cartSelector } from '@state/redux/shopping-cart/shopping-cart.selector';

export const NotificationMenu = () => {
  const subscriptions = useSelector(cartSelector);
  const router = useHistory();

  const goToCart = (event: any) => {
    event.stopPropagation();
    router.push('/customer/cart');
  }

  return (
    <nav className="h-inherit flex items-center">
      <a href="#" className="mx-2">
        <span className="icon-message"></span>
      </a>
      <a href="#" className="mx-2 relative">
        <span className="icon-bell"></span>
      </a>
      <a href="#" className="mx-2 relative" onClick={goToCart}>
        <span className="icomoon-cart"></span>
        {
          subscriptions?.length > 0 && (
            <span className="absolute -top-2 -right-2.5 w-5 h-5 flex justify-center items-center bg-red rounded-full text-white">
              <small className="text-xs">{subscriptions.length}</small>
            </span>
          )
        }
      </a>
    </nav>
  );
}
