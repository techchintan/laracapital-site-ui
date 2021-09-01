import React from "react";
import { useHistory } from "react-router-dom";

export default function WithAuth(WrapperComponent) {
  function Authenticate(props) {
    const history = useHistory();

    const handleRedirect = React.useCallback(() => {
      if (!localStorage.getItem("laracapitalAuthToken")) {
        history.push("/");
      }
    }, [history]);

    React.useEffect(() => {
      handleRedirect();
    }, [handleRedirect]);

    return true ? <WrapperComponent {...props} /> : "";
  }

  return Authenticate;
}
