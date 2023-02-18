import jsonwebtoken from "jsonwebtoken";
import { jwtSecret } from "./usertoken";

export const sign = (payload: any) =>
  jsonwebtoken.sign(payload, jwtSecret, { expiresIn: "2d" });

export const verify = (
  token: string,
  cb: (error: any, document: any) => void
) => jsonwebtoken.verify(token, jwtSecret, cb);
