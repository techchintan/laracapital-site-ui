import React from "react";
import { useHistory } from "react-router-dom";

/*
 * @Author: Chintan Sudani
 * @Description: This file represent
 * hoc(higher order component) for private routing.
 */

// used for if user is logged or not for private routing
export default function WithAuth(WrapperComponent) {
  function Authenticate(props) {
    const history = useHistory();
    const isAuthenticated = localStorage.getItem("isUserLogged");

    const handleRedirect = React.useCallback(() => {
      if (
        isAuthenticated !== "true" &&
        !localStorage.getItem("laraCapitalAuthToken")
      ) {
        history.push("/auth");
      }
    }, [isAuthenticated, history]);

    React.useEffect(() => {
      handleRedirect();
    }, [handleRedirect]);

    return isAuthenticated === "true" ? <WrapperComponent {...props} /> : "";
  }

  return Authenticate;
}
