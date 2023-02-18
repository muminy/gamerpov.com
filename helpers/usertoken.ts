export default function getUsertoken() {
  return localStorage.getItem("userToken") ?? "";
}

export const jwtSecret = "ASSSSSSSSSSDW";
