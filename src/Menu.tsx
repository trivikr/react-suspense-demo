import React from "react";
import { slide as BurgerMenu } from "react-burger-menu";

const Menu = (props: { pageWrapId: string; outerContainerId: string }) => (
  <BurgerMenu
    styles={styles}
    pageWrapId={props.pageWrapId}
    outerContainerId={props.outerContainerId}
  >
    <a id="home" className="menu-item" href="/">
      Home
    </a>
    <a id="about" className="menu-item" href="/about">
      About
    </a>
    <a id="contact" className="menu-item" href="/contact">
      Contact
    </a>
    <a className="menu-item--small" href="">
      Settings
    </a>
  </BurgerMenu>
);

const styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "20px",
    height: "20px",
    left: "15px",
    top: "12px"
  },
  bmBurgerBars: {
    background: "#ffffff",
    height: "2px"
  },
  bmBurgerBarsHover: {
    background: "#a90000"
  },
  bmCrossButton: {
    height: "24px",
    width: "24px"
  },
  bmCross: {
    background: "#ffffff"
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%"
  },
  bmMenu: {
    background: "#373a47",
    fontSize: "1.15em"
  },
  bmMorphShape: {
    fill: "#373a47"
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em"
  },
  bmItem: {
    color: "#ffffff",
    padding: "1em",
    textAlign: "left"
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)"
  }
};

export default Menu;
