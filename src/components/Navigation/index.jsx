import React from "react";
import { BarsOutlined } from "@ant-design/icons";
import { Link, useHistory } from "react-router-dom";
import { Menu, Layout, Button, Drawer } from "antd";

import "./style.scss";

import useWindowSize from "../../hooks/useWindowSize";
import BrandLogo from "../../assets/images/company-logo.svg";

// Navigation bar(Header) for guest user
export default function Navigation() {
  const history = useHistory();
  const { width: windowWidth } = useWindowSize();
  const [isMobileMenu, setIsMobileMenu] = React.useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    if (windowWidth >= 768) {
      setIsMobileMenu(false);
    } else {
      setIsMobileMenu(true);
    }
  }, [windowWidth]);

  function toggleMobileMenuOpen() {
    if (isMobileMenu) setMobileMenuOpen(!mobileMenuOpen);
  }

  function DesktopNavbar() {
    return (
      <Menu theme="light" mode="horizontal" className="font-bold font-16px">
        <Menu.Item key={99} style={{ padding: 0, border: "none" }}>
          <Link to="/">
            <img className="logo" alt="logo" src={BrandLogo} />
          </Link>
        </Menu.Item>
        <Menu.Item
          key={102}
          style={{ float: "right", padding: 0, border: "none", marginLeft: 10 }}
        >
          <Button
            type="primary"
            className="font-bold"
            onClick={() => history.push("/auth/login")}
          >
            Log In
          </Button>
        </Menu.Item>
        <Menu.Item
          key={103}
          style={{ float: "right", padding: 0, border: "none" }}
        >
          <Button
            className="font-bold gray-font"
            onClick={() => history.push("/auth/register")}
          >
            Register
          </Button>
        </Menu.Item>
      </Menu>
    );
  }

  function MobileNavbar() {
    return (
      <Menu theme="light" mode="horizontal">
        <Menu.Item key={98} style={{ padding: 0, border: "none" }}>
          <Link to="/">
            <img className="logo" alt="logo" src={BrandLogo} />
          </Link>
        </Menu.Item>
        <Menu.Item
          key={102}
          style={{ padding: 0, border: "none", float: "right" }}
        >
          <Button
            onClick={() => toggleMobileMenuOpen()}
            icon={<BarsOutlined style={{ marginRight: 0 }} />}
            type="ghost"
            style={{ marginLeft: 10 }}
            size="large"
          />
        </Menu.Item>
      </Menu>
    );
  }

  function DrawerMenu() {
    return (
      <Menu style={{ border: "none" }}>
        <Menu.Item key={0}>
          <Link onClick={() => toggleMobileMenuOpen()} to="/auth/login">
            Login
          </Link>
        </Menu.Item>
        <Menu.Item key={1}>
          <Link onClick={() => toggleMobileMenuOpen()} to="/auth/register">
            Register
          </Link>
        </Menu.Item>
      </Menu>
    );
  }

  return (
    <>
      {isMobileMenu && (
        <Drawer
          title={
            <img
              style={{ width: "100%", padding: 8, height: 50, marginLeft: -30 }}
              alt="BrandLogo"
              src={BrandLogo}
            />
          }
          headerStyle={{ padding: 0 }}
          bodyStyle={{ padding: 0 }}
          placement="left"
          closable={false}
          onClose={() => toggleMobileMenuOpen()}
          visible={mobileMenuOpen}
        >
          <DrawerMenu />
        </Drawer>
      )}
      <Layout.Header className="header-container">
        {isMobileMenu ? <MobileNavbar /> : <DesktopNavbar />}
      </Layout.Header>
    </>
  );
}
