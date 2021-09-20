import { getUserDetails } from "../services/microsoftAuth/GraphService";

export function normalizeError(error) {
  var normalizedError = {};
  if (typeof error === "string") {
    var errParts = error.split("|");
    normalizedError =
      errParts.length > 1
        ? { message: errParts[1], debug: errParts[0] }
        : { message: error };
  } else {
    normalizedError = {
      message: error.message,
      debug: JSON.stringify(error),
    };
  }
  return normalizedError;
}

export async function getUserProfile(userAgentApplication, scopes) {
  var accessToken = await getAccessToken(userAgentApplication, scopes);
  if (accessToken) {
    localStorage.setItem("laraCapitalAuthToken", accessToken);
    return await getUserDetails(accessToken);
  }
  return null;
}

async function getAccessToken(userAgentApplication, scopes) {
  try {
    var silentResult = await userAgentApplication.acquireTokenSilent({
      scopes: scopes,
    });

    return silentResult.accessToken;
  } catch (err) {
    if (isInteractionRequired(err)) {
      var interactiveResult = await userAgentApplication.acquireTokenPopup({
        scopes: scopes,
      });

      return interactiveResult.accessToken;
    } else {
      throw err;
    }
  }
}

function isInteractionRequired(error) {
  if (!error.message || error.message.length <= 0) {
    return false;
  }

  return (
    error.message.indexOf("consent_required") > -1 ||
    error.message.indexOf("interaction_required") > -1 ||
    error.message.indexOf("login_required") > -1 ||
    error.message.indexOf("no_account_in_silent_request") > -1
  );
}
