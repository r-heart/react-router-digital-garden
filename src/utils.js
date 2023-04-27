export const decodeUserFromTokenCookie = () => {
  const token = document.cookie
    .split(";")
    .some((item) => item.trim().startsWith(name + "="));

  // Decode the token
  // https://developer.mozilla.org/en-US/docs/Web/API/atob
  const decoded = token ? JSON.parse(atob(token.split(".")[1])) : null;

  // Check if the token has expired
  return decoded?.exp > Math.floor(Date.now() / 1000)
    ? // Server encodes 'user' object in the token - that's what we care about
      decoded.user
    : null;
};

export const setTokenCookie = (token) => {
  // Set the token as a cookie with a one-year expiration
  const expirationDate = new Date();
  expirationDate.setTime(expirationDate.getTime() + 365 * 24 * 60 * 60 * 1000);

  document.cookie =
    "token=" +
    token +
    "; path=/; expires=" +
    expirationDate.toUTCString() +
    "; SameSite=Lax";
};
