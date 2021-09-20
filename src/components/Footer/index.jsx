import React from "react";
import { CFooter } from "@coreui/react";

export default function Footer() {
  return (
    <CFooter fixed={false}>
      <div>
        <a
          href="http://localhost:3000/"
          target="_self"
          rel="noopener noreferrer"
        >
          Lara Capital
        </a>
        <span className="ml-1">&copy; 2021 lara-capital-webui.</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Powered by</span>
        <a
          href="http://localhost:3000/"
          target="_self"
          rel="noopener noreferrer"
        >
          Lara Capital Team
        </a>
      </div>
    </CFooter>
  );
}
