import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Menu, Layout, Button, Drawer } from "antd";
import { BarsOutlined } from "@ant-design/icons";

import "./style.scss";

import useWindowSize from "../../hooks/useWindowSize";
import BrandLogo from "../../assets/images/company-logo.svg";

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
        <Menu.Item key={101} style={{ padding: 0, border: "none" }}>
          <Link to="/">
            <img className="logo" alt="logo" src={BrandLogo} />
          </Link>
        </Menu.Item>
        <Menu.Item key={0} style={{ border: "none", marginLeft: "20px" }}>
          <Link
            to="/home"
            className={
              history.location?.pathname === "/" ||
              history.location?.pathname === "/home"
                ? "active-nav-item"
                : "default-nav-item"
            }
          >
            Home
          </Link>
        </Menu.Item>
        <Menu.Item key={0} style={{ border: "none" }}>
          <Link
            to="/events"
            className={
              history.location?.pathname === "/events"
                ? "active-nav-item"
                : "default-nav-item"
            }
          >
            Events
          </Link>
        </Menu.Item>
        <Menu.Item key={0} style={{ border: "none" }}>
          <Link
            to="/customers"
            className={
              history.location?.pathname === "/customers"
                ? "active-nav-item"
                : "default-nav-item"
            }
          >
            Customers
          </Link>
        </Menu.Item>
        <Menu.Item key={0} style={{ border: "none" }}>
          <Link
            to="/contact-us"
            className={
              history.location?.pathname === "/contact-us"
                ? "active-nav-item"
                : "default-nav-item"
            }
          >
            Contact us
          </Link>
        </Menu.Item>
        <Menu.Item key={1} style={{ border: "none" }}>
          <Link
            to="/about-us"
            className={
              history.location?.pathname === "/about-us"
                ? "active-nav-item"
                : "default-nav-item"
            }
          >
            About us
          </Link>
        </Menu.Item>
        <Menu.Item
          key={3}
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
          key={3}
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
        <Menu.Item key={101} style={{ padding: 0, border: "none" }}>
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
        {authUser && (
          <Menu.Item key={2}>
            <Link onClick={() => toggleMobileMenuOpen()} to={"/profile/user"}>
              Profile
            </Link>
          </Menu.Item>
        )}
        {authUser && (
          <Menu.Item key={100}>
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
        {!authUser && (
          <Menu.Item key={2}>
            <Link onClick={() => toggleMobileMenuOpen()} to={"/account"}>
              Login
            </Link>
          </Menu.Item>
        )}
      </Menu>
    );
  }

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
