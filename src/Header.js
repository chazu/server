import React, { Component } from 'react';
import logoImg from './assets/png/logo.png';

function Logo() {
  return <a className="header__logo"><img src={logoImg} alt="joyread" /></a>
}

function HeaderLeft() {
  return (
    <div className="header__left">
      <input type="text" className="header__search" placeholder="Type here to search..." />
    </div>
  );
}

function HeaderRight() {
  return (
    <div className="header__right">
      <div className="header__notification"><i className="icon"><svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M19.2 15.6s-2.533-3.133-2.533-6.267V6.667C16.667 3 13.667 0 10 0S3.333 3 3.333 6.667v2.666c0 3.134-2.466 6.2-2.533 6.267-.133.2-.2.467-.067.733a.7.7 0 0 0 .6.334h17.334c.266 0 .466-.134.6-.4.133-.2.066-.467-.067-.667zM7.4 18c.267 1.133 1.333 2 2.6 2 1.267 0 2.267-.867 2.6-2H7.4z" fill="#676767"/></svg></i>Notifications</div>
      <div className="header__menu"><i className="icon"><svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M19.655 8H.345C.138 8 0 8.16 0 8.4v3.2c0 .24.138.4.345.4h19.31c.207 0 .345-.16.345-.4V8.4c0-.24-.138-.4-.345-.4zm0-8H.345C.138 0 0 .16 0 .4v3.2c0 .24.138.4.345.4h19.31c.207 0 .345-.16.345-.4V.4c0-.24-.138-.4-.345-.4zm0 16H.345c-.207 0-.345.16-.345.4v3.2c0 .24.138.4.345.4h19.31c.207 0 .345-.16.345-.4v-3.2c0-.24-.138-.4-.345-.4z" fill="#676767"/></svg></i>Menu</div>
    </div>
  )
}

class Header extends Component {
  render() {
    return (
      <header className="header">
        <HeaderLeft />
        <Logo />
        <HeaderRight />
      </header>
    );
  }
}

export default Header;