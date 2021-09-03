import React from "react";
import { Avatar, Dropdown, Menu } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import { withTranslation, useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { requestLogout } from "redux/actions/auth";

const CDN_URL = process.env.REACT_APP_CDN_URL;

function AdminHeader() {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const authUser = useSelector((selector) => selector.auth.authUser);

  const handleMenuClick = (e) => {
    if (e.key === "100") {
      localStorage.removeItem("studearn");
      dispatch(requestLogout());
    }
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="100" icon={<LogoutOutlined />}>
        {t("Logout")}
      </Menu.Item>
    </Menu>
  );
  return (
    <>
      <Dropdown
        className="admin-avatar"
        overlay={menu}
        placement="bottomCenter"
      >
        <Avatar
          className="avatar-profile"
          src={`${CDN_URL}${authUser?.avatar}`}
        >
          {authUser?.name[0]}
        </Avatar>
      </Dropdown>
    </>
  );
}

export default withTranslation()(AdminHeader);
