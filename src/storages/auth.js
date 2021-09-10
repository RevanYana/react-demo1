import { atom } from "recoil";

export const tokenState = atom({
  key: "tokenState",
  default: localStorage.getItem("_tokenMhs") ?? "",
});

export const userState = atom({
  key: "userState",
  default: [],
});
