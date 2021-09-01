import React from "react";
import { Avatar, Dropdown, Menu } from "antd";
import { LogoutOutlined } from "@ant-design/icons";

import UserIcon from "../../assets/images/user-icon.png";

export default function AuthHeader() {
  const menu = (
    <Menu>
      <Menu.Item key="100" icon={<LogoutOutlined />}>
        Logout
      </Menu.Item>
    </Menu>
  );
  return (
    <>
      <Avatar
        className="notification-icon"
        style={{ backgroundColor: "#fcfcfc" }}
      >
        <img src={UserIcon} alt="usericon" />
      </Avatar>
      <Dropdown
        className="admin-avatar"
        overlay={menu}
        placement="bottomCenter"
      >
        <Avatar style={{ backgroundColor: "#fcfcfc" }}>
          <img src={UserIcon} alt="usericon" />
        </Avatar>
      </Dropdown>
    </>
  );
}
