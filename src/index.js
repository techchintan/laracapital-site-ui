import "react-app-polyfill/ie11"; // For IE 11 support
import "react-app-polyfill/stable";
import "core-js";
import "antd/dist/antd.css";

import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";

import { icons } from "./assets/icons";
import ToastBanner from "./components/ToastBanner";
import App from "./pages/App";

React.icons = icons;

const queryClient = new QueryClient();

function BaseApp() {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ToastBanner />
        <App />
      </QueryClientProvider>
    </RecoilRoot>
  );
}

ReactDOM.render(<BaseApp />, document.getElementById("root"));
