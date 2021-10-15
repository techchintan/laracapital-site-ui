import { atom } from "recoil";

/*
 * @Author: Chintan Sudani
 * @Description: This file includes state
 * management recoil of header services.
 */

// returns boolean value: if sidemenu is open or not
export const sideMenuBarAtom = atom({
  key: "sideMenuBarAtom",
  default: true, // default value of recoil state
});
