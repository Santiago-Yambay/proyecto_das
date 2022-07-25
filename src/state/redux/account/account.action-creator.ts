import { Account } from '@models/account.model';
import { AccountAction } from './account.action';

const setCurrentAccount = (account: Account) => ({
  type: AccountAction.SetCurrentAccount,
  payload: account
});

export default {
  setCurrentAccount
}