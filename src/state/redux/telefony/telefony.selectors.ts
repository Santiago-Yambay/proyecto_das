import { Telephony } from "@models/telephony.model";

export const currentTelefonySelector = (state: any): Telephony => state.telefony.currentTelefony;