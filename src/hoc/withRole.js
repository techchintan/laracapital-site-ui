import React from "react";
import { useHistory } from "react-router-dom";

/*
 * @Author: Chintan Sudani
 * @Description: This file represent
 * hoc(higher order component) for role based private routing.
 */

// used if admin user or not for private routing
export default function WithRole(WrapperComponent, userRole) {
  function Authorization(props) {
    const history = useHistory();
    const isAuthenticated = localStorage.getItem("isUserLogged");
    const adminRole = localStorage.getItem("isAdminUser");
    /* TODO: We need roles array at when user login */
    const roles = [adminRole];

    const handleRedirect = React.useCallback(() => {
      if (!isAuthenticated || !roles?.some((item) => item === userRole)) {
        history.push("/employee/equipment");
      }
    }, [history, isAuthenticated, roles]);

    React.useEffect(() => {
      handleRedirect();
    }, [handleRedirect]);

    return isAuthenticated ? <WrapperComponent {...props} /> : "";
  }
  return Authorization;
}
