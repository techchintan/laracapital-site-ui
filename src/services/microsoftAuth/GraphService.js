var graph = require("@microsoft/microsoft-graph-client");

function getAuthenticatedClient(accessToken) {
  const client = graph.Client.init({
    authProvider: (done) => {
      done(null, accessToken);
    },
  });
  return client;
}

/* returned Profile Data After successfully loggedin through Microsoft */
export async function getUserDetails(accessToken) {
  const client = getAuthenticatedClient(accessToken);
  const user = await client.api("/me").get();
  return user;
}
