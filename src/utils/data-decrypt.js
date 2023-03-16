import CryptoJS from "crypto-js";
import { secretKey } from "../constants/secret-key";

export const dataDecrypt = (value) => {
  try {
    const bytes = CryptoJS.AES.decrypt(value, secretKey);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  } catch (error) {
    console.log("🚀 ~ file: data-decrypt.js:9 ~ dataDecrypt ~ error:", error);
  }
};
