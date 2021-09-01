import React from "react";
import { useHistory } from "react-router-dom";

export default function WithAuth(WrapperComponent) {
  function Authenticate(props) {
    const history = useHistory();
    const isAuthenticate = true;

    const handleRedirect = React.useCallback(() => {
      if (!localStorage.getItem("laraCapitalAuthToken")) {
        history.push("/");
      }
    }, [history]);

    React.useEffect(() => {
      handleRedirect();
    }, [handleRedirect]);

    return isAuthenticate ? <WrapperComponent {...props} /> : "";
  }

  return Authenticate;
}
