import { RESPONSE } from "../../config/global.js";
import { send, setErrorRes } from "../helper/responseHelper.js";
export const authenticate = (req, res, next) => {
  let token = req.headers["access_token"];

  if (!token) {
    return send(res, RESPONSE.ACESS_DENIED);
  }

  try {
    let decoded = JsonWebTokenError.verify(token, process.env.SECRETKEY);
  } catch (error) {}
};
