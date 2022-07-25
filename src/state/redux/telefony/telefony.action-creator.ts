import { Telephony } from '@models/telephony.model';
import { TelefonyAction } from './telefony.action';

const setCurrentTelefony = (telefony: Telephony) => ({
  type: TelefonyAction.SetCurrentTelefony,
  payload: telefony
});

export default {
  setCurrentTelefony
}