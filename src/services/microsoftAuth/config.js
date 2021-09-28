/* Client Microsoft SSO configuration */
export const config = {
  clientId: "8732a094-8a87-4e24-af94-ae9dec1b1779", // microsoft account's Client ID
  redirectUri: "http://localhost:7878", // Where you need to redirect after login through Microsoft
  scopes: ["User.Read"], // What is the scope of using SSO
};
