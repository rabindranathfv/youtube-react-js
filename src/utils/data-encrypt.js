import CryptoJS from "crypto-js";
import { secretKey } from "../constants/secret-key";

export const dataEncrpt = (value) => {
  try {
    return CryptoJS.AES.encrypt(JSON.stringify(value), secretKey).toString();
  } catch (error) {
    console.log("🚀 ~ file: data-encrypt.js:9 ~ dataEncrpt ~ error:", error);
  }
};
