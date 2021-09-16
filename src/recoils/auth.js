import { atom } from "recoil";

/*
 * @Author: Chintan Sudani
 * @Description: This file includes state
 * management recoil of Auth services.
 * @Reference:http://recoiljs.org/docs/introduction/getting-started/
 */

export const userProfileDataAtom = atom({
  key: "userProfileDataAtom",
  default: undefined,
  dangerouslyAllowMutability: true,
});
