import { Gender } from "./account.model";

export interface Operator {
  id: number;
  telephonyId: number;
  name: string;
  username: string;
  password: string;
  gender: Gender;
}