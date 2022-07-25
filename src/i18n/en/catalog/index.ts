import { account } from './account.en';
import { invoice } from './invoice.en';
import { order } from './order.en';
import { offer } from './offer.en';

const catalog = {
  ...account,
  ...invoice,
  ...order,
  ...offer
}

export {
  catalog
}