import React from 'react';

const NavLeft = () => {
  return (
    <div className="nav-left">
      <input type="text" className="search-box" placeholder="Type here to search..." />
    </div>
  );
}

const Logo = () => {
  return (
    <a className="logo">joyread</a>
  );
}

const NavRight = () => {
  return (
    <div className="nav-right">
      <a href="" className="nav-right__item" id="addNewBooks">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="20" height="20">
          <g fill="#676767">
            <path d="M18 43V5a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v38h16zM9 16a1 1 0 1 1 2 0v12a1 1 0 1 1-2 0V16z"/>
            <path data-color="color-2" d="M2 45v16a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V45H2z"/>
            <path d="M37 43V5a1 1 0 0 0-1-1H22a1 1 0 0 0-1 1v38h16zm-9-27a1 1 0 1 1 2 0v12a1 1 0 1 1-2 0V16z"/>
            <path data-color="color-2" d="M21 45v16a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V45H21z"/>
            <path d="M57.941 40.48L50.728 3.171a.998.998 0 0 0-1.172-.792L35.81 5.037a1 1 0 0 0-.792 1.171l7.214 37.31 15.709-3.038zm-13.17-25.972a.998.998 0 0 1 1.172.792l2.278 11.782a1 1 0 0 1-1.964.379l-2.278-11.782a1 1 0 0 1 .792-1.171z"/><path data-color="color-2" d="M42.611 45.481l3.037 15.709a1.001 1.001 0 0 0 1.172.791l13.746-2.657a1 1 0 0 0 .792-1.171l-3.037-15.71-15.71 3.038z"/>
          </g>
        </svg>
        <label>Add new books</label>
      </a>
      <input type="file" id="uploadBooks" accept="application/pdf, application/epub+zip" />
      <a href="" className="nav-right__item">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34" width="20" height="20">
          <g fill="#676767">
            <path d="M29.8 24.4S26 19.7 26 15v-4c0-5.5-4.5-10-10-10S6 5.5 6 11v4c0 4.7-3.7 9.3-3.8 9.4-.2.3-.3.7-.1 1.1.2.3.5.5.9.5h26c.4 0 .7-.2.9-.6.2-.3.1-.7-.1-1z"></path>
            <path data-color="color-2" d="M12.1 28c.4 1.7 2 3 3.9 3s3.4-1.3 3.9-3h-7.8z"></path>
          </g>
        </svg>
        <i>5</i>
        <label>Notifications</label>
      </a>
      <a href="" className="nav-right__item">
        <svg className="menu-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="20" height="20">
          <g fill="#676767">
            <path data-color="color-2" d="M60 27H4c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1h56c.6 0 1-.4 1-1v-8c0-.6-.4-1-1-1z"></path>
            <path d="M60 7H4c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1h56c.6 0 1-.4 1-1V8c0-.6-.4-1-1-1zm0 40H4c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1h56c.6 0 1-.4 1-1v-8c0-.6-.4-1-1-1z"></path>
          </g>
        </svg>
        <label>Menu</label>
      </a>
    </div>
  );
}

function Header() {
  return(
    <div className="header">
      <NavLeft />
      <Logo />
      <NavRight />
    </div>
  );
}

export default Header;