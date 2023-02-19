import CryptoJS from "crypto-js";
import { secretKey } from "../constants/secret-key";

export const dataEncrpt = (value) => {
  return CryptoJS.AES.encrypt(JSON.stringify(value), secretKey).toString();
};
