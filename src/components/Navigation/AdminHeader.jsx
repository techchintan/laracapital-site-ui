import React from "react";
import { Dropdown, Menu } from "antd";
import { LogoutOutlined } from "@ant-design/icons";

export default function AdminHeader() {
  const menu = (
    <Menu>
      <Menu.Item key="100" icon={<LogoutOutlined />}>
        Logout
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
        Profile Image
      </Dropdown>
    </>
  );
}
