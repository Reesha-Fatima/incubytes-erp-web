import { BASE_URL } from "@settings";
import { create } from "apisauce";
export { setBaseUrl } from "./request";

export const API = create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    //vendor_token: "0aWgufOpkxKtS1Zk",
  },
});
API.addMonitor(() => {});
