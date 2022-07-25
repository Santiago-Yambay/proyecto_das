import { Action } from 'redux';

import { Telephony } from '@models/telephony.model';

export interface TelefonyState {
  currentTelefony: Telephony | null
}

export interface TelefonyDispatchAction extends Action {
  payload: Partial<TelefonyState>;
}