/* Client Microsoft SSO configuration */
export const config = {
  clientId: "d2b12260-9d1c-4ade-9bda-6244f5a93e9c", // microsoft account's Client ID
  redirectUri: "http://localhost:7878", // Where you need to redirect after login through Microsoft
  scopes: ["User.Read"], // What is the scope of using SSO
};
