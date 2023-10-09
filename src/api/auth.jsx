import jwt_decode from "jwt-decode";

export function isTokenValid(token) {
  if (!token) {
    return false;
  }

  const decodedToken = jwt_decode(token);
  const currentTimestamp = Date.now() / 1000; 

  return decodedToken.exp > currentTimestamp;
}
