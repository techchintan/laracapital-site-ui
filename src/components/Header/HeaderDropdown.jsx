import React from "react";
import { useHistory } from "react-router-dom";
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg,
} from "@coreui/react";
import { LogoutOutlined } from "@ant-design/icons";

export default function HeaderDropdown() {
  const history = useHistory();

  function handleLogout() {
    localStorage.clear();
    history.push("/auth");
  }

  return (
    <>
      <CDropdown inNav className="c-header-nav-items mx-2" direction="down">
        <CDropdownToggle className="c-header-nav-link" caret={false}>
          <div className="c-avatar">
            <CImg
              src="/avatars/user-avatar.svg"
              className="c-avatar-img"
              alt="admin@laracapital.com"
            />
          </div>
        </CDropdownToggle>
        <CDropdownMenu className="pt-0" placement="bottom-end">
          <CDropdownItem onClick={handleLogout}>
            <LogoutOutlined style={{ marginRight: 12 }}/>
            Logout
          </CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
    </>
  );
}
