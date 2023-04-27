export const decodeUserFromTokenCookie = () => {
  const token = document.cookie
    .split(";")
    .map((item) => item.trim())
    .find((item) => item.startsWith("token="))
    .slice(6);

  // Decode the token
  // https://developer.mozilla.org/en-US/docs/Web/API/atob
  const decoded = token ? JSON.parse(atob(token.split(".")[1])) : null;

  // Check if the token has expired
  return decoded?.exp > Math.floor(Date.now() / 1000)
    ? decoded.data.username
    : null;
};

export const setTokenCookie = (token) => {
  // Set the token as a cookie with a one-year expiration
  const expirationDate = new Date();
  expirationDate.setTime(expirationDate.getTime() + 365 * 24 * 60 * 60 * 1000);

  // https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie#write_a_new_cookie
  document.cookie =
    "token=" +
    token +
    "; path=/; expires=" +
    expirationDate.toUTCString() +
    "; SameSite=Lax";
};
