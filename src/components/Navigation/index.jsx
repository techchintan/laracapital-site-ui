import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Menu, Layout, Button, Drawer } from "antd";
import { BarsOutlined, LogoutOutlined } from "@ant-design/icons";

import "./style.scss";
import BrandLogo from "../../assets/images/company-logo.svg";

import useWindowSize from "../../hooks/useWindowSize";

export default function Navigation() {
  const history = useHistory();
  const { width: windowWidth } = useWindowSize();
  const [isMobileMenu, setIsMobileMenu] = React.useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  function toggleMobileMenuOpen() {
    if (isMobileMenu) setMobileMenuOpen(!mobileMenuOpen);
  }

  const handleLogout = () => {
    localStorage.removeItem("laracapitalAuthToken");
    history.push("/");
  };

  function DesktopNavbar() {
    return (
      <Menu mode="horizontal">
        <Menu.Item key={0}>
          <Link to="/">
            <img className="logo" alt="logo" src={BrandLogo} />
          </Link>
        </Menu.Item>
        <Menu.Item key={1} style={{ marginLeft: "250px" }}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key={2}>
          <Link to="/about-us">About us</Link>
        </Menu.Item>
        <Menu.Item key={3}>
          <Link to="/blog">Blog</Link>
        </Menu.Item>
        <Menu.Item key={3}>
          <Link to="/auth/login">Login</Link>
        </Menu.Item>
        <Menu.Item key={3}>
          <Link to="/auth/register">Register</Link>
        </Menu.Item>
        <Menu.Item key={4} style={{ float: "right", paddingTop: "10px" }}>
          <button className="common-button">
            <span>Contact US</span>
          </button>
        </Menu.Item>
      </Menu>
    );
  }

  function MobileNavbar() {
    return (
      <Menu theme="light" mode="horizontal">
        <Menu.Item key={99} style={{ padding: 0, border: "none" }}>
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
          <Link onClick={() => toggleMobileMenuOpen()} to={"/contact-us"}>
            Contact us
          </Link>
        </Menu.Item>
        <Menu.Item key={1}>
          <Link onClick={() => toggleMobileMenuOpen()} to={"/about-us"}>
            About us
          </Link>
        </Menu.Item>
        {true && (
          <Menu.Item key={2}>
            <Link onClick={() => toggleMobileMenuOpen()} to={"/profile/user"}>
              Profile
            </Link>
          </Menu.Item>
        )}
        {false && (
          <Menu.Item key={100} icon={<LogoutOutlined />}>
            <Link
              onClick={() => {
                handleLogout();
                toggleMobileMenuOpen();
              }}
              to={"/"}
            >
              Sign out
            </Link>
          </Menu.Item>
        )}
        {!false && (
          <Menu.Item key={2}>
            <Link onClick={() => toggleMobileMenuOpen()} to={"/account"}>
              Login
            </Link>
          </Menu.Item>
        )}
      </Menu>
    );
  }

  React.useEffect(() => {
    if (windowWidth >= 768) {
      setIsMobileMenu(false);
    } else {
      setIsMobileMenu(true);
    }
  }, [windowWidth]);

  return (
    <>
      {isMobileMenu && (
        <Drawer
          title={
            <img
              style={{ width: "100%", padding: 5, height: 65 }}
              alt="logo"
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
